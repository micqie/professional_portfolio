import { useCallback, useRef, useState } from 'react'
import { ArrowUpRight, ExternalLink, Image } from 'lucide-react'
import { projects } from '../data/portfolioData'
import SectionHeading from './SectionHeading'
import ProjectModal from './ProjectModal'

function ProjectCard({ project, index, onOpen }) {
  return (
    <article className="project-card">
      <div className={`project-visual visual-${(index % 3) + 1}`}>
        <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
        {project.screenshots?.length ? (
          <img src={project.screenshots[0].src} alt={project.screenshots[0].alt} loading="lazy" />
        ) : (
          <><Image aria-hidden="true" /><small>Evidence to be added</small></>
        )}
      </div>
      <div className="project-body">
        <div className="project-meta">{project.category && <span className="project-category">{project.category}</span>}{project.period && <time>{project.period}</time>}</div>
        <h3>{project.title}</h3>
        <p>{project.objective}</p>
        <div className="tag-list compact">{project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}{project.technologies.length > 4 && <span>+{project.technologies.length - 4}</span>}</div>
        <div className="project-actions">
          <button className="project-link" type="button" onClick={(event) => onOpen(project, event.currentTarget)} aria-haspopup="dialog">View project details <ArrowUpRight size={18} aria-hidden="true" /></button>
          {project.liveUrl && <a className="project-live-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} live site (opens in new tab)`}>Visit live site <ExternalLink size={16} aria-hidden="true" /></a>}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const triggerRef = useRef(null)
  const openProject = (project, trigger) => { triggerRef.current = trigger; setSelected(project) }
  const closeProject = useCallback(() => setSelected(null), [])
  return (
    <section id="projects" className="section section-alt section-anchor">
      <div className="container">
        <SectionHeading eyebrow="Selected Work" title="Systems built around practical needs" description="Academic and student-development projects spanning web systems, databases, QR-based workflows, and mobile applications." />
        <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} onOpen={openProject} />)}</div>
      </div>
      {selected && <ProjectModal project={selected} onClose={closeProject} triggerRef={triggerRef} />}
    </section>
  )
}
