import { ArrowRight, FileText, Mail } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="home" className="hero section-anchor" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="status-pill"><span aria-hidden="true" /> Open to professional opportunities</span>
          <p className="hero-kicker">Professional Portfolio</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <div className="hero-meta" aria-label="Academic information">
            <span>{profile.program}</span><span aria-hidden="true">•</span><span>{profile.level}</span><span aria-hidden="true">•</span><span>{profile.graduation}</span>
          </div>
          <p className="hero-intro">Building practical, user-focused systems through thoughtful software development, database design, and dependable collaboration.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View Projects <ArrowRight size={18} aria-hidden="true" /></a>
            <a className="button secondary" href="#contact"><Mail size={18} aria-hidden="true" /> Contact Me</a>
            {profile.resume ? (
              <a className="button text-button" href={profile.resume} target="_blank" rel="noopener noreferrer"><FileText size={18} aria-hidden="true" /> View Résumé</a>
            ) : (
              <span className="button disabled" aria-disabled="true" title="Résumé PDF will be added later"><FileText size={18} aria-hidden="true" /> Résumé coming soon</span>
            )}
          </div>
        </div>
        <div className="profile-visual" aria-label={profile.photo ? 'Professional photo of Micah D. Lago' : 'Initials placeholder for a future professional photo'}>
          <div className="portrait-frame">
            {profile.photo ? <img src={profile.photo} alt="Micah D. Lago" /> : <span aria-hidden="true">{profile.initials}</span>}
          </div>
          <div className="profile-card"><span>Current program</span><strong>BS Information Technology</strong><small>Expected 2027</small></div>
        </div>
      </div>
    </section>
  )
}
