function App() {
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
            <div className="max-w-4xl">
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                Python • Full-Stack Development • AI
              </p>

              <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
                Hi, I'm Brajesh Das .
                <br />
                <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                  I build software.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
                Python & Full-Stack Developer focused on building modern web
                applications, AI-powered tools, and scalable software.
              </p>

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

              {/* Social links */}

              <div className="mt-12 flex gap-6 text-sm text-slate-500">
                <a href="https://github.com/brajeshdas117-pixel" className="transition hover:text-white">
                  GitHub ↗
                </a>
                <a href="https://www.linkedin.com/in/brajesh-das-b9b9402b9/" className="transition hover:text-white">
                  LinkedIn ↗
                </a>
                <a href="mailto:brajeshdas118@gmail.com" className="transition hover:text-white">
                  Email ↗
                </a>
              </div>
            </div>

            {/* Tech strip */}

           {/* Tech strip */}

            <div className="mt-24 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
              {["Python", "Django", "React", "fastAPI "].map((tech) => (
                <div
                  key={tech}
                  className="bg-[#0b0f16] px-6 py-5 text-center text-sm font-medium text-slate-300"
                >
                  {tech}
                </div>
              ))}
            </div> 
          </div>
        </section>

        {/* Temporary sections */}

        <section
  id="about"
  className="mx-auto max-w-6xl px-6 py-32"
>
  <div className="grid gap-12 md:grid-cols-2 md:items-center">

    {/* About content */}
    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        About Me
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight">
        Building software with curiosity.
      </h2>

      <div className="mt-6 space-y-5 text-slate-400 leading-8">
        <p>
          I'm Brajesh Das, a software developer focused on
          Python and full-stack development.
        </p>

        <p>
          I enjoy developing full-stack applications and
          exploring new technologies to solve real-world problems.
        </p>

        <p>
          I'm continuously improving my problem-solving and
          software engineering skills through projects,
          DSA practice, and hands-on development.
        </p>
      </div>
    </div>

    {/* About sub-content */}
    <div className="grid gap-4 sm:grid-cols-2">

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

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-sm text-slate-500">Focus</p>
        <h3 className="mt-2 text-xl font-semibold">
          Full-Stack Development
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          Python · Django · React
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-sm text-slate-500">Interests</p>
        <h3 className="mt-2 text-xl font-semibold">
          AI & Software Development
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          AI tools · APIs · Web Apps
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-sm text-slate-500">Currently</p>
        <h3 className="mt-2 text-xl font-semibold">
          Learning
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          DSA · Python Full - stack · Backend
        </p>
      </div>

    </div>
  </div>
</section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-32">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>
          <h2 className="mt-4 text-4xl font-bold">My toolkit.</h2>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-32">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>
          <h2 className="mt-4 text-4xl font-bold">Things I've built.</h2>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-32">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>
          <h2 className="mt-4 text-4xl font-bold">My journey.</h2>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-32">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-bold">Let's build something.</h2>
        </section>
      </main>
    </div>
  );
}

export default App;