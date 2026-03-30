# Malaysia Cat Club — KKM Web

Official website of **Malaysia Cat Club (Kelab Kucing Malaysia)** — a single-page static prototype built with Next.js, Tailwind CSS, and shadcn/ui. The long-term plan is to connect this frontend to a CMS for content management.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org) | React framework (App Router) |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com) | Accessible component primitives (Radix UI) |
| [Lucide React](https://lucide.dev) | Icon library |
| [Vercel Analytics](https://vercel.com/analytics) | Page view analytics (active on Vercel only) |
| TypeScript | Type safety |

---

## Prerequisites

- **Node.js >= 20.9.0** — required by Next.js 16 and Tailwind CSS v4.

If you use [nvm](https://github.com/nvm-sh/nvm), run:

```bash
nvm install 20
nvm use 20
```

Verify with:

```bash
node -v   # should print v20.x.x or higher
```

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
kkm-web/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, viewport
│   ├── page.tsx            # Home page — composes all sections
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── navigation.tsx      # Fixed top nav with mobile hamburger menu
│   ├── hero-section.tsx    # Full-screen hero with background image
│   ├── about-section.tsx   # Club history and stats
│   ├── events-section.tsx  # Upcoming shows and activities
│   ├── breeds-section.tsx  # Interactive breed explorer
│   ├── membership-section.tsx  # Membership plans and pricing
│   ├── contact-section.tsx # Contact info and enquiry form
│   ├── footer.tsx          # Site footer with links
│   └── ui/                 # shadcn/ui component library
├── public/
│   └── images/             # Static images used in sections
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions — auto-deploy to GitHub Pages
└── next.config.mjs         # Next.js config (static export, base path)
```

---

## Building for Production

```bash
npm run build
```

This generates a fully static site in the `out/` directory via `output: 'export'` in `next.config.mjs`.

---

## Deploying to GitHub Pages

The repository is configured to deploy automatically to GitHub Pages on every push to `main` via GitHub Actions.

### One-time setup

**1. Set your repository name in the workflow**

Open `.github/workflows/deploy.yml` and replace `<repo-name>` with your actual GitHub repository name (e.g. `kkm-web`):

```yaml
NEXT_PUBLIC_BASE_PATH: /kkm-web
```

> If you are using a **custom domain** or a **user/org Pages site** (`username.github.io`), delete that line entirely — no base path is needed.

**2. Push to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

**3. Enable GitHub Pages in repository settings**

1. On GitHub, open your repository and go to **Settings** (top navigation bar)
2. In the left sidebar, click **Pages**
3. Under **Build and deployment → Source**, open the dropdown and select **GitHub Actions**
4. Click **Save**

> **Important:** If this is set to `Deploy from a branch` (the default), GitHub Pages will serve files directly from your repo — showing `README.md` instead of the built website. It must be set to **GitHub Actions**.

**4. Trigger the first deployment**

The workflow runs automatically on every push to `main`. To trigger it manually without making a code change:

1. Go to the **Actions** tab in your repository
2. Click **Deploy to GitHub Pages** in the left sidebar
3. Click **Run workflow → Run workflow**

Wait for the workflow to complete (green checkmark), then visit your live URL:

```
https://<your-username>.github.io/<repo-name>/
```

---

## Roadmap

- [ ] Connect to a CMS (e.g. Sanity, Contentful, or Payload) for editable content
- [ ] Wire up the contact form to an email or form service
- [ ] Add real event and membership data
- [ ] Implement social media links
- [ ] Add multi-language support (English / Bahasa Malaysia)
