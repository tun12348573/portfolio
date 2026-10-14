import { useEffect, useRef, useState } from 'react'
import { LayoutGroup, motion } from 'motion/react'
import { X } from 'lucide-react'
import { services, type Service } from '../config'
import { ui, useLang } from '../i18n'
import { Frame, Reveal, SectionHead } from './common'

const ROTATE_MS = 6000
// Ô 0 và 3 nền đen; hàng trên 58/42, hàng dưới 42/58
const slotClass = ['wide dark', 'narrow light', 'narrow light', 'wide dark']

export function Services() {
  const { t } = useLang()
  const [order, setOrder] = useState([0, 1, 2, 3])
  const [paused, setPaused] = useState(false)
  const [open, setOpen] = useState<Service | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const still = matchMedia('(prefers-reduced-motion: reduce), (max-width: 760px)')
    if (paused || open || still.matches) return
    const id = setInterval(() => {
      if (!document.hidden) setOrder((o) => o.map((x) => (x + 1) % 4))
    }, ROTATE_MS)
    return () => clearInterval(id)
  }, [paused, open])

  useEffect(() => {
    if (open) dialog.current?.showModal()
  }, [open])

  const card = (slot: number) => {
    const sv = services[order[slot]]
    return (
      <motion.div key={sv.no} layoutId={sv.no} className={`svc-slot ${slotClass[slot]}`} transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}>
        <Frame corners className="svc-card">
          {/* layout con → motion bù scale, chữ không bị kéo giãn khi đổi ô */}
          <motion.div layout className="svc-inner" transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}>
            <div className="svc-top">
              <p className="mono svc-tag">{t(sv.tag)}</p>
              <span className="mono svc-no">{sv.no}</span>
            </div>
            <h3>{t(sv.title)}</h3>
            <p className="svc-text">{t(sv.text)}</p>
            <button className="svc-link" onClick={() => setOpen(sv)}>{t(ui.details)}</button>
          </motion.div>
        </Frame>
      </motion.div>
    )
  }

  return (
    <section id="services" className="section container">
      <Reveal><SectionHead tag={t(ui.servicesTag)} title={t(ui.servicesTitle)} /></Reveal>
      <Reveal>
        <div className="svc-grid" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
          <LayoutGroup>
            <div className="svc-row">{card(0)}{card(1)}</div>
            <div className="svc-row">{card(2)}{card(3)}</div>
          </LayoutGroup>
        </div>
      </Reveal>

      {/* Bổ sung: video không cho thấy chi tiết khi bấm → dialog native tối giản */}
      <dialog ref={dialog} className="svc-dialog" onClose={() => setOpen(null)} onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}>
        {open && (
          <Frame handles className="dialog-inner">
            <div className="svc-top">
              <p className="mono svc-tag">{t(open.tag)}</p>
              <button className="icon-btn" onClick={() => dialog.current?.close()} aria-label={t(ui.close)}><X size={16} /></button>
            </div>
            <h3><span className="mono svc-no">{open.no}</span> {t(open.title)}</h3>
            <p className="svc-text">{t(open.text)}</p>
            <ul className="svc-list mono">
              {open.details.map((d) => <li key={d.en}>{t(d)}</li>)}
            </ul>
            {open.link && <a className="view-all" href={open.link} target="_blank" rel="noreferrer">{t(ui.related)}</a>}
          </Frame>
        )}
      </dialog>
    </section>
  )
}
