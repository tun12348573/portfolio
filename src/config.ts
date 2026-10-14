// Mọi nội dung cá nhân nằm ở đây. Chuỗi song ngữ dùng { en, vi }.
// TODO(placeholder): những giá trị đánh dấu TODO cần thay bằng thông tin thật.
import {
  siClerk, siDart, siDrizzle, siFirebase, siFlutter, siGit, siGooglegemini, siHtml5, siCss,
  siJavascript, siNeon, siNextdotjs, siNodedotjs, siPostgresql, siReact, siShadcnui,
  siTailwindcss, siTypescript, siVercel,
} from 'simple-icons'

export type L = { en: string; vi: string }
type Icon = { path: string; hex: string } | null // null → hiện chữ viết tắt

const GITHUB = 'https://github.com/tun12348573'

export const profile = {
  // Tên lớn ở hero, mỗi phần tử là 1 "miếng" chữ cắt dán; style a–f định nghĩa trong Hero.css
  heroName: [
    { ch: 'C', s: 'a' }, { ch: 'O', s: 'b' }, { ch: 'D', s: 'b' }, { ch: 'E', s: 'b' },
    { ch: ' ', s: '' },
    { ch: 'B', s: 'c' }, { ch: 'Y', s: 'c' },
    { ch: ' ', s: '' },
    { ch: 'T', s: 'd' }, { ch: 'U', s: 'e' }, { ch: 'N', s: 'f' },
  ],
  logo: { top: 'TUN', bottom: 'DEV' },
  avatar: 'https://avatars.githubusercontent.com/u/123180581?v=4', // TODO: thay ảnh thật
  email: 'you@example.com', // TODO
  linkedin: 'https://www.linkedin.com/in/your-handle', // TODO
  github: GITHUB,
  cv: '', // TODO: đường dẫn PDF, vd '/cv.pdf'. Rỗng → ẩn nút Download CV
  socials: {
    facebook: '', // TODO: rỗng → ẩn
    instagram: '',
    tiktok: '',
  },
  copyright: '© 2026 Tun', // TODO: tên thật
}

export const greetings: L[] = [
  { en: "HI, I'M", vi: 'CHÀO, MÌNH LÀ' },
  { en: "HELLO, I'M", vi: 'XIN CHÀO, MÌNH LÀ' },
]

export const stats = [
  { value: '6', label: { en: 'Repositories', vi: 'Repository' }, icon: 'folder' },
  { value: '20+', label: { en: 'Technologies', vi: 'Công nghệ' }, icon: 'cpu' },
  { value: '3', label: { en: 'Web · Mobile · Cloud', vi: 'Web · Mobile · Cloud' }, icon: 'layers' },
] as const

export type AboutTab = {
  file: string
  title: L
  text: L
  rows: { k: L; v: L; status?: boolean }[]
  art: 'terminal' | 'school' | 'map'
}

export const about: AboutTab[] = [
  {
    file: 'bio.md',
    title: { en: 'Hello, World.', vi: 'Hello, World.' },
    text: {
      en: 'I am a fullstack developer who enjoys turning ideas into real products — from clean React interfaces to serverless backends on AWS and cross-platform mobile apps with Flutter.',
      vi: 'Mình là lập trình viên fullstack thích biến ý tưởng thành sản phẩm thật — từ giao diện React gọn gàng, backend serverless trên AWS đến ứng dụng di động đa nền tảng với Flutter.',
    },
    rows: [
      { k: { en: 'File type', vi: 'Loại file' }, v: { en: 'Markdown Document', vi: 'Tài liệu Markdown' } },
      { k: { en: 'Role', vi: 'Vai trò' }, v: { en: 'Fullstack Developer & UI/UX', vi: 'Fullstack Developer & UI/UX' } },
      { k: { en: 'Status', vi: 'Trạng thái' }, v: { en: 'Open to work', vi: 'Đang tìm việc' }, status: true },
    ],
    art: 'terminal',
  },
  {
    file: 'education.md',
    title: { en: 'Academic Background.', vi: 'Học vấn.' },
    // TODO: thay trường/ngành thật
    text: {
      en: 'Information Technology student who learns best by building — every project here started as a way to pick up a new tool.',
      vi: 'Sinh viên Công nghệ Thông tin, học tốt nhất bằng cách làm — mỗi dự án ở đây bắt đầu từ việc thử một công cụ mới.',
    },
    rows: [
      { k: { en: 'School', vi: 'Trường' }, v: { en: 'Your University', vi: 'Tên trường' } },
      { k: { en: 'Major', vi: 'Ngành' }, v: { en: 'Information Technology', vi: 'Công nghệ Thông tin' } },
      { k: { en: 'Status', vi: 'Trạng thái' }, v: { en: 'Lifelong learner', vi: 'Luôn học hỏi' }, status: true },
    ],
    art: 'school',
  },
  {
    file: 'location.md',
    title: { en: 'Geographic Node.', vi: 'Vị trí.' },
    // TODO: thay thành phố thật
    text: {
      en: 'Based in Vietnam, available for on-site roles and remote collaboration.',
      vi: 'Sống tại Việt Nam, sẵn sàng làm việc tại văn phòng hoặc từ xa.',
    },
    rows: [
      { k: { en: 'Base', vi: 'Nơi ở' }, v: { en: 'Vietnam', vi: 'Việt Nam' } },
      { k: { en: 'Timezone', vi: 'Múi giờ' }, v: { en: 'UTC+7 (Indochina Time)', vi: 'UTC+7 (Giờ Đông Dương)' } },
      { k: { en: 'Status', vi: 'Trạng thái' }, v: { en: 'Active', vi: 'Hoạt động' }, status: true },
    ],
    art: 'map',
  },
]

export type Project = { name: L; desc: L; stack: string; repo: string; demo?: string; image?: string }

export const projects: Project[] = [
  {
    name: { en: 'AWS Shop', vi: 'AWS Shop' },
    desc: {
      en: 'Serverless e-commerce platform: Next.js, Lambda, DynamoDB, Cognito, ZaloPay sandbox.',
      vi: 'Web bán hàng serverless: Next.js, Lambda, DynamoDB, Cognito, thanh toán ZaloPay sandbox.',
    },
    stack: 'Next.js · AWS',
    repo: `${GITHUB}/ecommerce-aws`,
  },
  {
    name: { en: 'Japanese Learning Platform', vi: 'Nền tảng học tiếng Nhật' },
    desc: {
      en: 'AI-generated Japanese courses with Gemini, dictionary, Clerk auth and MoMo payments.',
      vi: 'Khoá học tiếng Nhật do AI (Gemini) tạo, từ điển, đăng nhập Clerk, thanh toán MoMo.',
    },
    stack: 'Next.js · Neon · Gemini',
    repo: `${GITHUB}/Japanese_learning_platform`,
  },
  {
    name: { en: 'DoctorApp', vi: 'DoctorApp' },
    desc: {
      en: 'Book doctors, chat, buy medicine and ask an AI health assistant. Bilingual EN/VI.',
      vi: 'Đặt lịch khám, nhắn tin với bác sĩ, mua thuốc và hỏi trợ lý AI. Song ngữ Anh/Việt.',
    },
    stack: 'Flutter · Firebase',
    repo: `${GITHUB}/Flutter_doctor_app_master`,
    demo: 'https://doctor-app-df8ca.web.app',
    image: '/projects/doctorapp.png',
  },
]

export type Service = { no: string; tag: L; title: L; text: L; details: L[]; link?: string }

export const services: Service[] = [
  {
    no: '01',
    tag: { en: 'Frontend & UI', vi: 'Frontend & UI' },
    title: { en: 'Web Interfaces', vi: 'Giao diện Web' },
    text: {
      en: 'Responsive, accessible interfaces with React, Next.js and Tailwind — fast to load, easy to use.',
      vi: 'Giao diện responsive, dễ truy cập với React, Next.js và Tailwind — tải nhanh, dễ dùng.',
    },
    details: [
      { en: 'Component-based UI with React / Next.js', vi: 'UI theo component với React / Next.js' },
      { en: 'Bilingual (i18n) and dark mode', vi: 'Song ngữ (i18n) và dark mode' },
      { en: 'Animation that respects reduced motion', vi: 'Hiệu ứng tôn trọng chế độ giảm chuyển động' },
    ],
    link: `${GITHUB}/Japanese_learning_platform`,
  },
  {
    no: '02',
    tag: { en: 'Fullstack Architecture', vi: 'Kiến trúc Fullstack' },
    title: { en: 'Serverless Apps', vi: 'Ứng dụng Serverless' },
    text: {
      en: 'End-to-end apps on AWS: Lambda APIs, DynamoDB, Cognito auth and payment gateway integration.',
      vi: 'Ứng dụng trọn gói trên AWS: API Lambda, DynamoDB, xác thực Cognito và tích hợp cổng thanh toán.',
    },
    details: [
      { en: 'REST APIs on AWS Lambda', vi: 'REST API trên AWS Lambda' },
      { en: 'Auth with Cognito / Clerk', vi: 'Xác thực với Cognito / Clerk' },
      { en: 'ZaloPay & MoMo sandbox payments', vi: 'Thanh toán ZaloPay & MoMo sandbox' },
    ],
    link: `${GITHUB}/ecommerce-aws`,
  },
  {
    no: '03',
    tag: { en: 'Cross-platform', vi: 'Đa nền tảng' },
    title: { en: 'Mobile Apps', vi: 'Ứng dụng Mobile' },
    text: {
      en: 'One Flutter codebase for Android, iOS and web, backed by Firebase for realtime data.',
      vi: 'Một codebase Flutter cho Android, iOS và web, dùng Firebase cho dữ liệu realtime.',
    },
    details: [
      { en: 'Flutter + Firebase (Auth, Firestore, Hosting)', vi: 'Flutter + Firebase (Auth, Firestore, Hosting)' },
      { en: 'Role-based flows: patient, doctor, pharmacy', vi: 'Luồng theo vai trò: bệnh nhân, bác sĩ, nhà thuốc' },
      { en: 'Shipped as a live web build', vi: 'Có bản web chạy thật' },
    ],
    link: 'https://doctor-app-df8ca.web.app',
  },
  {
    no: '04',
    tag: { en: 'AI Integration', vi: 'Tích hợp AI' },
    title: { en: 'AI Features', vi: 'Tính năng AI' },
    text: {
      en: 'Practical AI inside products: content generation and assistants powered by Google Gemini.',
      vi: 'AI thực dụng trong sản phẩm: sinh nội dung và trợ lý ảo dùng Google Gemini.',
    },
    details: [
      { en: 'Generate course outlines & lessons with Gemini', vi: 'Sinh dàn ý và bài học bằng Gemini' },
      { en: 'Health Q&A assistant in DoctorApp', vi: 'Trợ lý hỏi đáp sức khoẻ trong DoctorApp' },
      { en: 'Prompt design with structured JSON output', vi: 'Thiết kế prompt trả về JSON có cấu trúc' },
    ],
    link: `${GITHUB}/Japanese_learning_platform`,
  },
]

export type Skill = { name: string; icon: Icon; abbr?: string }
const s = (name: string, icon: Icon, abbr?: string): Skill => ({ name, icon, abbr })

export const skills: { cat: L; items: Skill[] }[] = [
  {
    cat: { en: 'Frontend', vi: 'Frontend' },
    items: [s('React', siReact), s('Next.js', siNextdotjs), s('Tailwind', siTailwindcss), s('HTML5', siHtml5), s('CSS3', siCss), s('shadcn/ui', siShadcnui)],
  },
  {
    cat: { en: 'Backend', vi: 'Backend' },
    items: [s('Node.js', siNodedotjs), s('Next.js API', siNextdotjs), s('AWS Lambda', null, 'λ'), s('DynamoDB', null, 'DDB'), s('PostgreSQL', siPostgresql), s('Drizzle', siDrizzle)],
  },
  {
    cat: { en: 'Languages', vi: 'Ngôn ngữ' },
    items: [s('TypeScript', siTypescript), s('JavaScript', siJavascript), s('Dart', siDart)],
  },
  {
    cat: { en: 'Mobile', vi: 'Mobile' },
    items: [s('Flutter', siFlutter)],
  },
  {
    cat: { en: 'Cloud & Tools', vi: 'Cloud & Công cụ' },
    items: [s('AWS', null, 'AWS'), s('Firebase', siFirebase), s('Vercel', siVercel), s('Neon', siNeon), s('Git', siGit), s('Clerk', siClerk), s('Gemini AI', siGooglegemini)],
  },
]

export const nav = [
  { id: 'hero', label: { en: 'Home', vi: 'Trang chủ' }, icon: 'home' },
  { id: 'about', label: { en: 'About', vi: 'Giới thiệu' }, icon: 'user' },
  { id: 'projects', label: { en: 'Projects', vi: 'Dự án' }, icon: 'briefcase' },
  { id: 'services', label: { en: 'Services', vi: 'Thế mạnh' }, icon: 'services' },
  { id: 'skills', label: { en: 'Skills', vi: 'Kỹ năng' }, icon: 'code' },
] as const
