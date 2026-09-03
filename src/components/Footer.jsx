import { CodeXml, ContactRound, Mail } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div><a className="footer-name" href="#home">{profile.name}</a><p>{profile.shortTitle}</p></div>
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="footer-links" aria-label="Social and contact links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in new tab)"><CodeXml aria-hidden="true" /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in new tab)"><ContactRound aria-hidden="true" /></a>
          <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.name}`}><Mail aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  )
}
