import type { Project } from "@/app/types/project"

export const projects:Project [] = [
    {
        title: "Job Tracker",
        description: 'A full-stack job application tracking platform that allows users to securely manage their job search with authentication, personalized dashboards, and CRUD functionality.',
        tech: ["React", "TypeScript", "Express", "PostgreSQL", "JWT", "Docker", "Neon", "Render", "Vercel"],
        github: "https://github.com/bsilcox1990/job-tracker",
        image: "/projects/jobTracker.png"
    },

    {
        title: "News Explorer",
        description: "An application used to search for relevant news and save articles to your profile",
        tech: ["React", "Vite", "CSS", "HTML", "JavaScript"],
        github: "https://github.com/bsilcox1990/se_project_news-explorer",
        image: "/projects/newsExplorer.png"
    },
    {
        title: "What to wear(WTWR)",
        description: "A weather based clothing application that uses real time weather data to suggest articles of clothing from your profile",
        tech: ["React", "Vite", "CSS", "HTML", "JavaScript", "Express", "Node.js", "MongoDB"],
        repos: {
            frontend: "https://github.com/bsilcox1990/se_project_react",
            backend: "https://github.com/bsilcox1990/se_project_express"
        },
        image: "/projects/wtwr.png"
    },
    {
        title: "Spots",
        description: "A picture sharing application where users can add, delete, and like pictures",
        tech: ["JavaScript", "CSS", "HTML", "Webpack"],
        github: "https://github.com/bsilcox1990/se_project_spots",
        image: "/projects/spots.png"
    }
]