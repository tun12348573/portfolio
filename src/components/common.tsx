import { useEffect, useState, type ReactNode } from 'react'
import { motion } from 'motion/react'

// Khung lựa chọn: dấu góc L và/hoặc 8 handle vuông như phần mềm thiết kế
type FrameProps = { corners?: boolean; handles?: boolean; className?: string; children: ReactNode }

export function Frame({ corners, handles, className = '', children }: FrameProps) {
  return (
    <div className={`frame ${className}`}>
      {children}
      {corners && ['tl', 'tr', 'bl', 'br'].map((p) => <span key={p} className={`corner ${p}`} aria-hidden />)}
      {handles && ['tl', 't', 'tr', 'r', 'br', 'b', 'bl', 'l'].map((p) => <span key={p} className={`handle ${p}`} aria-hidden />)}
    </div>
  )
}

export function Brand({ icon, abbr, size = 22 }: { icon: { path: string; hex: string } | null; abbr?: string; size?: number }) {
  if (!icon) return <span className="brand-abbr" style={{ fontSize: size * 0.5 }}>{abbr}</span>
  // logo đen (Next.js, Vercel…) đổi theo màu chữ để thấy được ở dark theme
  const fill = icon.hex === '000000' || icon.hex === '181717' ? 'currentColor' : `#${icon.hex}`
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={fill} aria-hidden>
      <path d={icon.path} />
    </svg>
  )
}

// simple-icons không có LinkedIn → tự vẽ
export const LinkedinIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
    <path d="M3 3h18v18H3zM6.5 9.5V18h2.6V9.5zM7.8 5.6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 9.5V18h2.6v-4.4c0-1.2.4-2.1 1.6-2.1s1.4 1 1.4 2.2V18h2.6v-4.9c0-2.4-1.1-3.8-3.2-3.8-1.2 0-2 .6-2.4 1.2V9.5z" fillRule="evenodd" />
  </svg>
)

const reduced = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

// Gõ – dừng – xoá – sang câu tiếp, lặp vô hạn
export function useTypewriterLoop(words: string[], type = 85, erase = 50, hold = 1300) {
  const [i, setI] = useState(0)
  const [n, setN] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const word = words[i % words.length]
  useEffect(() => {
    if (reduced()) { setN(word.length); return }
    let ms = deleting ? erase : type
    if (!deleting && n === word.length) ms = hold
    const id = setTimeout(() => {
      if (!deleting && n === word.length) setDeleting(true)
      else if (deleting && n === 0) { setDeleting(false); setI((x) => x + 1) }
      else setN((x) => x + (deleting ? -1 : 1))
    }, ms)
    return () => clearTimeout(id)
  }, [n, deleting, word, type, erase, hold])
  return word.slice(0, n)
}

// Gõ một đoạn văn trong khoảng `duration` ms (dùng khi đổi tab About)
export function useTypeOnce(text: string, duration = 1000) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (reduced()) { setN(text.length); return }
    setN(0)
    const step = Math.max(1, Math.ceil(text.length / (duration / 16)))
    const id = setInterval(() => setN((x) => {
      if (x + step >= text.length) { clearInterval(id); return text.length }
      return x + step
    }), 16)
    return () => clearInterval(id)
  }, [text, duration])
  return text.slice(0, n)
}

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHead({ tag, title, aside }: { tag: string; title: string; aside?: ReactNode }) {
  return (
    <div className="section-head">
      <div>
        <p className="mono tag">{tag}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      {aside}
    </div>
  )
}
