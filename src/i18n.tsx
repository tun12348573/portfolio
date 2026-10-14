import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { L } from './config'

export type Lang = keyof L

// Chuỗi giao diện cố định (không phải nội dung cá nhân)
export const ui = {
  roleA: { en: 'FULLSTACK', vi: 'LẬP TRÌNH VIÊN' },
  roleB: { en: 'DEVELOPER', vi: 'FULLSTACK' },
  roleC: { en: '& UI/UX', vi: '& UI/UX' },
  roleD: { en: 'DESIGNER', vi: 'DESIGNER' },
  intro: {
    en: 'I build fast, clean web interfaces, serverless backends on AWS and cross-platform mobile apps with modern technologies.',
    vi: 'Mình xây dựng giao diện web nhanh, gọn, backend serverless trên AWS và ứng dụng di động đa nền tảng bằng công nghệ hiện đại.',
  },
  viewProjects: { en: 'View Projects', vi: 'Xem dự án' },
  downloadCv: { en: 'Download CV', vi: 'Tải CV' },
  connect: { en: "LET'S CONNECT:", vi: 'KẾT NỐI:' },
  directories: { en: 'DIRECTORIES', vi: 'THƯ MỤC' },
  activeFile: { en: '// ACTIVE FILE:', vi: '// FILE ĐANG MỞ:' },
  projectsTag: { en: 'SELECTED WORK', vi: 'DỰ ÁN TIÊU BIỂU' },
  projectsTitle: { en: 'Selected Projects', vi: 'Dự án chọn lọc' },
  viewAll: { en: 'View All Projects →', vi: 'Xem tất cả dự án →' },
  source: { en: 'Source code', vi: 'Mã nguồn' },
  demo: { en: 'Live demo', vi: 'Xem demo' },
  servicesTag: { en: 'WHAT I DO', vi: 'MÌNH LÀM GÌ' },
  servicesTitle: { en: 'What I Build', vi: 'Thế mạnh của mình' },
  details: { en: '[Click to view details]', vi: '[Bấm để xem chi tiết]' },
  related: { en: 'See related project →', vi: 'Xem dự án liên quan →' },
  close: { en: 'Close', vi: 'Đóng' },
  skillsTag: { en: 'TECH STACK & TOOLS', vi: 'CÔNG NGHỆ & CÔNG CỤ' },
  skillsTitle: { en: 'My Expertise', vi: 'Chuyên môn' },
  footerTitle: { en: "Let's Build Together.", vi: 'Cùng xây dựng nhé.' },
  footerText: {
    en: 'Crafting performant, accessible and user-centric applications from Vietnam to the world. Always open to interesting conversations and ideas.',
    vi: 'Xây dựng ứng dụng nhanh, dễ dùng và lấy người dùng làm trung tâm, từ Việt Nam ra thế giới. Luôn sẵn lòng trò chuyện và đón nhận ý tưởng mới.',
  },
  available: { en: 'Available for new opportunities', vi: 'Sẵn sàng cho cơ hội mới' },
  navigation: { en: 'NAVIGATION', vi: 'ĐIỀU HƯỚNG' },
  socials: { en: 'SOCIALS', vi: 'MẠNG XÃ HỘI' },
  getInTouch: { en: 'Get in Touch', vi: 'Liên hệ' },
  theme: { en: 'Toggle theme', vi: 'Đổi giao diện sáng/tối' },
  menu: { en: 'Menu', vi: 'Menu' },
} satisfies Record<string, L>

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (s: L) => string }
const LangCtx = createContext<Ctx>(null!)

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'vi') return saved
  } catch { /* private mode */ }
  return navigator.language.toLowerCase().startsWith('vi') ? 'vi' : 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)
  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch { /* ignore */ }
  }, [lang])
  return <LangCtx.Provider value={{ lang, setLang, t: (s) => s[lang] }}>{children}</LangCtx.Provider>
}

export const useLang = () => useContext(LangCtx)
