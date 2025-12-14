"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Personal Finance Dashboard",
    description:
      "A lightweight dashboard to track income, expenses, investments, and overall net worth in one place. Includes financial trend analysis and spending visualizations.",
    tech: ["Python", "Pandas", "CSV", "SQLite", "Matplotlib"],
    github: "https://github.com/Itsssaksham/PersonalFinanceDashboard",
    live: null,
  },
  {
    title: "AI Job Application Assistant",
    description:
      "An automation tool that generates role-specific resumes and cover letters from job descriptions using AI, while tracking applications and timelines.",
    tech: ["Python", "AI APIs", "Automation Scripts", "JSON", "YAML"],
    github: "https://github.com/Itsssaksham/Ai-Job-Application-Assistant",
    live: null,
  },
  {
    title: "File Compression Tool (Huffman Coding)",
    description:
      "A command-line utility that compresses and decompresses files using Huffman coding, focusing on efficient encoding, decoding, and bit-level operations.",
    tech: ["C++", "STL", "Trees", "Priority Queues", "Bit Manipulation"],
    github: "https://github.com/Itsssaksham/File-Compression-Tool",
    live: null,
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 px-4 md:px-8 lg:px-12"
      ref={ref}
      aria-label="Projects"
    >
      <div className="container max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Projects
        </motion.h2>

        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute left-0 top-0 bottom-0 w-px bg-border"
            aria-hidden="true"
          />

          <div className="space-y-16" role="list">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="relative pl-8 md:pl-12"
              >
                <div
                  className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full -translate-x-[3.5px]"
                  aria-hidden="true"
                />

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <h3 className="text-xl md:text-2xl font-semibold">{project.title}</h3>
                    <nav className="flex gap-3" aria-label={`${project.title} links`}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="h-5 w-5" aria-hidden="true" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <ExternalLink className="h-5 w-5" aria-hidden="true" />
                        </a>
                      )}
                    </nav>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-border">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
