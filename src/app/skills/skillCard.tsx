/* type SkillCardProps = {
  category: string
  skills: string[]
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="
    rounded-2xl 
    border border-border/40 
    bg-muted/40 
    p-6 
    transition 
    hover:-translate-y-1 
    hover:shadow-lg
    ">
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">
        {category}
      </h3>
        <div className="mb-4 h-px w-50 bg-foreground/30" />

      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="
            rounded-full 
            bg-background 
            px-3 
            py-1.5 
            text-xs 
            text-foreground 
            shadow-sm
            ">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}
 */

import { ReactNode } from "react"

type SkillCardProps = {
  category: string
  skills: string[]
  icon: ReactNode
}

export default function SkillCard({ category, skills, icon }: SkillCardProps) {
  return (
    <div className="h-full rounded-2xl border border-border/40 bg-background/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-center gap-2 text-muted-foreground">
        {icon}
        <h3 className="text-xs font-semibold uppercase tracking-widest">
          {category}
        </h3>
      </div>

      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-muted px-3 py-1.5 text-xs text-foreground"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}
