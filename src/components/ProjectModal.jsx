import { useEffect, useRef } from 'react'
import { CodeXml, ExternalLink, Image, X } from 'lucide-react'

export default function ProjectModal({ project, onClose, triggerRef }) {
  const modalRef = useRef(null)
  const titleId = `project-title-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const triggerElement = triggerRef?.current
    document.body.style.overflow = 'hidden'
    const modal = modalRef.current
    const focusableSelector = 'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
    const focusable = () => [...modal.querySelectorAll(focusableSelector)]
    focusable()[0]?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab') return
      const items = focusable()
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      triggerElement?.focus()
    }
  }, [onClose, triggerRef])

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="project-modal" ref={modalRef} role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <button className="modal-close" type="button" onClick={onClose} aria-label={`Close ${project.title} details`}><X aria-hidden="true" /></button>
        <div className="modal-heading">{project.category && <span className="project-category">{project.category}</span>}<h2 id={titleId}>{project.title}</h2>{project.period && <p>{project.period}</p>}</div>
        {project.screenshots?.length ? (
          <div className="project-gallery" aria-label={`${project.title} screenshots`} tabIndex={project.screenshots.length > 1 ? 0 : undefined}>
            {project.screenshots.map((screenshot) => (
              <figure key={screenshot.src}>
                <img src={screenshot.src} alt={screenshot.alt} loading="lazy" />
                <figcaption>{screenshot.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="evidence-placeholder large">
            <Image aria-hidden="true" /><div><strong>Project evidence not yet added</strong><span>Real screenshots can be added when available.</span></div>
          </div>
        )}
        <div className="modal-grid">
          <div className="modal-wide"><h3>Objective</h3><p>{project.objective}</p></div>
          <div className="modal-wide"><h3>Key contributions</h3><ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="modal-wide"><h3>Outcome</h3><p>{project.outcome}</p></div>
          <div className="modal-wide"><h3>Technologies</h3><div className="tag-list compact">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
        </div>
        {(project.repository || project.liveUrl) && <div className="modal-actions">
          {project.repository && <a className="button secondary" href={project.repository} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} repository on GitHub (opens in new tab)`}><CodeXml size={18} /> Repository</a>}
          {project.liveUrl && <a className="button primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live project (opens in new tab)`}><ExternalLink size={18} /> Live project</a>}
        </div>}
      </div>
    </div>
  )
}
