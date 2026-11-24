# Project memory

## Product intent & audience

- Personal homepage for **krystal (李子悦 / LI ZIYUE)** — USYD Master of Commerce student.
- Audience: recruiters, professionals viewing a portfolio/contact page.
- Bilingual site (中文 / English) with a **中 / EN** toggle that switches all on-page text.
- Goal: production-ready, deployable to GitHub Pages; no TODOs or placeholders.

## Brand personality & voice

- Bold, memorable, high-end but playful — "斜贴撞色名牌" (diagonal color-block nameplate) aesthetic.
- Tone: confident, concise, professional; labels and tags are punchy (e.g. "数据控", "Excel 重度用户").

## Visual design & UX direction

- Reference style: https://wreckerknight.netlify.app — cream/off-white paper-grain background; large white card with thick black rounded border + hard drop shadow.
- Accent colors: **magenta (玫红)** with white text, **yellow** with black text, black outlines. Name split into two diagonal tilted bands (magenta "KRYSTAL" left-tilt, yellow "李子悦 / LI ZIYUE" right-tilt).
- Components: speech-bubble identity tags, quote box, capsule buttons (yellow + magenta) with pressed-shadow hover, experience cards with yellow title bars, diagonal yellow marquee tape at bottom, dark contact card.
- Skill badges flip to yellow on hover; cards have shadow-shift hover.
- Animations via **Framer Motion** (entrance slides, staggered reveals, scroll-in transitions) + CSS marquee.
- Typography: clear size hierarchy, comfortable whitespace, strong alignment.
- Mobile: 375px no horizontal scroll; nav collapses to logo + language button; cards stack single-column; `overflow-x: hidden` + clipped marquee.

## Decisions, constraints & rationale

- Stack: Vite + React, JSX, Tailwind CSS, Lucide React icons, Framer Motion. No extra UI theme/icon packages per `.bolt/prompt`.
- Import alias `@/` → `src/`.
- Content strictly limited to user-provided info; no fabricated experiences, numbers, links, or endorsements. No "View" buttons on works without links.
- Three experience entries: Island Vibes brand competition analysis; restaurant demand statistics (Welch t-test, regression); ShineWing (信永中和) forensic accounting audit internship.
- Skills: Microsoft Excel, PowerPoint, Xero.
- Contact: email liziyue0919@163.com; LinkedIn https://www.linkedin.com/in/ziyue-li-964580387.
- GitHub Pages deploy via `.github/workflows/deploy.yml`; Vite `base` set from env so it works for any repo name.
- Build + typecheck both pass.

## Open questions & assumptions

- Reference site could not be loaded directly; built from user's textual description ("它长这样") instead.
- Bilingual translations for project descriptions were written by the assistant based on user's Chinese text (user did not provide English copy).
- No project links were provided, so work cards have no external link buttons.
- GitHub repo name / final deployment URL not yet confirmed by user.