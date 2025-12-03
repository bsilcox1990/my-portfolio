import { projects } from "@/app/constants/projects"
import ProjectCard from "@/app/projects/projectCard"

export default function Projects() {
  return (
  <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
        ))}
      </div>
  </div>
  
  );
}
