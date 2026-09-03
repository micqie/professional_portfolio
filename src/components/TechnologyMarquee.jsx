import {
  SiAxios,
  SiBootstrap,
  SiCss,
  SiDart,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiOpenjdk,
  SiPhp,
  SiPython,
} from 'react-icons/si'

const technologies = [
  [SiPhp, 'PHP'],
  [SiJavascript, 'JavaScript'],
  [SiPython, 'Python'],
  [SiOpenjdk, 'Java'],
  [SiDart, 'Dart'],
  [SiHtml5, 'HTML'],
  [SiCss, 'CSS'],
  [SiBootstrap, 'Bootstrap'],
  [SiFlutter, 'Flutter'],
  [SiMysql, 'MySQL'],
  [SiAxios, 'Axios'],
  [SiGit, 'Git'],
  [SiGithub, 'GitHub'],
]

function TechnologyGroup({ duplicate = false }) {
  return (
    <div className="technology-group" aria-hidden={duplicate || undefined}>
      {technologies.map(([Icon, name]) => (
        <div className="technology-item" key={name}>
          <Icon aria-hidden="true" />
          <span>{name}</span>
        </div>
      ))}
    </div>
  )
}

export default function TechnologyMarquee() {
  return (
    <section className="technology-marquee" aria-labelledby="technology-title">
      <div className="container technology-heading">
        <span id="technology-title">Technology toolkit</span>
        <small>Tools used across my academic and practical work</small>
      </div>
      <div className="technology-window">
        <div className="technology-track">
          <TechnologyGroup />
          <TechnologyGroup duplicate />
        </div>
      </div>
    </section>
  )
}
