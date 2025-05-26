"use client"

import { motion } from "framer-motion"
import { Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingSocialLinks() {
  return (
    <motion.div
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex flex-col gap-2 md:gap-3"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Button
          size="icon"
          className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#051d40] hover:bg-[#051d40]/90 shadow-lg border-2 border-white/20"
          onClick={() => window.open("https://linkedin.com/company/neu-usp", "_blank")}
          aria-label="LinkedIn do NEU"
        >
          <Linkedin className="h-4 w-4 md:h-5 md:w-5 text-white" />
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Button
          size="icon"
          className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#051d40] hover:bg-[#051d40]/90 shadow-lg border-2 border-white/20"
          onClick={() => window.open("https://instagram.com/neu.usp", "_blank")}
          aria-label="Instagram do NEU"
        >
          <Instagram className="h-4 w-4 md:h-5 md:w-5 text-white" />
        </Button>
      </motion.div>
    </motion.div>
  )
}
