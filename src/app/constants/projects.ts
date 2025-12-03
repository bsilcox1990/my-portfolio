import type { Project } from "@/app/types/project"

export const projects:Project [] = [
    {
        title: "News Explorer",
        description: "An application used to search for relevant news and save articles to your profile",
        tech: ["react", "vite", "css", "html", "javascript"],
        github: "https://github.com/bsilcox1990/se_project_news-explorer",
        image: "/projects/newsExplorer.png"
    },
    {
        title: "What to wear(WTWR)",
        description: "A weather based clothing application that uses real time weather data to suggest articles of clothing from your profile",
        tech: ["react", "vite", "css", "html", "javascript", "express", "node.js", "mongoDB"],
        repos: {
            frontend: "https://github.com/bsilcox1990/se_project_react",
            backend: "https://github.com/bsilcox1990/se_project_express"
        },
        image: "/projects/wtwr.png"
    },
    {
        title: "Spots",
        description: "A picture sharing application where users can add, delete, and like pictures",
        tech: ["javascript", "css", "html", "webpack"],
        github: "https://github.com/bsilcox1990/se_project_spots",
        image: "/projects/spots.png"
    }
]