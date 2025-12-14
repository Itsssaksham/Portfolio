"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const education = [
  {
    institution: "Chitkara University, Rajpura, Punjab",
    degree: "B.E. in Computer Science Engineering",
    period: "2022 – 2026",
  },
  {
    institution: "Indus Global School, Chandigarh",
    degree: "Senior Secondary",
    period: "2021 – 2022",
  },
  {
    institution: "Indus Global School, Chandigarh ",
    degree: "Secondary",
    period: "2019 – 2020",
  },
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="education"
      className="min-h-screen flex items-center py-20 px-4 md:px-8 lg:px-12"
      ref={ref}
      aria-label="Education"
    >
      <div className="container max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Education
        </motion.h2>

        <div className="space-y-12" role="list">
          {education.map((item, index) => (
            <motion.article
              key={item.institution}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15 }}
              className="border-l-2 border-primary pl-6 md:pl-8 space-y-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <h3 className="text-xl md:text-2xl font-semibold">{item.institution}</h3>
                <time className="text-sm text-muted-foreground" dateTime={item.period}>
                  {item.period}
                </time>
              </div>
              <p className="text-muted-foreground">{item.degree}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
