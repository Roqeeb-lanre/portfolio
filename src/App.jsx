import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, BrainCircuit, ShoppingBag, House, Layers3, Terminal, Smartphone, GitBranch,
  ExternalLink, ChevronRight, Award, BadgeCheck, FileCheck2, FileText, Download, Sparkles
} from 'lucide-react'
import roqeebPhoto from './assets/roqeeb.jpg'
import cpnCertificate from './assets/cpn-registration.jpg'
import newHorizonsCertificate from './assets/new-horizons-ai.jpg'
import ecommerceScreenshot from './assets/ecommerce-screenshot.jpg'
import ribraScreenshot from './assets/ribra-screenshot.jpg'
import roggaScreenshot from './assets/rogga-screenshot.jpg'
import povertyWealthScreens from './assets/poverty-wealth-app.jpg'

const githubUrl = 'https://github.com/Roqeeb-lanre'
const linkedinUrl = 'https://www.linkedin.com/in/roqeeb-ojetola'
const email = 'ojetolaroqeeb40@gmail.com'
const cvUrl = '/Ojetola_Roqeeb_CV.pdf'

const skills = [
  { title: 'Frontend', icon: Code2, items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'] },
  { title: 'Backend', icon: Terminal, items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'Payment integration', 'Automated testing'] },
  { title: 'Database', icon: Database, items: ['MongoDB', 'Database design'] },
  { title: 'AI & Machine Learning', icon: BrainCircuit, items: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Classification', 'Model evaluation', 'ONNX', 'LLM APIs (Gemini)', 'Embeddings & vector search'] },
  { title: 'Mobile', icon: Smartphone, items: ['Flutter', 'Dart'] },
  { title: 'Tools', icon: GitBranch, items: ['Git', 'GitHub', 'GitHub Actions', 'VS Code', 'Vercel', 'Render', 'Cloudinary'] },
]

const projects = [
  {
    number: '01',
    featured: true,
    type: 'FULL-STACK SAAS · AI',
    title: 'Ribra: AI Career Assistant',
    description: 'A full-stack SaaS that helps job seekers go from CV to offer: an ATS-style CV analyzer, CV-vs-job matching with missing keywords, AI cover letters, interview practice with scored feedback, and a drag-and-drop application tracker with daily reminder emails. Includes Google sign-in, Paystack subscriptions, data export and account deletion.',
    status: 'Live',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Google Gemini', 'Paystack', 'Tailwind CSS', 'Vitest'],
    icon: Sparkles,
    tone: 'violet',
    image: ribraScreenshot,
    imageAlt: 'Ribra landing page with the headline "Land the job, from CV to offer" and five feature cards',
    demoUrl: 'https://ribra.vercel.app',
    repoUrl: 'https://github.com/Roqeeb-lanre/ribra',
    note: 'Highlights: rotating refresh-token auth, schema-validated AI output with model fallback, HMAC-verified payment webhooks, atomic usage limits, scheduled jobs with GitHub Actions and 130+ automated tests in CI.',
  },
  {
    number: '02',
    featured: true,
    type: 'FULL-STACK MERN · AI',
    title: 'Rogga: Verified Real Estate for Lagos & Ogun',
    description: 'A property platform that connects house seekers with owners and agents in Lagos and Ogun State. Seekers search with filters and a live map, save homes, message agents and book inspections; agents list properties through a guided form and manage inquiries and viewings from a dashboard; admins approve every listing, verify agents from private ID uploads and act on reports of fake listings. AI recommendations suggest similar homes and personal picks.',
    status: 'Live',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Atlas Vector Search', 'Voyage AI', 'Leaflet', 'Cloudinary', 'Tailwind CSS'],
    icon: House,
    tone: 'cyan',
    image: roggaScreenshot,
    imageAlt: 'Rogga home page with the headline "Find a verified home, straight from owners and trusted agents", a search bar and listing results',
    demoUrl: 'https://rogga-ebon.vercel.app',
    note: 'Highlights: geo search with map-bounds filtering, server-side check that every pin is inside Lagos or Ogun, embedding-based recommendations with a rules fallback, private signed links for ID documents, email alerts with Resend, and deployment on Vercel + Render. Listings marked DEMO are sample data.',
  },
  {
    number: '03',
    type: 'FULL-STACK WEB DEVELOPMENT',
    title: 'MERN E-commerce Platform',
    description: 'A full-stack online store with product browsing, search and categories, user accounts, a shopping cart, Paystack payments, an admin dashboard and Cloudinary image uploads.',
    status: 'Live',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Paystack', 'Cloudinary'],
    icon: ShoppingBag,
    tone: 'violet',
    image: ecommerceScreenshot,
    imageAlt: 'Home page of the MERN e-commerce store showing the hero banner, search bar and product categories',
    demoUrl: 'https://ecommerce-mern-dusky-ten.vercel.app',
    repoUrl: 'https://github.com/Roqeeb-lanre/ecommerce-mern',
  },
  {
    number: '04',
    type: 'AI / MACHINE LEARNING',
    title: 'Poverty & Wealth Prediction',
    description: 'Final year research project and Flutter app that predicts socioeconomic status (Low, Medium, High) in Nigeria from mobile-phone metadata. Five models were compared, and Random Forest gave the most stable results.',
    status: 'Academic project',
    stack: ['Python', 'Scikit-learn', 'Random Forest', 'Flutter', 'ONNX'],
    icon: BrainCircuit,
    tone: 'cyan',
    image: povertyWealthScreens,
    imageAlt: 'Three screens from the Poverty vs Wealth app: a High prediction result, a Low prediction result and the prediction history',
    repoUrl: 'https://github.com/Roqeeb-lanre/poverty-vs-wealth-prediction',
    reportUrl: 'https://github.com/Roqeeb-lanre/poverty-vs-wealth-prediction/blob/main/docs/final-year-project-report.pdf',
    note: 'Co-authored with Olugboye Angel Ayomide. Trained on a synthetic dataset of 9,000 records for privacy-conscious experimentation.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="section-label mb-3">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-slate-400">{description}</p>}
    </div>
  )
}

function ProjectCard({ project, total }) {
  const Icon = project.icon
  const isViolet = project.tone === 'violet'

  return (
    <motion.article initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={fadeUp} className={`glass group flex flex-col overflow-hidden rounded-3xl ${project.featured ? 'lg:col-span-2' : ''}`}>
      <div className={`relative flex ${project.featured ? 'h-64 sm:h-80 lg:h-[26rem]' : 'h-56'} items-center justify-center overflow-hidden ${isViolet ? 'bg-gradient-to-br from-violet/20 via-[#17162c] to-panel' : 'bg-gradient-to-br from-cyan/15 via-[#10232a] to-panel'}`}>
        {project.image ? (
          <a href={project.demoUrl || project.repoUrl} target="_blank" rel="noreferrer" className="absolute inset-0" aria-label={`Open ${project.title} ${project.demoUrl ? 'live demo' : 'on GitHub'}`}>
            <img src={project.image} alt={project.imageAlt} loading="lazy" className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />
          </a>
        ) : (
          <>
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.3) 1px, transparent 0)', backgroundSize: '22px 22px' }} />
            <div className={`relative flex h-24 w-24 items-center justify-center rounded-3xl border ${isViolet ? 'border-violet/30 bg-violet/10 text-violet' : 'border-cyan/30 bg-cyan/10 text-cyan'}`}>
              <Icon size={42} strokeWidth={1.2} />
            </div>
          </>
        )}
        <span className="pointer-events-none absolute left-5 top-5 rounded-full bg-ink/60 px-2.5 py-1 font-mono text-xs text-slate-300">{project.number} / {String(total).padStart(2, '0')}</span>
        <span className="pointer-events-none absolute right-5 top-5 rounded-full border border-white/10 bg-ink/70 px-3 py-1.5 text-[10px] text-slate-200">{project.status}</span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="section-label text-[10px]">{project.type}</p>
        <h3 className="mt-3 text-2xl font-extrabold tracking-tight">{project.title}</h3>
        <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map(tag => <span key={tag} className="rounded-full bg-white/[.05] px-3 py-1.5 font-mono text-[10px] text-slate-300">{tag}</span>)}
        </div>
        {project.note && <p className="mt-5 border-t border-white/[.07] pt-4 text-xs leading-6 text-slate-500">{project.note}</p>}
        {(project.demoUrl || project.repoUrl || project.reportUrl) && (
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-violet px-5 py-2.5 text-sm font-bold text-ink transition hover:bg-[#b2a7ff]">
                Live demo <ArrowUpRight size={16} />
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition hover:border-white/40">
                <Github size={16} /> Source code
              </a>
            )}
            {project.reportUrl && (
              <a href={project.reportUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition hover:border-white/40">
                <FileText size={16} /> Research report
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Certifications', '#certifications'], ['Projects', '#projects'], ['Contact', '#contact']]

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute -left-48 top-24 h-96 w-96 rounded-full bg-violet/10 blur-[120px]" />
        <div className="absolute -right-40 top-[34rem] h-96 w-96 rounded-full bg-cyan/10 blur-[130px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/[.07] bg-ink/80 backdrop-blur-xl">
        <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Go to homepage">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet/30 bg-violet/10 font-mono text-sm font-bold text-violet">OR</span>
            <span className="font-bold tracking-tight">roqeeb<span className="text-violet">.</span></span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {nav.map(([label, href]) => <a key={label} href={href} className="text-sm text-slate-400 transition hover:text-white">{label}</a>)}
            <a href="#contact" className="rounded-full border border-violet/40 px-5 py-2.5 text-sm font-semibold text-violet transition hover:bg-violet hover:text-ink">Let's talk <ArrowUpRight className="ml-1 inline h-4 w-4" /></a>
          </div>
          <button
            className="rounded-lg border border-white/10 p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {menuOpen && (
          <div id="mobile-nav" className="relative z-10 border-t border-white/10 bg-ink px-5 py-4 md:hidden">
            {nav.map(([label, href]) => <a onClick={() => setMenuOpen(false)} key={label} href={href} className="block py-3 text-slate-300">{label}</a>)}
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section id="home" className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/[.06] px-4 py-2 font-mono text-[11px] tracking-wide text-cyan">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan" /> OPEN TO SOFTWARE ENGINEERING ROLES
            </div>
            <p className="section-label mb-5">SOFTWARE ENGINEER · PORTFOLIO</p>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.08] tracking-[-.055em] sm:text-6xl lg:text-7xl">
              Software Engineer <span className="gradient-text">building modern digital experiences.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Hi, I'm <span className="font-semibold text-white">Ojetola Roqeeb</span>. I'm a Computer Science graduate who builds full-stack web applications with the MERN stack and machine-learning solutions with Python.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-[#b2a7ff]">Explore my work <ArrowUpRight size={17} /></a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40">Get in touch <ArrowRight size={16} /></a>
              <a href={cvUrl} download className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40"><Download size={16} /> Download CV</a>
            </div>
            <div className="mt-12 flex items-center gap-5 text-sm text-slate-500">
              <span className="font-mono text-xs">FIND ME ON</span>
              <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-white">
                <Github size={19} />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
                <Linkedin size={19} />
              </a>
              <a href={`mailto:${email}`} aria-label="Email" className="transition hover:text-white">
                <Mail size={19} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-violet/30 via-transparent to-cyan/20 blur-2xl" />
            <div className="glass relative overflow-hidden rounded-[2rem] border border-white/10 p-3 shadow-2xl">
              <img
                src={roqeebPhoto}
                alt="Ojetola Roqeeb - Software Engineer"
                className="h-[420px] w-full rounded-[1.5rem] object-cover object-top sm:h-[520px]"
              />
              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-[#080b14]/85 p-4 backdrop-blur-xl">
                <p className="text-lg font-bold text-white">Ojetola Roqeeb</p>
                <p className="mt-1 text-sm text-slate-300">Software Engineer</p>
                <p className="mt-2 text-xs text-cyan">Full-stack Development · AI/ML</p>
              </div>
            </div>
          </motion.div>

          <a href="#about" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] tracking-widest text-slate-600 lg:flex">SCROLL TO EXPLORE <ArrowDown size={13} /></a>
        </section>

        <section id="about" className="scroll-mt-24 border-t border-white/[.06] bg-white/[.015]">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
            <SectionHeading eyebrow="01 / ABOUT" title="A little about me" description="I build practical software, from full-stack web applications to machine-learning models." />
            <div className="grid gap-6 md:grid-cols-[1.2fr_.8fr]">
              <div className="glass rounded-3xl p-7 sm:p-9">
                <h3 className="text-xl font-bold">Full-stack developer with a machine-learning background.</h3>
                <p className="mt-5 leading-8 text-slate-400">
                  I'm a Computer Science graduate of Afe Babalola University and a registered member of the Computer Professionals (Registration Council) of Nigeria (GMCPN). I trained in MERN full-stack development at Aptech and in Machine Learning, Robotics and AI at New Horizons.
                </p>
                <p className="mt-4 leading-8 text-slate-400">
                  I've built and deployed Ribra, an AI career assistant SaaS with subscriptions, scheduled emails and 130+ automated tests; Rogga, a verified real estate platform for Lagos and Ogun with maps and AI recommendations; a full-stack e-commerce platform with payments, an admin dashboard and image uploads; and for my final year research I compared five machine-learning models for predicting socioeconomic status and shipped the result in a Flutter app. I'm looking for a role where I can keep building useful products across the stack.
                </p>
                <a href={githubUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-violet hover:text-cyan">Explore my GitHub <ArrowUpRight size={16} /></a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
                <div className="glass rounded-3xl p-6"><Layers3 className="mb-4 text-violet" size={23} /><p className="font-bold">Software development</p><p className="mt-2 text-sm leading-6 text-slate-400">Designing and building maintainable applications, from responsive interfaces to REST APIs and databases.</p></div>
                <div className="glass rounded-3xl p-6"><BrainCircuit className="mb-4 text-cyan" size={23} /><p className="font-bold">AI & machine learning</p><p className="mt-2 text-sm leading-6 text-slate-400">Training and evaluating supervised models for classification, and deploying them inside real applications.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionHeading eyebrow="02 / TOOLKIT" title="Technologies & skills" description="The languages, frameworks and tools I use to build and ship software." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(({ title, icon: Icon, items }, i) => (
              <motion.div key={title} initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={fadeUp} className="glass rounded-3xl p-6 sm:p-7">
                <div className="mb-6 flex items-center gap-3"><span className={`rounded-xl p-3 ${i % 2 ? 'bg-cyan/10 text-cyan' : 'bg-violet/10 text-violet'}`}><Icon size={21} /></span><h3 className="font-bold">{title}</h3></div>
                <div className="flex flex-wrap gap-2">{items.map(item => <span key={item} className="rounded-full border border-white/10 bg-white/[.03] px-3.5 py-2 text-xs text-slate-300">{item}</span>)}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="certifications" className="scroll-mt-24 border-t border-white/[.06] bg-white/[.015]">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
            <SectionHeading
              eyebrow="03 / CREDENTIALS"
              title="Certifications & professional registration"
              description="Professional training and registration that support my development in software engineering, computing and emerging technologies."
            />
            <div className="grid gap-5 lg:grid-cols-2">
              <motion.article initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={fadeUp} className="glass overflow-hidden rounded-3xl">
                <a href={cpnCertificate} target="_blank" rel="noreferrer" className="group relative block bg-[#111827] p-3" aria-label="View CPN registration certificate">
                  <img src={cpnCertificate} alt="Computer Professionals Registration Council of Nigeria certificate" loading="lazy" className="h-64 w-full rounded-2xl object-contain transition duration-300 group-hover:scale-[1.01]" />
                  <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink/90 px-3 py-2 text-xs font-semibold text-white"><ExternalLink size={14} /> View certificate</span>
                </a>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3"><span className="rounded-xl bg-violet/10 p-3 text-violet"><BadgeCheck size={22} /></span><span className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-cyan">Registered</span></div>
                  <h3 className="text-xl font-bold">Computer Professionals (Registration Council of Nigeria)</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">Registered in the Graduate category and authorised to practise the computing profession in Nigeria.</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300"><span className="rounded-full bg-white/[.05] px-3 py-1.5">Designation: GMCPN</span><span className="rounded-full bg-white/[.05] px-3 py-1.5">October 2026</span></div>
                </div>
              </motion.article>

              <motion.article initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={fadeUp} className="glass overflow-hidden rounded-3xl">
                <a href={newHorizonsCertificate} target="_blank" rel="noreferrer" className="group relative block bg-[#111827] p-3" aria-label="View New Horizons certificate">
                  <img src={newHorizonsCertificate} alt="New Horizons certificate of completion for Machine Learning, Robotics and Artificial Intelligence" loading="lazy" className="h-64 w-full rounded-2xl object-contain transition duration-300 group-hover:scale-[1.01]" />
                  <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink/90 px-3 py-2 text-xs font-semibold text-white"><ExternalLink size={14} /> View certificate</span>
                </a>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3"><span className="rounded-xl bg-cyan/10 p-3 text-cyan"><Award size={22} /></span><span className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-cyan">Completed</span></div>
                  <h3 className="text-xl font-bold">Machine Learning, Robotics & Artificial Intelligence</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">Certificate of Completion awarded by New Horizons.</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300"><span className="rounded-full bg-white/[.05] px-3 py-1.5">New Horizons</span><span className="rounded-full bg-white/[.05] px-3 py-1.5">June 2026</span></div>
                </div>
              </motion.article>

              <motion.article initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={fadeUp} className="glass rounded-3xl p-6 sm:p-7 lg:col-span-2">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="rounded-xl bg-violet/10 p-3 text-violet"><FileCheck2 size={23} /></span>
                    <div>
                      <h3 className="text-lg font-bold">MERN Stack Programme</h3>
                      <p className="mt-1 text-sm text-slate-400">Aptech · Full-Stack Web Development</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">Completed the programme; the certificate is awaiting collection and will be added here when available.</p>
                    </div>
                  </div>
                  <span className="w-fit shrink-0 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold text-amber-300">Certificate awaiting collection</span>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 border-y border-white/[.06] bg-white/[.015]">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
            <SectionHeading eyebrow="04 / SELECTED WORK" title="Selected projects" description="Practical and academic work, with live demos, source code and research where available." />
            <div className="grid gap-5 lg:grid-cols-2">
              {projects.map(project => <ProjectCard key={project.number} project={project} total={projects.length} />)}
            </div>
            <div className="mt-7 flex items-center justify-between rounded-2xl border border-dashed border-white/15 p-5">
              <div><p className="font-bold">More projects coming</p><p className="mt-1 text-sm text-slate-500">Follow my GitHub to see what I'm working on.</p></div>
              <a href={githubUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 p-3 transition hover:border-violet hover:text-violet" aria-label="Open GitHub"><Github size={19} /></a>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-violet/15 blur-[90px]" />
            <div className="relative max-w-2xl">
              <p className="section-label mb-4">05 / CONTACT</p>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Have an idea? <span className="gradient-text">Let's connect.</span></h2>
              <p className="mt-5 max-w-xl leading-8 text-slate-400">I'm open to software engineering roles, internships and collaborations. The fastest way to reach me is by email or LinkedIn.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={`mailto:${email}`} className="inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-[#b2a7ff]"><Mail size={17} /> Email me</a>
                <a href={linkedinUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold hover:border-white/40"><Linkedin size={17} /> LinkedIn <ExternalLink size={14} /></a>
                <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold hover:border-white/40"><Github size={17} /> GitHub <ExternalLink size={14} /></a>
                <a href={cvUrl} download className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold hover:border-white/40"><Download size={17} /> Download CV</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/[.07]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Ojetola Roqeeb. All rights reserved.</p>
          <a href="#home" className="inline-flex items-center gap-1 hover:text-white">Back to top <ChevronRight className="-rotate-90" size={14} /></a>
        </div>
      </footer>
    </div>
  )
}

export default App
