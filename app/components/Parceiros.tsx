"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const parceiros = [
  { id: 1, nome: "USP São Carlos", logo: "/placeholder.svg?height=80&width=160&text=USP" },
  { id: 2, nome: "Empresa A", logo: "/placeholder.svg?height=80&width=160&text=A" },
  { id: 3, nome: "Empresa B", logo: "/placeholder.svg?height=80&width=160&text=B" },
  { id: 4, nome: "Empresa C", logo: "/placeholder.svg?height=80&width=160&text=C" },
  { id: 5, nome: "Empresa D", logo: "/placeholder.svg?height=80&width=160&text=D" },
  { id: 6, nome: "Empresa E", logo: "/placeholder.svg?height=80&width=160&text=E" },
]

export default function Parceiros() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({})

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }))
  }

  const LogoFallback = ({ nome }: { nome: string }) => (
    <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm font-medium">
      {nome}
    </div>
  )

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary relative">
            Parceiros
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ffde59] rounded-full"></span>
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Quem apoia o NEU-USP São Carlos
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Contamos com o apoio de empresas e instituições que acreditam no potencial empreendedor dos estudantes da
            USP São Carlos.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          {parceiros.map((parceiro, index) => (
            <motion.div
              key={parceiro.id}
              className="col-span-1 flex justify-center relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ffde59] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              {!imageErrors[parceiro.id] ? (
                <Image
                  src={parceiro.logo || "/placeholder.svg"}
                  alt={parceiro.nome}
                  width={160}
                  height={80}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  onError={() => handleImageError(parceiro.id)}
                />
              ) : (
                <LogoFallback nome={parceiro.nome} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
