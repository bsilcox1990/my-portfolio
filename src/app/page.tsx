export default function Home() {
  return (
    <section className="flex flex-col gap-6 py-24">
      <h1 className="text-5xl font-bold">
        Hi, I'm Brad. <br />
        <span className="text-cyan-400">Software Engineer</span>
      </h1>

      <p className="text-lg text-white/70 max-w-xl">
        I build modern web applications using React, Next.js, TypeScript, Node.js, and MongoDB.
      </p>

      <div className="flex gap-4 mt-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-cyan-500 text-black font-medium rounded-md hover:bg-cyan-400"
        >
          View Projects
        </a>

        <a
          href="/contact"
          className="px-6 py-3 border border-white/20 rounded-md hover:border-white/40"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

