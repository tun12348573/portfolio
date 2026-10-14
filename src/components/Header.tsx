import { useEffect, useState } from 'react'
import { Briefcase, CodeXml, House, Menu, Moon, Sun, Target, UserRound, X } from 'lucide-react'
import { nav, profile } from '../config'
import { ui, useLang } from '../i18n'

const icons = { home: House, user: UserRound, briefcase: Briefcase, services: Target, code: CodeXml }

export function useActiveSection() {
  const [active, setActive] = useState('hero')
  useEffect(() => {
    const els = nav.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[]
    // dải giữa màn hình: section nào cắt qua dải này là active
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return active
}

export function Logo() {
  return (
    <a href="#hero" className="logo" aria-label="Home">
      <svg viewBox="0 0 40 28" width="34" height="24" aria-hidden>
        <path d="M14 2 2 14l12 12h8L10 14 22 2z M24 6h14v6H30v10h-6z" fill="currentColor" />
      </svg>
      <span className="logo-text">
        <b>{profile.logo.top}</b>
        <b>{profile.logo.bottom}</b>
      </span>
    </a>
  )
}

type Props = { theme: 'light' | 'dark'; onTheme: () => void }

export function Header({ theme, onTheme }: Props) {
  const { t, lang, setLang } = useLang()
  const active = useActiveSection()
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <Logo />
        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main">
          {nav.map((n) => {
            const Icon = icons[n.icon]
            return (
              <a key={n.id} href={`#${n.id}`} className={`nav-link ${active === n.id ? 'active' : ''}`} onClick={() => setOpen(false)}>
                <Icon size={12} strokeWidth={2.2} aria-hidden />
                {t(n.label)}
                {active === n.id && ['tl', 'tr', 'bl', 'br'].map((p) => <span key={p} className={`corner ${p}`} aria-hidden />)}
              </a>
            )
          })}
        </nav>
        <div className="header-actions">
          <button className="lang-btn mono" onClick={() => setLang(lang === 'en' ? 'vi' : 'en')} aria-label="Language">
            <span className={lang === 'vi' ? 'on' : ''}>VI</span>/<span className={lang === 'en' ? 'on' : ''}>EN</span>
          </button>
          <button className="theme-btn" onClick={onTheme} aria-label={t(ui.theme)} aria-pressed={theme === 'dark'}>
            <span className="theme-knob">{theme === 'dark' ? <Moon size={11} /> : <Sun size={11} />}</span>
          </button>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label={t(ui.menu)} aria-expanded={open}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  )
}
