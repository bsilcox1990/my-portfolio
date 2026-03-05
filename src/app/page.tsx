export default function Home() {
  return (
    <section className="flex flex-col gap-8 py-24 max-w-3xl">

      <h1 className="text-5xl font-bold leading-tight">
        Hi, I'm Brad.
        <br />
        <span className="text-cyan-400">Software Engineer</span>
      </h1>

      <p className="text-lg text-black/70">
        Full-stack developer focused on building modern web applications using React,
        TypeScript, Node.js, Express, and MongoDB.
      </p>

      <p className="text-black/60 max-w-xl">
        I enjoy solving real problems with clean, scalable code and continuously
        improving my skills as an engineer. I'm currently seeking opportunities
        where I can contribute to a team while continuing to grow as a developer.
      </p>

      <p className="text-black/50 text-sm">
        📍 Based in Washington, United States — open to remote opportunities and collaboration.
      </p>

      <div className="flex gap-4 mt-4">

        <a
          href="/projects"
          className="px-6 py-3 bg-cyan-500 text-black font-medium rounded-md hover:bg-cyan-400 transition"
        >
          View Projects
        </a>

        <a
          href="/contact"
          className="px-6 py-3 border border-white/20 rounded-md hover:border-white/40 transition"
        >
          Contact Me
        </a>

      </div>

    </section>
  );
}

