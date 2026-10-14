import { ExternalLink } from 'lucide-react'
import { siGithub } from 'simple-icons'
import { profile, projects } from '../config'
import { ui, useLang } from '../i18n'
import { Brand, Frame, Reveal, SectionHead } from './common'

export function Projects() {
  const { t } = useLang()
  return (
    <section id="projects" className="section container">
      <Reveal>
        <SectionHead
          tag={t(ui.projectsTag)}
          title={t(ui.projectsTitle)}
          aside={<a className="view-all" href={`${profile.github}?tab=repositories`} target="_blank" rel="noreferrer">{t(ui.viewAll)}</a>}
        />
      </Reveal>
      <div className="project-grid">
        {projects.map((p, i) => (
          <Reveal key={p.repo} delay={i * 0.1}>
            <Frame corners className="project-card">
              <div className="project-shot">
                {p.image
                  ? <img src={p.image} alt={`${t(p.name)} screenshot`} loading="lazy" />
                  // ponytail: chưa có ảnh → placeholder chữ; thêm screenshot vào public/projects rồi set `image`
                  : <div className="shot-placeholder mono"><span>{t(p.name)}</span><small>{p.stack}</small></div>}
              </div>
              <div className="project-body">
                <h3>{t(p.name)}</h3>
                <p>{t(p.desc)}</p>
                <div className="project-links">
                  <a className="btn btn-ghost mono" href={p.repo} target="_blank" rel="noreferrer">
                    <Brand icon={siGithub} size={12} /> {t(ui.source)}
                  </a>
                  {p.demo && (
                    <a className="btn btn-solid mono" href={p.demo} target="_blank" rel="noreferrer">
                      <ExternalLink size={12} /> {t(ui.demo)}
                    </a>
                  )}
                </div>
              </div>
            </Frame>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
