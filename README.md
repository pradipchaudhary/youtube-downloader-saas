// youtube-downloader-saas/README.md

# YouTube Downloader SaaS (720p)

A modern SaaS YouTube Video Downloader that supports 720p resolution using yt-dlp, built with Next.js 14 App Router, Tailwind CSS, and TypeScript.

## 🌟 Features
- Paste YouTube URL and download video in 720p
- Built with Next.js 14 (App Router)
- API routes using yt-dlp (via `child_process`)
- Beautiful UI with Tailwind CSS and Shadcn UI
- TypeScript powered

---

## 📁 Project Structure

```
youtube-downloader-saas/
├── app/
│   ├── api/
│   │   └── download/route.ts  # API route for video download
│   └── page.tsx               # UI to input and download video
├── public/
├── styles/
├── lib/                      # (for future enhancements)
├── tailwind.config.ts
├── package.json
└── README.md
```

---

## ⚙️ Installation

```bash
git clone https://github.com/yourusername/youtube-downloader-saas.git
cd youtube-downloader-saas
npm install
npm run dev
```

---

## 🧪 Usage

1. Paste a YouTube URL into the input box.
2. Click **Download 720p**.
3. Your video will be downloaded as `.mp4`.

---

## 🚀 Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Shadcn UI
- yt-dlp (run via child_process)

---

## ⚠️ Disclaimer
This project is for **educational purposes only**. Downloading videos from YouTube may violate their [Terms of Service](https://www.youtube.com/t/terms). Do not use this tool to download videos unless you have permission from the content owner.

---

## 📦 To Do
- Add user authentication (NextAuth.js)
- Stripe payment plans (Free vs Pro)
- Usage limits and logs
- Deploy frontend to Vercel
- Deploy backend to Render or Railway

---

## 📄 License
MIT
