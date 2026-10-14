import { useState } from 'react'
import { motion } from 'motion/react'
import { Folder } from 'lucide-react'
import { skills } from '../config'
import { ui, useLang } from '../i18n'
import { Brand, Frame, Reveal, SectionHead } from './common'

export function Skills() {
  const { t } = useLang()
  const [idx, setIdx] = useState(0)

  return (
    <section id="skills" className="section container">
      <Reveal><SectionHead tag={t(ui.skillsTag)} title={t(ui.skillsTitle)} /></Reveal>
      <Reveal className="skills">
        <div role="tablist" aria-orientation="vertical" className="skill-cats">
          {skills.map((c, i) => (
            <button key={c.cat.en} role="tab" aria-selected={i === idx} className={`skill-cat ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)}>
              <Folder size={13} className="folder-icon" aria-hidden />
              <span>{t(c.cat)}</span>
              <b className="badge">{c.items.length}</b>
            </button>
          ))}
        </div>
        <Frame handles className="skill-panel">
          <motion.div key={idx} role="tabpanel" className="skill-grid" initial="h" animate="s" transition={{ staggerChildren: 0.04 }}>
            {skills[idx].items.map((s) => (
              <motion.div key={s.name} variants={{ h: { opacity: 0, y: 8 }, s: { opacity: 1, y: 0 } }}>
                <Frame corners className="skill-tile">
                  <Brand icon={s.icon} abbr={s.abbr} size={24} />
                  <span className="mono">{s.name}</span>
                </Frame>
              </motion.div>
            ))}
          </motion.div>
        </Frame>
      </Reveal>
    </section>
  )
}
