"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 py-8 px-4 md:px-8 lg:px-12" role="contentinfo">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-sm text-muted-foreground">
            <span>&copy; {currentYear} Saksham Gupta. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" aria-label="love" />
            <span>and lots of coffee</span>
          </div>

          <div className="text-sm text-muted-foreground">
            <span>Built with Next.js & Framer Motion</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
