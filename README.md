# Muneeb Anjum’s Portfolio Website

A single‐page, responsive portfolio built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**, featuring a custom animated “threads” background, smooth scroll navigation, timeline sections for education & experience, a projects showcase, skills badges, and a contact footer.

---

## 🚀 Live Demo

🔗 https://muneeb-anjum0.github.io/website/  

---

## 🎯 Features

- **Animated “Threads” Background**  
  5 pairs of pastel‐colored DNA‐style coils on the sides, plus a thick central strand that animates as you scroll.

- **Responsive Transparent Navbar**  
  - Transparent, backdrop‐blur header that never hides content behind it  
  - Word‐only links with elegant hover underline  
  - Wraps to two rows on small screens to ensure all tabs remain visible  
  - Smooth scroll to sections via `react-scroll`

- **Hero Section**  
  - Full‐screen welcome message with framer‐motion fade & slide animations

- **Education & Experience Timelines**  
  - Vertical, stepping timeline  
  - Alternating cards animate into view on scroll

- **Projects Grid**  
  - Two‐column layout on tablets/desktops  
  - Single‐column stack on phones  
  - Card hover shadows & framer‐motion reveal  
  - GitHub icons link directly to each repo

- **Skills Badges**  
  - Clickable, animated badges for core technologies

- **Contact & Footer**  
  - “Get in Touch” icons link to email, LinkedIn, GitHub  
  - Opaque, frosted‐glass footer with social icons

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript  
- **Bundler**: Vite  
- **Styling**: Tailwind CSS  
- **Animation**: Framer Motion  
- **Smooth Scrolling**: react-scroll  
- **Icons**: react-icons (FontAwesome)  
- **Deployment**: GitHub Pages via `gh-pages`

---

## 📁 Project Structure

my-react-app/

├── public/

│ ├── index.html

│ ├── icon.png ← navbar logo

│ ├── vitee.png ← favicon

│ └── vite.svg ← (optional)

├── src/

│ ├── components/

│ │ ├── NavBar.tsx

│ │ ├── Hero.tsx

│ │ ├── Education.tsx

│ │ ├── Experience.tsx

│ │ ├── Projects.tsx

│ │ ├── Skills.tsx

│ │ ├── Contact.tsx

│ │ └── Threads.tsx ← animated canvas background

│ ├── App.tsx

│ ├── main.tsx

│ └── index.css

├── tailwind.config.js

├── vite.config.ts

├── tsconfig.app.json

├── package.json

└── README.md


---

## 🔧 Getting Started

### Prerequisites

- Node.js v16+ & npm
- Git

### Installation

```
# Clone the repo
git clone https://github.com/muneeb-anjum0/webiste.git
cd webiste

# Install dependencies
npm install
Running Locally

npm run dev
# Open http://localhost:5173 in your browser
Building for Production

npm run build
Compiled files will be in dist/.

Deploying to GitHub Pages
Configure package.json:

{
  "homepage": "https://muneeb-anjum0.github.io/YourRepoName",
  "scripts": {
    "predeploy": "npm run build",
    "deploy":   "gh-pages -d dist"
  }
}
Install the deploy helper:


npm install --save-dev gh-pages
Run the deploy command:


npm run deploy
Enable GitHub Pages (if not auto‐configured):

Go to Settings → Pages

Select gh-pages branch / root

Your site will be live at the URL above.

✨ Customization
Colors & Fonts: edit tailwind.config.js under theme.extend

Navigation Links: update sections array in NavBar.tsx

Background Threads: adjust parameters in Threads.tsx

Add Projects: modify the projects array in Projects.tsx

🤝 Contributing
Feel free to open an issue or PR to suggest improvements or new features.

📄 License
This project is licensed under the MIT License.

📬 Contact
Email: muneeb.anjum@hotmail.com

LinkedIn: https://www.linkedin.com/in/muneebanjum335/

GitHub: https://github.com/muneeb-anjum0
