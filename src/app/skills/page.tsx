/* import SkillCard from "@/app/skills/skillCard"
import { skills } from "@/app/constants/skills"

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 bg-muted/30">
      <header className="mb-12 max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold">Skills</h1>
        <p className="text-muted-foreground">
          Technologies and tools I’ve used to build full-stack applications.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <SkillCard
            key={group.category}
            category={group.category}
            skills={group.skills}
          />
        ))}
      </div>
    </section>
  )
}
 */
"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import SkillCard from "@/app/skills/skillCard"
import { skills } from "@/app/constants/skills"
import {
  Code2,
  Layers,
  Server,
  Database,
  Wrench,
  CheckCircle,
  Palette,
} from "lucide-react"

const iconMap: Record<string, ReactNode> = {
  Languages: <Code2 size={16} />,
  Frontend: <Layers size={16} />,
  "Backend & APIs": <Server size={16} />,
  "Databases & ORM": <Database size={16} />,
  Tools: <Wrench size={16} />,
  Practices: <CheckCircle size={16} />,
  Design: <Palette size={16} />,
}

export default function SkillsPage() {
  return (
    <section className="bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <header className="mb-16 max-w-xl">
          <h1 className="mb-4 text-4xl font-bold">Skills</h1>
          <p className="text-muted-foreground">
            Technologies and tools I’ve used to build full-stack applications.
          </p>
        </header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <SkillCard
                category={group.category}
                skills={group.skills}
                icon={iconMap[group.category]}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
