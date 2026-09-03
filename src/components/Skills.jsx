import { skills } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="section section-alt section-anchor">
      <div className="container">
        <SectionHeading eyebrow="Capabilities" title="Skills and areas of knowledge" description="A practical toolkit developed through academic coursework and hands-on system projects." />
        <div className="skills-grid">
          {skills.map((skill) => <article className="skill-card" key={skill.group}><h3>{skill.group}</h3><div className="tag-list">{skill.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}
        </div>
      </div>
    </section>
  )
}
