import { useEffect, useState } from 'react'
import { MotionConfig } from 'motion/react'
import { LangProvider } from './i18n'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { Footer } from './components/Footer'

type Theme = 'light' | 'dark'

function initialTheme(): Theme {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch { /* ignore */ }
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Ô vuông mờ rải trên nền lưới (vị trí cố định theo ô 32px)
const SQUARES = [[3, 2], [9, 5], [15, 1], [21, 4], [27, 2], [33, 6], [6, 9], [12, 12], [24, 10], [30, 13], [2, 15], [18, 16], [36, 9], [40, 3]]

export default function App() {
  const [theme, setTheme] = useState<Theme>(initialTheme)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* ignore */ }
  }, [theme])

  return (
    <LangProvider>
      <MotionConfig reducedMotion="user">
        <div className="bg-grid" aria-hidden>
          {SQUARES.map(([x, y], i) => (
            <span key={i} className="bg-square" style={{ left: x * 32, top: y * 32, animationDelay: `${(i * 1.7) % 8}s` }} />
          ))}
        </div>
        <Header theme={theme} onTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Services />
          <Skills />
        </main>
        <Footer />
      </MotionConfig>
    </LangProvider>
  )
}
