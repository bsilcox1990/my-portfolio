import Image from "next/image"
import { Project } from "@/app/types/project"

export default function ProjectCard ({project}: { project: Project }){
    return (
        <div className="border rounded-xl p-6 shadow-sm transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg">
            {project.image && <Image 
                src={project.image}
                alt={`${project.title} screenshot`}
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-t-xl"
            />}
            <h2 className="text-xl font-bold my-5">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <ul className="flex gap-2 flex-wrap text-sm text-blue-600 mb-5">
                {project.tech.map((item) => (
                    <li className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded" key={item}>
                        {item}
                    </li>
                ))}
            </ul>
            {project.github && 
            <a 
            href={project.github} 
            rel="noopener noreferrer" 
            target="_blank" 
            className="text-blue-600 underline hover:text-blue-800">
                Github Repo
            </a>
            }
            {project.repos && 
            <div className="flex flex-col gap-1 mt-4">
                {project.repos.frontend &&
                <a 
                href={project.repos.frontend}
                rel="noopener noreferrer" 
                target="_blank" 
                className="text-blue-600 underline hover:text-blue-800"
                >
                    Frontend Repo
                </a>
                }
                {project.repos.backend &&
                <a 
                href={project.repos.backend}
                rel="noopener noreferrer" 
                target="_blank" 
                className="text-blue-600 underline hover:text-blue-800"
                >
                    Backend Repo
                </a>
                }
            </div>
            }
        </div>
    )
}