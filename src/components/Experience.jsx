import { BriefcaseBusiness, Check } from 'lucide-react'
import { experience } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section section-anchor">
      <div className="container">
        <SectionHeading eyebrow="Relevant Experience" title="Applied development in an academic setting" description="Practical student-development experience supporting a real campus need." />
        <article className="timeline-card">
          <div className="timeline-marker"><BriefcaseBusiness aria-hidden="true" /></div>
          <div className="timeline-content">
            <div className="timeline-header"><div><span className="type-label">{experience.type}</span><h3>{experience.position}</h3><p>{experience.organization}</p></div><time>{experience.period}</time></div>
            <p className="timeline-description">{experience.description}</p>
            <ul className="check-list">{experience.responsibilities.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
          </div>
        </article>
      </div>
    </section>
  )
}
