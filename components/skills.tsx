"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Core Concepts",
    skills: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Databases", "Problem Solving"],
    color: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  },
  {
    title: "Languages",
    skills: ["C / C++", "Python", "Java", "SQL", "JavaScript"],
    color: "bg-green-500/10 text-green-700 border-green-500/20",
  },
  {
    title: "Technologies & Tools",
    skills: ["Git & GitHub", "Docker", "REST APIs", "Pandas", "Matplotlib"],
    color: "bg-orange-500/10 text-orange-700 border-orange-500/20",
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30" ref={ref}>
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + categoryIndex * 0.1 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-center">{category.title}</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="outline"
                        className={`${category.color} px-4 py-2 text-sm font-medium cursor-default`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
