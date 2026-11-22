# Ojetola Roqeeb — Software Engineer Portfolio

A responsive dark-themed portfolio built with React, Vite, Tailwind CSS, Framer Motion and Lucide React.

## 1. Requirements
- Node.js (LTS) and npm
- Visual Studio Code (recommended)

## 2. Run locally
Open this project folder in VS Code, then open its terminal and run:

```bash
npm install
npm run dev
```

Vite will print a local address, usually `http://localhost:5173`. Open it in Chrome.

## 3. Build for production
```bash
npm run build
npm run preview
```

The production website is generated in the `dist` folder.

## 4. Personalise before publishing
Contact details are set in `src/App.jsx` (`githubUrl` and `email` at the top of the file).

To add or update a project, edit the `projects` array in `src/App.jsx`. Each project can have:
- `image` / `imageAlt`: a screenshot imported from `src/assets` (keep it under ~300 KB)
- `demoUrl`: live demo link (shows a **Live demo** button)
- `repoUrl`: GitHub repository link (shows a **Source code** button)
- `note`: an optional short note shown under the project

Other things to check:
- Skills should reflect tools you can confidently discuss.
- Your CV is served from `public/Ojetola_Roqeeb_CV.pdf` (Download CV buttons). Replace that file to update it.
- After deploying, add the `og:image` tag in `index.html` with your full site URL so link previews show your photo (`public/og-image.jpg`).

Original full-size images are kept in `original-images/` (ignored by git).

## 5. Deploy on Vercel
1. Push this project to a GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the repository.
4. Keep the build command as `npm run build` and output directory as `dist`.
5. Click Deploy.

## Notes
- The e-commerce project links to its live demo on Vercel and its GitHub repository.
- The poverty/wealth prediction project is described as an academic project. Keep the synthetic-data note if that accurately reflects your implementation.
- Do not publish private credentials, API keys or personal data in this repository.
