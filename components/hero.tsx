"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, Code2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Core Concepts",
    skills: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Databases", "Problem Solving"],
  },
  {
    title: "Languages",
    skills: ["C / C++", "Python", "Java", "SQL", "JavaScript"],
  },
  {
    title: "Technologies",
    skills: ["Git & GitHub", "Docker", "REST APIs", "Pandas", "Matplotlib"],
  },
]

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-4 md:px-8 lg:px-12" aria-label="Introduction">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side - Name, Summary, Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 pt-20 lg:pt-32"
          >
            <div className="space-y-6">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Saksham <span className="text-primary">Gupta</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
              >
                Final-year CSE student with strong foundations in Data Structures & Algorithms and hands-on experience
                building Python tools, AI automation systems, and low-level utilities.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
              role="list"
              aria-label="Social links and resume"
            >
              <a
                href="https://www.linkedin.com/in/sakshamgupta004/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/Itsssaksham"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="GitHub profile"
              >
                <Github className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://leetcode.com/u/itssaksham/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="LeetCode profile"
              >
                <Code2 className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="mailto:saksham@example.com"
                className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Send email"
              >
                <Mail className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="/saksham_resume.pdf"
                download
                className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Download resume (PDF)"
              >
                <Download className="h-6 w-6" aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8 pt-20 lg:pt-32"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Skills</h2>
            <div className="space-y-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="space-y-3"
                >
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2" role="list">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1.5 text-sm bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
