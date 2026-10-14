import { Mail } from 'lucide-react'
import { siFacebook, siGithub, siInstagram, siTiktok } from 'simple-icons'
import { nav, profile } from '../config'
import { ui, useLang } from '../i18n'
import { Brand, LinkedinIcon } from './common'

const mono = (i: { path: string }) => ({ path: i.path, hex: '000000' }) // icon 1 màu theo chữ

export function Footer() {
  const { t } = useLang()
  const socials = [
    { href: profile.github, label: 'GitHub', icon: <Brand icon={mono(siGithub)} size={13} /> },
    { href: profile.linkedin, label: 'LinkedIn', icon: <LinkedinIcon size={13} /> },
    { href: profile.socials.facebook, label: 'Facebook', icon: <Brand icon={mono(siFacebook)} size={13} /> },
    { href: profile.socials.instagram, label: 'Instagram', icon: <Brand icon={mono(siInstagram)} size={13} /> },
    { href: profile.socials.tiktok, label: 'TikTok', icon: <Brand icon={mono(siTiktok)} size={13} /> },
  ].filter((s) => s.href)

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2 className="footer-title">{t(ui.footerTitle)}</h2>
          <p className="footer-text">{t(ui.footerText)}</p>
          <p className="mono status"><span className="dot" />{t(ui.available)}</p>
        </div>
        <div>
          <p className="mono tag">{t(ui.navigation)}</p>
          <ul className="footer-nav">
            {nav.map((n) => <li key={n.id}><a href={`#${n.id}`}>{t(n.label)}</a></li>)}
          </ul>
        </div>
        <div>
          <p className="mono tag">{t(ui.socials)}</p>
          <div className="socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="social">{s.icon}</a>
            ))}
          </div>
          <a className="btn pill" href={`mailto:${profile.email}`}><Mail size={13} /> {t(ui.getInTouch)}</a>
        </div>
      </div>
      <div className="container footer-bottom mono">{profile.copyright}</div>
    </footer>
  )
}
