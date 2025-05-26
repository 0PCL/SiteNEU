"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import ContactModal from "./ContactModal"

export default function Hero() {
  const [imageError, setImageError] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const LogoFallback = () => (
    <div className="text-center p-4 md:p-8">
      <div className="text-white text-4xl md:text-6xl font-bold">NEU</div>
    </div>
  )

  const openContactModal = () => {
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }

  const scrollToEvents = () => {
    const eventsSection = document.getElementById("eventos")
    if (eventsSection) {
      eventsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <>
      <div className="relative overflow-hidden bg-background">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <motion.h1
              className="mt-4 md:mt-6 text-3xl md:text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Núcleo de{" "}
              <span className="text-primary relative">
                Empreendedorismo
                <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-2 h-2 md:w-3 md:h-3 bg-[#ffde59] rounded-full"></span>
              </span>{" "}
              da USP
            </motion.h1>
            <motion.p
              className="mt-4 md:mt-6 text-base md:text-lg leading-7 md:leading-8 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transformando ideias em negócios de impacto. Somos a comunidade que conecta estudantes, professores e o
              ecossistema empreendedor para fomentar a inovação e o empreendedorismo na USP São Carlos.
            </motion.p>
            <motion.div
              className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 md:gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 relative overflow-hidden group"
                onClick={scrollToEvents}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-[#ffde59] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="text-sm md:text-base">Conheça nossas iniciativas</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#ffde59] text-black hover:bg-[#ffde59]/90 font-medium"
                onClick={openContactModal}
              >
                <span className="text-sm md:text-base">Contato</span>
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="mx-auto mt-12 md:mt-16 flex max-w-2xl sm:mt-20 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="relative h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] mx-auto rounded-2xl bg-gradient-to-br from-[#051d40] to-[#1473f3] shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  {!imageError ? (
                    <div className="text-center p-4 md:p-8">
                      <div className="relative h-32 w-32 md:h-48 md:w-48 mx-auto">
                        <Image
                          src="/placeholder.svg?height=192&width=192&text=NEU"
                          alt="NEU Logo"
                          fill
                          className="object-contain"
                          onError={() => setImageError(true)}
                        />
                      </div>
                    </div>
                  ) : (
                    <LogoFallback />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  )
}
