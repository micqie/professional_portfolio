import { Award, CalendarCheck, FileBadge } from 'lucide-react'
import { credentials } from '../data/portfolioData'
import SectionHeading from './SectionHeading'

export default function Credentials() {
  return (
    <section id="credentials" className="section section-alt section-anchor">
      <div className="container">
        <SectionHeading eyebrow="Credentials & Activities" title="Recognition and campus involvement" description="Evidence-based achievements and activities that complement my technical work." />
        <div className="credentials-grid">
          {credentials.map((item) => <article className="credential-card" key={item.title}>
            <div className="credential-icon">{item.type === 'Credential' ? <Award aria-hidden="true" /> : <CalendarCheck aria-hidden="true" />}</div>
            <div className="credential-content"><span className="type-label">{item.type}</span><h3>{item.title}</h3><p className="credential-org">{item.organization} · {item.period}</p><p>{item.description}</p>{item.evidence && <p className="evidence-note"><FileBadge aria-hidden="true" />{item.evidence}</p>}</div>
            {item.images?.length ? <div className={`credential-gallery ${item.images.length === 1 ? 'single' : ''}`} aria-label={`${item.title} evidence`} tabIndex={item.images.length > 1 ? 0 : undefined}>
              {item.images.map((evidenceImage) => <figure key={evidenceImage.src}>
                <img src={evidenceImage.src} alt={evidenceImage.alt} loading="lazy" />
                <figcaption>{evidenceImage.caption}</figcaption>
              </figure>)}
            </div> : <div className="evidence-placeholder"><FileBadge aria-hidden="true" /><span>{item.type === 'Credential' ? 'Certificate image to be added' : 'Supporting evidence not added'}</span></div>}
          </article>)}
        </div>
      </div>
    </section>
  )
}
