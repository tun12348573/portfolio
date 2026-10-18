// Mọi nội dung cá nhân nằm ở đây. Chuỗi song ngữ dùng { en, vi }.
// TODO(placeholder): những giá trị đánh dấu TODO cần thay bằng thông tin thật.
import {
  siAstro, siClerk, siCloudflareworkers, siCss, siDart, siDrizzle, siExpo, siExpress, siFirebase,
  siFlutter, siGit, siGithubactions, siGooglegemini, siGsap, siHtml5, siJavascript, siN8n, siNeon,
  siNextdotjs, siNodedotjs, siOllama, siPostgresql, siPython, siReact, siShadcnui, siStripe, siSupabase,
  siTailwindcss, siTypescript, siVercel,
} from 'simple-icons'

export type L = { en: string; vi: string }
type Icon = { path: string; hex: string } | null // null → hiện chữ viết tắt

const GITHUB = 'https://github.com/tun12348573'
const asset = (p: string) => import.meta.env.BASE_URL + p // file trong public/, tự thêm base path

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
  avatar: asset('avatar.jpg'),
  email: 'thinhdaongoc1@gmail.com',
  linkedin: '', // TODO: rỗng → ẩn
  github: GITHUB,
  cv: '', // TODO: đường dẫn PDF, vd asset('cv.pdf'). Rỗng → ẩn nút Download CV
  socials: {
    facebook: '', // TODO: rỗng → ẩn
    instagram: '',
    tiktok: '',
  },
  copyright: '© 2026 Đào Ngọc Thịnh',
}

export const greetings: L[] = [
  { en: "HI, I'M", vi: 'CHÀO, MÌNH LÀ' },
  { en: "HELLO, I'M", vi: 'XIN CHÀO, MÌNH LÀ' },
]

export const stats = [
  { value: '8', label: { en: 'Public repos', vi: 'Repo công khai' }, icon: 'folder' },
  { value: '30+', label: { en: 'Technologies', vi: 'Công nghệ' }, icon: 'cpu' },
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
      en: "I'm Đào Ngọc Thịnh (Tun), a fullstack developer who enjoys turning ideas into real products — from clean React interfaces to serverless backends on AWS and cross-platform mobile apps with Flutter and React Native.",
      vi: 'Mình là Đào Ngọc Thịnh (Tun), lập trình viên fullstack thích biến ý tưởng thành sản phẩm thật — từ giao diện React gọn gàng, backend serverless trên AWS đến ứng dụng di động đa nền tảng với Flutter và React Native.',
    },
    rows: [
      { k: { en: 'Name', vi: 'Họ tên' }, v: { en: 'Dao Ngoc Thinh', vi: 'Đào Ngọc Thịnh' } },
      { k: { en: 'Role', vi: 'Vai trò' }, v: { en: 'Fullstack Developer & UI/UX', vi: 'Fullstack Developer & UI/UX' } },
      { k: { en: 'Status', vi: 'Trạng thái' }, v: { en: 'Open to work', vi: 'Đang tìm việc' }, status: true },
    ],
    art: 'terminal',
  },
  {
    file: 'education.md',
    title: { en: 'Academic Background.', vi: 'Học vấn.' },
    text: {
      en: 'IT student at HUTECH who learns best by building. In 2026 I joined the AWS First Cloud AI Journey bootcamp and shipped a serverless e-commerce platform as my internship project.',
      vi: 'Sinh viên CNTT tại HUTECH, học tốt nhất bằng cách làm. Năm 2026 mình tham gia bootcamp AWS First Cloud AI Journey và hoàn thành web bán hàng serverless làm dự án thực tập.',
    },
    rows: [
      { k: { en: 'School', vi: 'Trường' }, v: { en: 'HCMC University of Technology (HUTECH)', vi: 'ĐH Công nghệ TP.HCM (HUTECH)' } },
      { k: { en: 'Major', vi: 'Ngành' }, v: { en: 'Information Technology', vi: 'Công nghệ Thông tin' } },
      { k: { en: 'Internship', vi: 'Thực tập' }, v: { en: 'AWS Vietnam · First Cloud AI Journey (04–07/2026)', vi: 'AWS Việt Nam · First Cloud AI Journey (04–07/2026)' }, status: true },
    ],
    art: 'school',
  },
  {
    file: 'location.md',
    title: { en: 'Geographic Node.', vi: 'Vị trí.' },
    text: {
      en: 'Based in Ho Chi Minh City, Vietnam — available for on-site roles and remote collaboration.',
      vi: 'Sống tại TP. Hồ Chí Minh, Việt Nam — sẵn sàng làm việc tại văn phòng hoặc từ xa.',
    },
    rows: [
      { k: { en: 'Base', vi: 'Nơi ở' }, v: { en: 'Ho Chi Minh City, Vietnam', vi: 'TP. Hồ Chí Minh, Việt Nam' } },
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
      en: 'Serverless e-commerce on AWS (internship project): Next.js on S3 + CloudFront, Express on Lambda, DynamoDB, Cognito, SES emails, EventBridge jobs, ZaloPay payments & refunds, IaC with SAM.',
      vi: 'Web bán hàng serverless trên AWS (dự án thực tập): Next.js trên S3 + CloudFront, Express trên Lambda, DynamoDB, Cognito, email SES, job EventBridge, thanh toán & hoàn tiền ZaloPay, hạ tầng bằng SAM.',
    },
    stack: 'Next.js · Lambda · DynamoDB',
    repo: `${GITHUB}/ecommerce-aws`,
    image: asset('projects/aws-shop.jpg'),
  },
  {
    name: { en: 'Trang Nam Thinh Architecture', vi: 'Kiến trúc Trang Nam Thịnh' },
    desc: {
      en: 'Showroom website for an architecture firm with an admin CMS: projects with photos, drawings and JEGA 3D tours. Astro on Cloudflare Workers, Supabase DB/Auth/Storage with RLS.',
      vi: 'Website giới thiệu công trình cho công ty kiến trúc, có trang quản trị: ảnh, bản vẽ, tour 3D JEGA. Astro trên Cloudflare Workers, Supabase (DB/Auth/Storage, RLS).',
    },
    stack: 'Astro · Cloudflare · Supabase',
    repo: `${GITHUB}/Architecture-showroom-app`,
    demo: 'https://trang-nam-thinh-portfolio.trang-nam-thinh-portfolio.workers.dev',
    image: asset('projects/showroom.jpg'),
  },
  {
    name: { en: 'DoctorApp', vi: 'DoctorApp' },
    desc: {
      en: 'Book doctors, chat, buy medicine and ask an AI health assistant. Roles for patient, doctor, pharmacy and admin. Bilingual EN/VI.',
      vi: 'Đặt lịch khám, nhắn tin với bác sĩ, mua thuốc và hỏi trợ lý AI. Phân vai bệnh nhân, bác sĩ, nhà thuốc, quản trị. Song ngữ Anh/Việt.',
    },
    stack: 'Flutter · Firebase',
    repo: `${GITHUB}/Flutter-doctor-app-master`,
    demo: 'https://doctor-app-df8ca.web.app',
    image: asset('projects/doctorapp.png'),
  },
  {
    name: { en: 'Japanese Learning Platform', vi: 'Nền tảng học tiếng Nhật' },
    desc: {
      en: 'AI-generated Japanese courses with Gemini, dictionary, Clerk auth and MoMo payments.',
      vi: 'Khoá học tiếng Nhật do AI (Gemini) tạo, từ điển, đăng nhập Clerk, thanh toán MoMo.',
    },
    stack: 'Next.js · Neon · Gemini',
    repo: `${GITHUB}/Japanese-learning-platform`,
  },
  {
    name: { en: 'Ride-hailing App', vi: 'Ứng dụng gọi xe' },
    desc: {
      en: 'Grab/Uber-style mobile app: find and book rides on Google Maps, pick a driver, pay with Stripe. Expo Router API routes on Neon Postgres, Clerk auth.',
      vi: 'App gọi xe kiểu Grab/Uber: tìm và đặt chuyến trên Google Maps, chọn tài xế, thanh toán Stripe. API route Expo Router trên Neon Postgres, đăng nhập Clerk.',
    },
    stack: 'React Native · Expo · Stripe',
    repo: `${GITHUB}/Grab-clone`,
  },
  {
    name: { en: 'AWS Internship Report', vi: 'Báo cáo thực tập AWS' },
    desc: {
      en: 'Bilingual Hugo site documenting my 12-week AWS First Cloud AI Journey: weekly worklogs, project proposal, blogs and events.',
      vi: 'Trang Hugo song ngữ ghi lại 12 tuần AWS First Cloud AI Journey: worklog từng tuần, proposal dự án, blog và sự kiện.',
    },
    stack: 'Hugo · GitHub Pages',
    repo: `${GITHUB}/workshop-`,
    demo: 'https://tun12348573.github.io/workshop-/',
    image: asset('projects/aws-report.jpg'),
  },
]

export type Service = { no: string; tag: L; title: L; text: L; details: L[]; link?: string }

export const services: Service[] = [
  {
    no: '01',
    tag: { en: 'Frontend & UI', vi: 'Frontend & UI' },
    title: { en: 'Web Interfaces', vi: 'Giao diện Web' },
    text: {
      en: 'Responsive, accessible interfaces with React, Next.js, Astro and Tailwind — fast to load, easy to use.',
      vi: 'Giao diện responsive, dễ truy cập với React, Next.js, Astro và Tailwind — tải nhanh, dễ dùng.',
    },
    details: [
      { en: 'Component-based UI with React / Next.js / Astro', vi: 'UI theo component với React / Next.js / Astro' },
      { en: 'Bilingual (i18n) and dark mode', vi: 'Song ngữ (i18n) và dark mode' },
      { en: 'Animation that respects reduced motion', vi: 'Hiệu ứng tôn trọng chế độ giảm chuyển động' },
    ],
    link: 'https://trang-nam-thinh-portfolio.trang-nam-thinh-portfolio.workers.dev',
  },
  {
    no: '02',
    tag: { en: 'Fullstack Architecture', vi: 'Kiến trúc Fullstack' },
    title: { en: 'Serverless Apps', vi: 'Ứng dụng Serverless' },
    text: {
      en: 'End-to-end apps on AWS and Cloudflare: Lambda APIs, DynamoDB, auth, scheduled jobs, monitoring and payment gateways.',
      vi: 'Ứng dụng trọn gói trên AWS và Cloudflare: API Lambda, DynamoDB, xác thực, job định kỳ, giám sát và cổng thanh toán.',
    },
    details: [
      { en: 'Express on Lambda + API Gateway, IaC with AWS SAM', vi: 'Express trên Lambda + API Gateway, hạ tầng bằng AWS SAM' },
      { en: 'Cognito, SES, EventBridge, CloudWatch + SNS alarms', vi: 'Cognito, SES, EventBridge, cảnh báo CloudWatch + SNS' },
      { en: 'ZaloPay, MoMo & Stripe payments', vi: 'Thanh toán ZaloPay, MoMo & Stripe' },
    ],
    link: `${GITHUB}/ecommerce-aws`,
  },
  {
    no: '03',
    tag: { en: 'Cross-platform', vi: 'Đa nền tảng' },
    title: { en: 'Mobile Apps', vi: 'Ứng dụng Mobile' },
    text: {
      en: 'Cross-platform apps with Flutter and React Native (Expo) — one codebase for Android, iOS and web.',
      vi: 'Ứng dụng đa nền tảng với Flutter và React Native (Expo) — một codebase cho Android, iOS và web.',
    },
    details: [
      { en: 'Flutter + Firebase (Auth, Firestore, Hosting)', vi: 'Flutter + Firebase (Auth, Firestore, Hosting)' },
      { en: 'Role-based flows: patient, doctor, pharmacy', vi: 'Luồng theo vai trò: bệnh nhân, bác sĩ, nhà thuốc' },
      { en: 'React Native + Expo: maps, rides, Stripe payments', vi: 'React Native + Expo: bản đồ, đặt xe, thanh toán Stripe' },
    ],
    link: 'https://doctor-app-df8ca.web.app',
  },
  {
    no: '04',
    tag: { en: 'AI Integration', vi: 'Tích hợp AI' },
    title: { en: 'AI Features', vi: 'Tính năng AI' },
    text: {
      en: 'Practical AI inside products: content generation with Google Gemini and a self-hosted Ollama assistant orchestrated by n8n.',
      vi: 'AI thực dụng trong sản phẩm: sinh nội dung bằng Google Gemini và trợ lý LLM tự host bằng Ollama, điều phối qua n8n.',
    },
    details: [
      { en: 'Generate course outlines & lessons with Gemini', vi: 'Sinh dàn ý và bài học bằng Gemini' },
      { en: 'Health Q&A assistant in DoctorApp (Ollama + n8n)', vi: 'Trợ lý hỏi đáp sức khoẻ trong DoctorApp (Ollama + n8n)' },
      { en: 'Prompt design with structured JSON output', vi: 'Thiết kế prompt trả về JSON có cấu trúc' },
    ],
    link: `${GITHUB}/Japanese-learning-platform`,
  },
]

export type Skill = { name: string; icon: Icon; abbr?: string }
const s = (name: string, icon: Icon, abbr?: string): Skill => ({ name, icon, abbr })

export const skills: { cat: L; items: Skill[] }[] = [
  {
    cat: { en: 'Frontend', vi: 'Frontend' },
    items: [s('React', siReact), s('Next.js', siNextdotjs), s('Astro', siAstro), s('Tailwind', siTailwindcss), s('shadcn/ui', siShadcnui), s('GSAP', siGsap), s('HTML5', siHtml5), s('CSS3', siCss)],
  },
  {
    cat: { en: 'Backend', vi: 'Backend' },
    items: [s('Node.js', siNodedotjs), s('Express', siExpress), s('AWS Lambda', null, 'λ'), s('DynamoDB', null, 'DDB'), s('PostgreSQL', siPostgresql), s('Supabase', siSupabase), s('Drizzle', siDrizzle)],
  },
  {
    cat: { en: 'Languages', vi: 'Ngôn ngữ' },
    items: [s('TypeScript', siTypescript), s('JavaScript', siJavascript), s('Dart', siDart), s('Python', siPython)],
  },
  {
    cat: { en: 'Mobile', vi: 'Mobile' },
    items: [s('Flutter', siFlutter), s('React Native', siReact), s('Expo', siExpo)],
  },
  {
    cat: { en: 'Cloud & DevOps', vi: 'Cloud & DevOps' },
    items: [s('AWS', null, 'AWS'), s('Cloudflare Workers', siCloudflareworkers), s('Firebase', siFirebase), s('Vercel', siVercel), s('Neon', siNeon), s('GitHub Actions', siGithubactions), s('Git', siGit)],
  },
  {
    cat: { en: 'Auth, Payments & AI', vi: 'Auth, Thanh toán & AI' },
    items: [s('Clerk', siClerk), s('Cognito', null, 'COG'), s('Stripe', siStripe), s('ZaloPay', null, 'ZP'), s('MoMo', null, 'MM'), s('Gemini AI', siGooglegemini), s('Ollama', siOllama), s('n8n', siN8n)],
  },
]

export const nav = [
  { id: 'hero', label: { en: 'Home', vi: 'Trang chủ' }, icon: 'home' },
  { id: 'about', label: { en: 'About', vi: 'Giới thiệu' }, icon: 'user' },
  { id: 'projects', label: { en: 'Projects', vi: 'Dự án' }, icon: 'briefcase' },
  { id: 'services', label: { en: 'Services', vi: 'Thế mạnh' }, icon: 'services' },
  { id: 'skills', label: { en: 'Skills', vi: 'Kỹ năng' }, icon: 'code' },
] as const
