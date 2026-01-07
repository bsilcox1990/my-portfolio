export type Project = {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    repos?: {
        frontend?: string;
        backend?: string;
    }
    demo?: string;
    image?: string;

}

export type Skill = {
    category: string;
    skills: string[];
}