export default function Experience() {
  return (
    <section className="flex flex-col gap-12 py-24 max-w-3xl">

      <h1 className="text-4xl font-bold">Experience</h1>

      {/* OC Wildlands */}
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">
          Software Engineer Extern
        </h2>

        <p className="text-cyan-400">
          OC Wildlands • 2025
        </p>

        <p className="text-gray-700">
          Collaborated with a development team to build a web application
          supporting environmental conservation efforts. Contributed to
          frontend features, improved UI components, and worked through
          real-world development workflows including Git branching,
          code reviews, and team collaboration.
        </p>

        <ul className="list-disc list-inside text-gray-700">
          <li>Developed responsive UI components using React</li>
          <li>Collaborated with team members through GitHub pull requests</li>
          <li>Participated in code reviews and iterative feature development</li>
          <li>Worked within a real-world team development environment</li>
        </ul>
      </div>

      {/* TripleTen */}
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">
          Software Engineering Bootcamp
        </h2>

        <p className="text-cyan-400">
          TripleTen • 2024
        </p>

        <p className="text-gray-700">
          Completed an intensive software engineering program focused on
          full-stack web development, building multiple applications using
          modern JavaScript technologies and collaborative development
          practices.
        </p>

        <ul className="list-disc list-inside text-gray-700">
          <li>Built full-stack web applications using React and Node.js</li>
          <li>Developed REST APIs and integrated MongoDB databases</li>
          <li>Learned modern development workflows with Git and GitHub</li>
          <li>Practiced debugging, testing, and scalable project structure</li>
        </ul>
      </div>

    </section>
  );
}
