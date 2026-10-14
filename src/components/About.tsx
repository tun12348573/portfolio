import { useState } from 'react'
import { motion } from 'motion/react'
import { Folder } from 'lucide-react'
import { about, type AboutTab } from '../config'
import { ui, useLang } from '../i18n'
import { Frame, Reveal, useTypeOnce } from './common'

export function About() {
  const { t } = useLang()
  const [idx, setIdx] = useState(0)
  const tab = about[idx]

  return (
    <section id="about" className="section container">
      <Reveal className="window">
        <div className="win-title mono">
          <span className="dots" aria-hidden><i /><i /><i /></span>
          ABOUT_ME.EXE - {tab.file.toUpperCase()}
        </div>
        <div className="win-path">
          Path: <code className="mono">C:/portfolio/about_me/{tab.file}</code>
        </div>
        <div className="win-body">
          <aside className="win-side">
            <p className="side-label">{t(ui.directories)}</p>
            <div role="tablist" aria-orientation="vertical" className="side-list">
              {about.map((a, i) => (
                <button
                  key={a.file}
                  role="tab"
                  aria-selected={i === idx}
                  className={`side-item ${i === idx ? 'active' : ''}`}
                  onClick={() => setIdx(i)}
                >
                  <Folder size={13} className="folder-icon" aria-hidden /> {a.file}
                </button>
              ))}
            </div>
          </aside>
          <div className="win-content" role="tabpanel">
            <TabContent key={tab.file} tab={tab} />
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function TabContent({ tab }: { tab: AboutTab }) {
  const { t } = useLang()
  const text = useTypeOnce(t(tab.text), 1000)
  return (
    <>
      <div className="win-text">
        <p className="mono active-file">{t(ui.activeFile)} {tab.file.toUpperCase()}</p>
        <motion.h3 className="win-h" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          {t(tab.title)}
        </motion.h3>
        <p className="win-p">{text}</p>
        <motion.table className="win-table" initial="h" animate="s" transition={{ staggerChildren: 0.12, delayChildren: 0.4 }}>
          <tbody>
            {tab.rows.map((r) => (
              <motion.tr key={r.k.en} variants={{ h: { opacity: 0, y: 6 }, s: { opacity: 1, y: 0 } }}>
                <th>{t(r.k)}:</th>
                <td className={r.status ? 'status' : ''}>{r.status && <span className="dot" />}{t(r.v)}</td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
        <motion.div
          className="win-art"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <Frame corners className="art-frame">
            {tab.art === 'terminal' && <Terminal />}
            {tab.art === 'school' && <School />}
            {tab.art === 'map' && <VietnamMap />}
          </Frame>
        </motion.div>
    </>
  )
}

function Terminal() {
  return (
    <div className="terminal" role="img" aria-label="Terminal: hello world">
      <div className="term-bar"><span className="dots"><i /><i /><i /></span><span className="term-url" /></div>
      <p className="term-big">// HELLO, WORLD !</p>
      <p className="term-code">&lt;script src="./main.tsx"&gt;&lt;/script&gt;</p>
      <p className="term-code">console.log("hello, world")</p>
    </div>
  )
}

// ponytail: trường học vẽ bằng CSS/SVG khối đơn giản; thay bằng ảnh thật khi có
function School() {
  return (
    <div className="mini-browser" role="img" aria-label="University building">
      <div className="term-bar"><span className="dots"><i /><i /><i /></span><span className="term-url" /></div>
      <svg viewBox="0 0 200 120" className="school">
        <rect x="0" y="0" width="200" height="120" fill="#cfe8fb" />
        <polygon points="40,40 100,12 160,40" fill="#1e5aa8" />
        <rect x="40" y="40" width="120" height="70" fill="#f4f1e8" />
        {[0, 1, 2, 3, 4].map((i) => <rect key={i} x={50 + i * 22} y="50" width="12" height="16" fill="#009df5" />)}
        {[0, 1, 2, 3, 4].map((i) => <rect key={i} x={50 + i * 22} y="74" width="12" height="16" fill="#009df5" />)}
        <rect x="90" y="92" width="20" height="18" fill="#e9b949" />
        <rect x="0" y="108" width="200" height="12" fill="#6cbf5a" />
      </svg>
    </div>
  )
}

// Đường viền Việt Nam xấp xỉ (lon, lat) → lưới chấm
const VN: [number, number][] = [
  [102.1, 22.4], [103.0, 22.6], [104.0, 22.8], [105.3, 23.3], [106.0, 22.9], [106.7, 22.8], [107.4, 21.7], [108.0, 21.5],
  [106.7, 20.7], [106.0, 19.9], [105.7, 19.0], [106.5, 17.6], [107.2, 16.7], [108.2, 16.0], [108.8, 15.3], [109.2, 13.8],
  [109.3, 12.6], [109.2, 11.6], [108.5, 11.0], [107.5, 10.5], [106.8, 10.4], [106.6, 9.6], [105.4, 8.6], [104.8, 8.6],
  [104.8, 9.5], [104.5, 10.4], [105.1, 10.9], [105.9, 11.6], [106.4, 11.9], [107.5, 12.3], [107.6, 13.4], [107.4, 14.6],
  [107.6, 15.4], [106.6, 16.5], [105.6, 17.8], [104.8, 18.6], [103.9, 19.3], [104.6, 19.9], [103.2, 20.8], [102.7, 21.6],
]
const inside = (x: number, y: number) => {
  let c = false
  for (let i = 0, j = VN.length - 1; i < VN.length; j = i++) {
    const [xi, yi] = VN[i], [xj, yj] = VN[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c
  }
  return c
}
const STEP = 0.28
const dots: [number, number][] = []
for (let y = 23.4; y > 8.4; y -= STEP) for (let x = 102; x < 109.5; x += STEP) if (inside(x, y)) dots.push([x, y])
// Hoàng Sa, Trường Sa
const islands: [number, number][] = [[111.6, 16.5], [112.0, 16.3], [112.3, 16.6], [113.6, 10.2], [114.1, 9.8], [114.5, 10.4], [114.2, 11.0]]

function VietnamMap() {
  const px = (x: number) => (x - 101.8) * 10
  const py = (y: number) => (23.6 - y) * 10
  return (
    <svg viewBox="0 0 132 156" className="vn-map" role="img" aria-label="Map of Vietnam">
      {dots.map(([x, y], i) => <rect key={i} x={px(x)} y={py(y)} width="2.2" height="2.2" />)}
      {islands.map(([x, y], i) => <rect key={`i${i}`} x={px(x)} y={py(y)} width="1.8" height="1.8" />)}
    </svg>
  )
}
