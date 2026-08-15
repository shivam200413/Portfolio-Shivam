# Shivam Singh Bhati | Software Engineer Portfolio

Welcome to the source code for my personal portfolio website. This is a highly optimized, fully responsive, and elegant full-stack developer portfolio built to showcase my technical projects, professional experience, and skills.

## 🚀 Live Demo
https://shivam200413.github.io/Portfolio-Shivam/

## 🛠️ Technology Stack
This portfolio is built with modern web standards in mind:
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theme:** Custom native React Context for flawless Dark/Light mode switching (no external dependencies).

## ✨ Features
- **Editorial Layout:** A bespoke, asymmetrical grid layout designed for high-resolution displays.
- **True Dark Mode:** A seamlessly integrated, flash-free dark/light theme toggle.
- **Responsive Design:** Completely fluid and mobile-first, ensuring an excellent experience on all devices.
- **Developer-Centric Motif:** Interactive timeline nodes and a syntax-highlighted code block for the "About" section.

## ⚙️ Local Development Setup

To run this project on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shivam200413/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

## 📝 How to Update Content (Customization Guide)

The codebase has been heavily commented to make future updates extremely easy. All primary content is located in a single file: `app/page.tsx`.

1. **Social Links:** Search for `SOCIAL_LINKS` at the top of the file to update your LinkedIn, GitHub, LeetCode, etc.
2. **Projects:** Search for `PROJECT_LINKS` to update repository URLs. Scroll down to the `<section id="work">` block to change project titles, descriptions, and technology tags.
3. **Experience:** Search for `<!-- EXPERIENCE SECTION -->` to modify your work history.
4. **Skills & Certifications:** Search for `<!-- SKILLS SECTION -->` to add or remove specific technical tools.
5. **Resume:** Replace the `public/resume.pdf` file with your latest resume.
6. **Profile Picture:** Replace `public/my_pic.png` with your desired headshot.

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
