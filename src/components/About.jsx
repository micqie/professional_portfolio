import { Code2, Database, Layout } from 'lucide-react'
import { profile } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function About() {
  const interests = [
    [Code2, 'Software Development', 'Building practical web and mobile solutions.'],
    [Database, 'Database Systems', 'Organizing reliable, accessible information.'],
    [Layout, 'User-Focused Interfaces', 'Designing clear experiences around real needs.'],
  ]
  return (
    <section id="about" className="section section-anchor">
      <div className="container about-grid">
        <SectionHeading eyebrow="About" title="Focused on useful technology and continuous growth" />
        <div className="about-copy"><p>{profile.summary}</p><p>{profile.about}</p></div>
        <div className="interest-grid">
          {interests.map(([Icon, title, text]) => <article className="interest-card" key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </div>
    </section>
  )
}
