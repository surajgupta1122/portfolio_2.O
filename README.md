# 🚀 Suraj Gupta — Portfolio 2.0

My personal developer portfolio, rebuilt with Next.js, TypeScript, and Tailwind CSS. Showcases my projects, skills, and a working contact form.

## 🔗 Live Demo
🔗 (https://portfolio-2-o-beta.vercel.app/)

---

## ✨ Features

- Responsive, modern UI with dark mode support
- Animated hero section
- Featured projects section with pagination and live GitHub links
- Skills and education overview
- Working contact form (sends real emails via Nodemailer)
- Downloadable resume (PDF)
- Smooth scroll navigation

---

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React, React Icons
- **Email:** Nodemailer (Gmail SMTP)
- **Deployment:** Vercel

---

## 📁 Project Structure

portfolio_2.O
│
├── app/
│   ├── api/
│   │   └── contact/route.ts   # Contact form API endpoint
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── public/
│   ├── Project_icon/
│   └── Suraj_Resume.pdf
│
└── package.json

---

## 📦 Installation

### Clone Repository
```bash
git clone https://github.com/surajgupta1122/portfolio_2.O.git
cd portfolio_2.O
```

### Install & Run
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

---

## ⚙ Environment Variables

Create a `.env.local` file in the project root:

```env
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
```

Used by the contact form to send emails via Nodemailer.

---

## 📚 Featured Projects Linked Here

- **CCTV Management System** — Full-stack MERN inventory/e-commerce app
- **Jobion** — Job search platform (group project, Next.js + MySQL)
- **SkillForge** — Online learning platform
- **Portfolio (v1)** — Earlier portfolio version

---

## 🚧 Future Improvements

- Project filtering by tech stack
- Analytics integration
- Light/dark theme toggle persistence
- Testimonials section

---

## 👨‍💻 Author

**Suraj Gupta**

GitHub: [github.com/surajgupta1122](https://github.com/surajgupta1122)

LinkedIn: [linkedin.com/in/suraj-gupta-11j45](https://linkedin.com/in/suraj-gupta-11j45)

Email: sg8121094@gmail.com

---

## ⭐ If you like this project
Please consider giving it a ⭐ on GitHub.
