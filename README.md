# Portfolio · tun12348573.github.io

Portfolio một trang, song ngữ VI/EN, theme sáng/tối. Vite + React + TypeScript, CSS thuần, `motion` cho hiệu ứng.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # ra dist/
```

Push lên `main` → GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) build và deploy lên GitHub Pages.
Lần đầu: repo Settings → Pages → Source = **GitHub Actions**.

## Sửa nội dung

Toàn bộ nội dung cá nhân ở [src/config.ts](src/config.ts). Chữ giao diện cố định ở [src/i18n.tsx](src/i18n.tsx) (`ui`).

Cần thay (đánh dấu `TODO` trong config):

- `linkedin`: rỗng → nút LinkedIn ẩn
- `cv`: bỏ PDF vào `public/` rồi set `'/cv.pdf'` (đang rỗng → nút Download CV ẩn)
- `socials` Facebook / Instagram / TikTok (rỗng → ẩn)
