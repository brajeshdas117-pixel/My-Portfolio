import profileImage from "./assets/profile.jpeg";
import { useState } from "react"

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  return (
    <div className="min-h-screen bg-[#070a0f] text-white">
      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070a0f]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-bold tracking-tight">
            Brajesh Das<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
          {/* Background glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="relative mx-auto w-full max-w-6xl">
            {/* Hero Row */}
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
              {/* Hero Content */}
              <div className="max-w-4xl lg:w-3/5">
                <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                  Python • Full-Stack Development • AI
                </p>

                <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
                  Hi, I'm Brajesh Das.
                  <br />
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                    I build software.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
                  Python & Full-Stack Developer focused on building modern web
                  applications, AI-powered tools, and scalable software.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    View Projects →
                  </a>

                  <a
                    href="#contact"
                    className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
                  >
                    Let's Connect
                  </a>
                </div>

                {/* Social Links */}
                <div className="mt-12 flex gap-6 text-sm text-slate-500">
                  <a
                    href="https://github.com/brajeshdas117-pixel"
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-white"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="https://www.linkedin.com/in/brajesh-das-b9b9402b9/"
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-white"
                  >
                    LinkedIn ↗
                  </a>

                  <a
                    href="mailto:brajeshdas118@gmail.com"
                    className="transition hover:text-white"
                  >
                    Email ↗
                  </a>
                </div>
              </div>

              {/* Profile Image */}
              <div className="relative flex items-center justify-center lg:w-2/5">
                {/* Glow behind image */}
                <div className="absolute h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

                {/* Image */}
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-cyan-400/40 shadow-[0_0_60px_rgba(34,211,238,0.15)] sm:h-72 sm:w-72">
                  <img
                    src={profileImage}
                    alt="Brajesh Das"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="mx-auto max-w-6xl px-6 py-32"
        >
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* About Content */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                About Me
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Building software with curiosity.
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-400">
                <p>
                  I'm Brajesh Das, a software developer focused on Python and
                  full-stack development.
                </p>

                <p>
                  I enjoy developing full-stack applications and exploring new
                  technologies to solve real-world problems.
                </p>

                <p>
                  I'm continuously improving my problem-solving and software
                  engineering skills through projects, DSA practice, and
                  hands-on development.
                </p>
              </div>
            </div>

            {/* About Sub-content */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Education */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm text-slate-500">Education</p>

                <h3 className="mt-2 text-xl font-semibold">
                  B.Tech
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Electronics & Telecommunication Engineering
                </p>

                <p className="mt-3 text-sm text-cyan-400">
                  CGPA 8.26
                </p>
              </div>

              {/* Focus */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm text-slate-500">Focus</p>

                <h3 className="mt-2 text-xl font-semibold">
                  Full-Stack Development
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Python · Django · React
                </p>
              </div>

              {/* Interests */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm text-slate-500">Interests</p>

                <h3 className="mt-2 text-xl font-semibold">
                  AI & Software Development
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  AI tools · APIs · Web Apps
                </p>
              </div>

              {/* Currently */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm text-slate-500">Currently</p>

                <h3 className="mt-2 text-xl font-semibold">
                  Learning
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  DSA · Python Full-stack · Backend
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="mx-auto max-w-6xl px-6 py-32"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            My toolkit.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            A structured overview of the technologies, development skills,
            computer science fundamentals, and tools I use to build software.
          </p>

          {/* Tech Highlights */}

          <div className="mt-8 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-5">
            {["Python", "Django", "React", "FastAPI", "Database"].map((tech) => (
              <div
                key={tech}
                className="bg-[#0b0f16] px-6 py-5 text-center text-sm font-medium text-slate-300 transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Skills Tree */}
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10">

            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[100px]" />

            {/* Root Node */}
            <div className="relative z-10 flex justify-center">
              <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-8 py-4 text-center shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                  My Skills
                </p>

                <h3 className="mt-1 text-xl font-bold text-white">
                  Software Development
                </h3>
              </div>
            </div>

            {/* Main Tree Connector */}
            <div className="mx-auto mt-0 h-12 w-px bg-cyan-400/30" />

            {/* Main Branch */}
            <div className="relative">
              <div className="absolute left-1/2 top-0 hidden h-px w-[72%] -translate-x-1/2 bg-cyan-400/20 md:block" />

              <div className="grid gap-8 md:grid-cols-3">

              {/* Development Branch */}

                <div className="relative">
                  <div className="mb-6 flex justify-center">
                    <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#070a0f]">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    </div>
                  </div>

          <div className="relative rounded-2xl border border-white/10 bg-[#0b0f16] p-6 transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.06)]">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                Branch 01
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Development
              </h3>
            </div>

            {/* Frontend */}
            <div className="mt-6 border-l border-cyan-400/20 pl-5">
              <h4 className="text-sm font-semibold text-white">
                Frontend
              </h4>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "React.js",
                  "Tailwind CSS",
                  "Responsive Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="mt-6 border-l border-cyan-400/20 pl-5">
              <h4 className="text-sm font-semibold text-white">
                Backend
              </h4>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Python",
                  "Django",
                  "FastAPI",
                  "REST APIs",
                  "Uvicorn",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="mt-6 border-l border-cyan-400/20 pl-5">
              <h4 className="text-sm font-semibold text-white">
                Database & libraries
              </h4>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "MySQL",
                  "SQL",
                  "SQLAlchemy",
                  "Pandas",
                  "NumPy"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI & Data Branch */}
        <div className="relative">
          <div className="mb-6 flex justify-center">
            <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#070a0f]">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-[#0b0f16] p-6 transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.06)]">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                Branch 02
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                AI & Data
              </h3>
            </div>

            {/* AI */}
            <div className="mt-6 border-l border-cyan-400/20 pl-5">
              <h4 className="text-sm font-semibold text-white">
                AI & Machine Learning
              </h4>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Generative AI",
                  "Computer Vision",
                  "OpenCV",
                  "Image Processing",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Programming Languages */}
            <div className="mt-6 border-l border-cyan-400/20 pl-5">
              <h4 className="text-sm font-semibold text-white">
                Programming Languages
              </h4>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Python",
                  "JavaScript",
                  "MATLAB",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core CS & Tools Branch */}
        <div className="relative">
          <div className="mb-6 flex justify-center">
            <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#070a0f]">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-[#0b0f16] p-6 transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.06)]">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                Branch 03
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Core CS & Tools
              </h3>
            </div>

            {/* Computer Science */}
            <div className="mt-6 border-l border-cyan-400/20 pl-5">
              <h4 className="text-sm font-semibold text-white">
                Computer Science
              </h4>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Data Structures & Algorithms",
                  "OOP",
                  "DBMS",
                  "Operating Systems",
                  "Computer Networks",
                  "System Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mt-6 border-l border-cyan-400/20 pl-5">
              <h4 className="text-sm font-semibold text-white">
                Tools & Technologies
              </h4>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Git",
                  "GitHub",
                  "VS Code",
                  "Postman",
                  "REST API",
                  "Linux / Terminal",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* Projects */}

<section
  id="projects"
  className="mx-auto max-w-6xl px-6 py-32"
>
  <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
    Projects
  </p>

  <h2 className="mt-4 text-4xl font-bold tracking-tight">
    Things I've built.
  </h2>

  <p className="mt-5 max-w-2xl leading-8 text-slate-400">
    A selection of projects I've developed while exploring full-stack
    development, AI, backend systems, and real-world software solutions.
  </p>

  {/* Project Cards */}

  <div className="mt-12 grid gap-6 md:grid-cols-2">

    {/* Project 1 */}
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-cyan-400">
            Featured Project
          </p>

          <h3 className="mt-2 text-2xl font-semibold">
            AI-Powered Urban Change Detection
          </h3>
        </div>

        <span className="text-2xl text-cyan-400">
          ↗
        </span>
      </div>

      <p className="mt-5 leading-7 text-slate-400">
        An AI-based urban change detection system using multi-sensor
        remote sensing data. The project combines VHR, multispectral,
        and SAR imagery to identify changes in urban environments.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {[
          "Python",
          "Deep Learning",
          "U-Net",
          "Computer Vision",
          "Image Processing",
        ].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-[#0b0f16] px-3 py-1.5 text-xs text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-7 flex gap-4">
        <a
          href="#"
          className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          GitHub ↗
        </a>

        <a
          href="#"
          className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
        >
          Details
        </a>
      </div>
    </div>

    {/* Project 2 */}
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-cyan-400">
            Full-Stack + AI
          </p>

          <h3 className="mt-2 text-2xl font-semibold">
            CRM AI Assistant
          </h3>
        </div>

        <span className="text-2xl text-cyan-400">
          ↗
        </span>
      </div>

      <p className="mt-5 leading-7 text-slate-400">
        A full-stack CRM application with an AI-powered assistant.
        The system uses a FastAPI backend, React frontend, database
        integration, and an LLM-based conversational interface.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {[
          "React",
          "FastAPI",
          "Python",
          "SQLAlchemy",
          "LangChain",
          "LLM",
        ].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-[#0b0f16] px-3 py-1.5 text-xs text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-7 flex gap-4">
        <a
          href="#"
          className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          GitHub ↗
        </a>

        <a
          href="#"
          className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
        >
          Details
        </a>
      </div>
    </div>

    {/* Project 3 */}
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-cyan-400">
            Web Application
          </p>

          <h3 className="mt-2 text-2xl font-semibold">
            Smart Tatkal Booking System
          </h3>
        </div>

        <span className="text-2xl text-cyan-400">
          ↗
        </span>
      </div>

      <p className="mt-5 leading-7 text-slate-400">
        A modern booking interface designed with a responsive frontend
        and optimized user experience. Built to demonstrate component-
        based development and modern frontend architecture.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {[
          "React",
          "JavaScript",
          "Tailwind CSS",
          "Vite",
          "REST API",
        ].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-[#0b0f16] px-3 py-1.5 text-xs text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-7 flex gap-4">
        <a
          href="#"
          className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          GitHub ↗
        </a>

        <a
          href="#"
          className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
        >
          Live Demo ↗
        </a>
      </div>
    </div>

    {/* Project 4 */}

    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-cyan-400">
            AI + Full-Stack
          </p>

          <h3 className="mt-2 text-2xl font-semibold">
            Smart Job Portal & ATS Resume Analyzer
          </h3>
        </div>

        <span className="text-2xl text-cyan-400">
          ↗
        </span>
      </div>

      <p className="mt-5 leading-7 text-slate-400">
        A smart job portal concept that analyzes resumes against job
        requirements and helps users understand their skill matching
        and application readiness.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {[
          "Python",
          "Django",
          "React",
          "REST API",
          "AI",
          "MySQL",
        ].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-[#0b0f16] px-3 py-1.5 text-xs text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-7 flex gap-4">
        <a
          href="#"
          className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          GitHub ↗
        </a>

        <a
          href="#"
          className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
        >
          Details
        </a>
      </div>
    </div>

  </div>
</section>

        {/* Experience */}
<section
  id="experience"
  className="mx-auto max-w-6xl px-6 py-32"
>
  <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
    Experience
  </p>

  <h2 className="mt-4 text-4xl font-bold tracking-tight">
    My journey.
  </h2>

  <p className="mt-5 max-w-2xl leading-8 text-slate-400">
    My experience across internships, software development, and
    hands-on technical projects.
  </p>

  {/* Timeline */}
  <div className="relative mt-14">

    {/* Timeline Line */}
    <div className="absolute left-3 top-2 h-[calc(100%-8px)] w-px bg-white/10 md:left-5" />

    <div className="space-y-12">

      {/* DRDO */}
      <div className="relative pl-10 md:pl-16">
        {/* Timeline Dot */}
        <div className="absolute left-0 top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/40 bg-[#070a0f] md:h-10 md:w-10">
          <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)] md:h-3 md:w-3" />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-medium text-cyan-400">
                Internship
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                DRDO PXE Chandipur
              </h3>
            </div>

            <span className="w-fit rounded-full border border-white/10 bg-[#0b0f16] px-4 py-1.5 text-xs text-slate-400">
              Technical Internship
            </span>
          </div>

          <p className="mt-5 leading-7 text-slate-400">
            Worked on image-based measurement and analysis tasks
            involving high-speed camera techniques and thermal
            imaging.
          </p>

          <div className="mt-6">
            <p className="mb-3 text-sm font-medium text-slate-300">
              Work & Projects
            </p>

            <ul className="space-y-2 text-sm leading-6 text-slate-400">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                Spin measurement of a pedestal fan using a high-speed
                camera.
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                Surface temperature measurement of a heater using
                image-based techniques.
              </li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Image Processing",
              "Computer Vision",
              "High-Speed Camera",
              "Python",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-[#0b0f16] px-3 py-1.5 text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ISRO */}
      <div className="relative pl-10 md:pl-16">
        {/* Timeline Dot */}
        <div className="absolute left-0 top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/40 bg-[#070a0f] md:h-10 md:w-10">
          <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)] md:h-3 md:w-3" />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-medium text-cyan-400">
                Online Internship
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                ISRO
              </h3>
            </div>

            <span className="w-fit rounded-full border border-white/10 bg-[#0b0f16] px-4 py-1.5 text-xs text-slate-400">
              20 Days
            </span>
          </div>

          <p className="mt-5 leading-7 text-slate-400">
            Completed a 20-day online internship focused on learning
            and exploring technical concepts related to space
            technology and engineering.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Space Technology",
              "Engineering",
              "Technical Learning",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-[#0b0f16] px-3 py-1.5 text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Software Development */}
      <div className="relative pl-10 md:pl-16">
        {/* Timeline Dot */}
        <div className="absolute left-0 top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/40 bg-[#070a0f] md:h-10 md:w-10">
          <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)] md:h-3 md:w-3" />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]">
          <p className="text-sm font-medium text-cyan-400">
            Software Development
          </p>

          <h3 className="mt-2 text-2xl font-semibold">
            Full-Stack & AI Projects
          </h3>

          <p className="mt-5 leading-7 text-slate-400">
            Building practical software applications using Python,
            React, FastAPI, Django, databases, and AI technologies.
            Focused on developing complete applications from
            frontend interfaces to backend APIs.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-[#0b0f16] p-4">
              <p className="text-sm font-medium text-slate-200">
                Backend
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Python · Django · FastAPI · REST APIs
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0b0f16] p-4">
              <p className="text-sm font-medium text-slate-200">
                Frontend
              </p>

              <p className="mt-1 text-sm text-slate-500">
                React · JavaScript · Tailwind CSS
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0b0f16] p-4">
              <p className="text-sm font-medium text-slate-200">
                Database
              </p>

              <p className="mt-1 text-sm text-slate-500">
                MySQL · SQL · SQLAlchemy
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0b0f16] p-4">
              <p className="text-sm font-medium text-slate-200">
                AI
              </p>

              <p className="mt-1 text-sm text-slate-500">
                LangChain · LLM Integration · Computer Vision
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    {/* Contact */}
<section
  id="contact"
  className="mx-auto max-w-6xl px-6 py-32"
>
  <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-12 lg:p-16">

    {/* Heading */}
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        Contact
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Let's build something.
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
        Have an idea, project, or opportunity you'd like to discuss?
        Feel free to reach out. I'm always interested in connecting
        and building meaningful software.
      </p>
    </div>

    {/* Contact Content */}
    <div className="mt-12 grid gap-10 lg:grid-cols-5">

      {/* Contact Form */}
      <div className="lg:col-span-3">

        {isSubmitted ? (
          <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/5 p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/10 text-2xl text-cyan-400">
              ✓
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              Message sent successfully!
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Thank you for reaching out. I'll get back to you as soon
              as possible.
            </p>
          </div>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              setIsSubmitting(true);
              setIsSubmitted(false);
              setFormError("");

              const formData = new FormData(e.currentTarget);

              try {
                const response = await fetch("https://formspree.io/f/xaenbdow", {
                  method: "POST",
                  body: formData,
                  headers: {
                    Accept: "application/json",
                  },
                });

                if (response.ok) {
                  setIsSubmitted(true);
                  e.currentTarget.reset();
                } else {
                  setFormError("Something went wrong. Please try again.");
                }
              } catch {
                setFormError("Unable to send message. Please try again.");
              } finally {
                setIsSubmitting(false);
              }
            }}
          >

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-[#0b0f16] px-5 py-3.5 text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-[#0b0f16] px-5 py-3.5 text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="What would you like to discuss?"
                className="w-full rounded-xl border border-white/10 bg-[#0b0f16] px-5 py-3.5 text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows="6"
                placeholder="Tell me about your project or opportunity..."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#0b0f16] px-5 py-3.5 text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
              />
            </div>

            {/* Error */}
            {formError && (
              <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-5 py-4 text-sm text-red-300">
                {formError}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message →"}
            </button>

          </form>
        )}
      </div>

      {/* Contact Details */}
      <div className="space-y-5 lg:col-span-2">

        {/* Email */}
        <a
          href="mailto:brajeshdas118@gmail.com"
          className="group block rounded-2xl border border-white/10 bg-[#0b0f16] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-lg text-cyan-400">
            @
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Email
          </p>

          <p className="mt-1 break-all font-medium text-white">
            brajeshdas118@gmail.com
          </p>

          <p className="mt-3 text-sm text-slate-500 transition group-hover:text-cyan-400">
            Send an email ↗
          </p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/brajesh-das-b9b9402b9/"
          target="_blank"
          rel="noreferrer"
          className="group block rounded-2xl border border-white/10 bg-[#0b0f16] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-bold text-cyan-400">
            in
          </div>

          <p className="mt-5 text-sm text-slate-500">
            LinkedIn
          </p>

          <p className="mt-1 font-medium text-white">
            Connect with me
          </p>

          <p className="mt-3 text-sm text-slate-500 transition group-hover:text-cyan-400">
            Visit my profile ↗
          </p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/brajeshdas117-pixel"
          target="_blank"
          rel="noreferrer"
          className="group block rounded-2xl border border-white/10 bg-[#0b0f16] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-lg text-cyan-400">
            ◉
          </div>

          <p className="mt-5 text-sm text-slate-500">
            GitHub
          </p>

          <p className="mt-1 font-medium text-white">
            View my repositories
          </p>

          <p className="mt-3 text-sm text-slate-500 transition group-hover:text-cyan-400">
            View my work ↗
          </p>
        </a>

      </div>
    </div>

    {/* Bottom */}
    <div className="mt-12 border-t border-white/10 pt-8">
      <p className="text-sm text-slate-500">
        Open to opportunities in{" "}
        <span className="text-slate-300">
          Python · Full-Stack Development · AI · Backend
        </span>
      </p>
    </div>

  </div>
</section>
     
  </main>
  </div>
  );
}

export default App;