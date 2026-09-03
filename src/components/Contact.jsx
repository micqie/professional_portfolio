import { CodeXml, ContactRound, ExternalLink, Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(form.get('subject'))
    const body = encodeURIComponent(`Hello Micah,\n\n${form.get('message')}\n\nFrom: ${form.get('name')}\nEmail: ${form.get('email')}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const contactLinks = [
    [Mail, 'Email', profile.email, `mailto:${profile.email}`, false],
    [Phone, 'Phone', profile.phone, `tel:${profile.phoneHref}`, false],
    [CodeXml, 'GitHub', 'github.com/micqie', profile.github, true],
    [ContactRound, 'LinkedIn', 'Micah Dusil Lago', profile.linkedin, true],
  ]

  return (
    <section id="contact" className="section contact-section section-anchor">
      <div className="container">
        <SectionHeading eyebrow="Contact" title="Let’s discuss an opportunity" description="I am open to employment, internship, academic, and professional opportunities where I can learn and contribute." />
        <div className="contact-grid">
          <div className="contact-details">
            <div className="location"><MapPin aria-hidden="true" /><span><strong>Cagayan de Oro</strong><small>Philippines</small></span></div>
            <div className="contact-list">{contactLinks.map(([Icon, label, value, href, external]) => <a key={label} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} aria-label={`${label}: ${value}${external ? ' (opens in new tab)' : ''}`}><span className="contact-icon"><Icon aria-hidden="true" /></span><span><small>{label}</small><strong>{value}</strong></span>{external && <ExternalLink className="external-icon" size={16} aria-hidden="true" />}</a>)}</div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-note"><Mail size={18} aria-hidden="true" /><p>Submitting this form opens your default email application. No information is stored by this website.</p></div>
            <div className="form-row"><label>Name<input name="name" type="text" autoComplete="name" required /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label></div>
            <label>Subject<input name="subject" type="text" required /></label>
            <label>Message<textarea name="message" rows="5" required /></label>
            <button className="button primary submit-button" type="submit">Prepare Email <Send size={18} aria-hidden="true" /></button>
          </form>
        </div>
      </div>
    </section>
  )
}
