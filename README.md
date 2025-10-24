<a name="readme-top"></a>

INcBlog 🚀

Empowering Founders, Sharing Insights: Your Platform for Startup Stories.


[![GitHub license](https://img.shields.io/github/license/himanshuvkm/INcBlog?style=flat-square)](https://github.com/himanshuvkm/INcBlog/blob/main/LICENSE)
[![GitHub top language](https://img.shields.io/github/languages/top/himanshuvkm/INcBlog?style=flat-square)](https://github.com/himanshuvkm/INcBlog)
[![GitHub Stars](https://img.shields.io/github/stars/himanshuvkm/INcBlog?style=social)](https://github.com/himanshuvkm/INcBlog/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/himanshuvkm/INcBlog?style=social)](https://github.com/himanshuvkm/INcBlog/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/himanshuvkm/INcBlog?style=flat-square)](https://github.com/himanshuvkm/INcBlog/issues)
[![Deployment Status](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/himanshuvkm/INcBlog) <!-- Placeholder for Vercel deployment, common for Next.js projects -->

---



📖 Description

INcBlog is a dynamic, community-driven platform for founders and startup enthusiasts to share their journeys, insights, and lessons learned. Built with modern web technologies, it enables users to create compelling content, manage profiles, and connect with like-minded individuals.

Whether you want to highlight your startup, share entrepreneurial advice, or engage with the startup community, INcBlog provides the perfect platform.

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>
✨ Key Features

✍️ Content Creation: User-friendly editor for crafting and publishing posts.

🔐 Authentication: Secure login via NextAuth.js with multiple providers.

👤 User Profiles: Personalized profiles showcasing contributions and startups.

🚀 Startup Pages: Dedicated pages for startups and founders.

🔍 Content Studio/Admin Panel: Manage content efficiently (e.g., via Sanity Studio).

🎨 Responsive UI: Modern, mobile-friendly design with Tailwind CSS.

📊 Error Tracking: Sentry integration for proactive monitoring.

📏 Type-safe Development: Built with TypeScript for maintainability.

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>
🛠️ Tech Stack
Frontend

Next.js, React, TypeScript

Tailwind CSS, Shadcn/ui, Google Fonts (Work Sans)

Backend

Next.js API Routes, Node.js

NextAuth.js for authentication

Database (choose one)

Prisma ORM / Mongoose ODM

PostgreSQL / MongoDB

Tools & Services

Sentry for monitoring

ESLint & Prettier for code quality

Vercel for deployment

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>
🚀 Getting Started
Prerequisites

Node.js v18+

npm, yarn, or pnpm

Git

Installation
git clone https://github.com/himanshuvkm/INcBlog.git
cd INcBlog
npm install

Environment Variables

Create .env.local:

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="GENERATE_WITH_OPENSSL"
DATABASE_URL="YOUR_DATABASE_URL"
SENTRY_DSN="YOUR_SENTRY_DSN"
GITHUB_ID="YOUR_GITHUB_CLIENT_ID"
GITHUB_SECRET="YOUR_GITHUB_CLIENT_SECRET"
GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID"
GOOGLE_CLIENT_SECRET="YOUR_GOOGLE_CLIENT_SECRET"

Running Locally
npm run dev


Open http://localhost:3000

Building for Production
npm run build
npm start

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>
📁 Project Structure
app/
├─ (root)/layout.tsx          # Main layout
├─ page.tsx                   # Homepage
├─ startup/[id]/page.tsx      # Startup detail page
├─ startup/create/page.tsx    # Create startup post
├─ user/[id]/page.tsx         # User profile
├─ studio/[[...tool]]/page.tsx# CMS studio
├─ api/auth/[...nextauth]/route.ts
├─ globals.css
components/                    # Reusable UI components
auth.ts                        # NextAuth.js configuration
components.json                # Shadcn/ui config

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>
🤝 Contributing

Fork the repository

Create a branch (git checkout -b feature/xyz)

Make changes and commit (git commit -m "feat: ...")

Push and open a Pull Request

Code Style:

npm run lint
npm run format

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>
🆘 Troubleshooting

Env variables not loading: Ensure .env.local exists and server restarted.

Auth issues: Verify OAuth credentials and NEXTAUTH_URL.

Database errors: Confirm DATABASE_URL and migrations (if Prisma).

Studio blank: Ensure CMS is configured (Sanity or custom).

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>
📄 License

MIT License — see LICENSE

👥 Author

Himanshu V.K.M — @himanshuvkm

⭐ Star the repo if you find it useful!
🍴 Fork to contribute!
