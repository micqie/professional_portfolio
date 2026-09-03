import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="section section-anchor">
      <div className="container">
        <SectionHeading eyebrow="Education" title="Academic foundation" />
        <article className="education-card">
          <div className="education-icon"><GraduationCap aria-hidden="true" /></div>
          <div><span className="type-label">Undergraduate Program</span><h3>{education.degree}</h3><p>{education.school}</p><span className="education-status">{education.status}</span></div>
          <time>{education.period}</time>
        </article>
      </div>
    </section>
  )
}
