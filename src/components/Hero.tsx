import { motion } from 'motion/react'
import { ArrowRight, Cpu, Download, Folder, Layers, Mail, MessageSquare } from 'lucide-react'
import { siGithub } from 'simple-icons'
import { greetings, profile, stats } from '../config'
import { ui, useLang } from '../i18n'
import { Brand, Frame, LinkedinIcon, useTypewriterLoop } from './common'

const statIcons = { folder: Folder, cpu: Cpu, layers: Layers }

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export function Hero() {
  const { t } = useLang()
  const greeting = useTypewriterLoop(greetings.map(t))

  return (
    <section id="hero" className="hero container">
      <motion.div className="hero-text" initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }}>
        <motion.p variants={item} className="greeting">
          {greeting}<span className="caret" aria-hidden />
        </motion.p>

        <motion.h1 variants={item} className="cutout" aria-label={profile.heroName.map((p) => p.ch).join('')}>
          {profile.heroName.map((p, i) =>
            p.ch === ' ' ? <span key={i} className="cut-gap" /> : <span key={i} className={`cut cut-${p.s}`} aria-hidden>{p.ch}</span>,
          )}
        </motion.h1>

        <motion.p variants={item} className="role">
          <span className="accent">{t(ui.roleA)}</span> {t(ui.roleB)}
        </motion.p>
        <motion.div variants={item} className="role role-2">
          {t(ui.roleC)}{' '}
          <Frame handles className="role-select">
            <span className="role-tag">{t(ui.roleD)}</span>
          </Frame>
        </motion.div>

        <motion.p variants={item} className="intro">{t(ui.intro)}</motion.p>

        <motion.div variants={item} className="hero-btns">
          <a href="#projects" className="btn btn-solid">{t(ui.viewProjects)} <ArrowRight size={13} /></a>
          {profile.cv && (
            <a href={profile.cv} download className="btn btn-ghost">{t(ui.downloadCv)} <Download size={13} /></a>
          )}
        </motion.div>

        <motion.div variants={item} className="stats">
          {stats.map((s) => {
            const Icon = statIcons[s.icon]
            return (
              <Frame handles key={s.icon} className="stat">
                <Icon size={16} className="stat-icon" aria-hidden />
                <div>
                  <b>{s.value}</b>
                  <small>{t(s.label)}</small>
                </div>
              </Frame>
            )
          })}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-card-wrap"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
      >
        <Frame corners className="hero-card">
          <div className="photo">
            <img src={profile.avatar} alt="Portrait" />
            <span className="photo-tint" aria-hidden />
            <span className="photo-grid" aria-hidden />
          </div>
          <p className="connect mono"><MessageSquare size={12} /> {t(ui.connect)}</p>
          <div className="connect-btns">
            <a className="btn btn-ghost mono" href={`mailto:${profile.email}`}><Mail size={12} /> Email</a>
            {profile.linkedin && (
              <a className="btn btn-ghost mono" href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={12} /> LinkedIn</a>
            )}
            <a className="btn btn-ghost mono" href={profile.github} target="_blank" rel="noreferrer"><Brand icon={siGithub} size={12} /> GitHub</a>
          </div>
        </Frame>
      </motion.div>
    </section>
  )
}
