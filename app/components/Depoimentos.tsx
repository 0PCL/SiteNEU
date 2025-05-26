"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight } from "lucide-react"

const depoimentos = [
  {
    id: 1,
    nome: "Ana Silva",
    cargo: "Fundadora da TechEdu",
    avatar: "/placeholder.svg?height=100&width=100",
    texto:
      "O NEU foi fundamental para o desenvolvimento da minha startup. Através do programa de pré-aceleração, consegui validar meu modelo de negócio e fazer as primeiras vendas.",
  },
  {
    id: 2,
    nome: "Pedro Santos",
    cargo: "CEO da GreenSolutions",
    avatar: "/placeholder.svg?height=100&width=100",
    texto:
      "Participar do Hackathon do NEU me permitiu conhecer meus co-fundadores e desenvolver o MVP da nossa solução. Hoje, 3 anos depois, temos uma empresa com 20 funcionários.",
  },
  {
    id: 3,
    nome: "Juliana Costa",
    cargo: "CTO da HealthTech",
    avatar: "/placeholder.svg?height=100&width=100",
    texto:
      "As mentorias do NEU me ajudaram a superar os desafios técnicos do meu negócio. A rede de contatos que construí foi essencial para conseguirmos nosso primeiro investimento.",
  },
]

export default function Depoimentos() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % depoimentos.length)
  }

  const prev = () => {
    setCurrent((current - 1 + depoimentos.length) % depoimentos.length)
  }

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Depoimentos</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            O que dizem nossos participantes
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="mx-auto"
            >
              <Card className="border-none shadow-lg bg-background">
                <CardContent className="pt-10 pb-10 px-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6">
                      <Avatar className="h-20 w-20 border-4 border-primary/20">
                        <AvatarImage
                          src={depoimentos[current].avatar || "/placeholder.svg"}
                          alt={depoimentos[current].nome}
                        />
                        <AvatarFallback>{depoimentos[current].nome.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </div>
                    <blockquote className="text-xl italic text-foreground mb-6">
                      "{depoimentos[current].texto}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-foreground">{depoimentos[current].nome}</div>
                      <div className="text-sm text-muted-foreground">{depoimentos[current].cargo}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-background rounded-full p-3 shadow-lg"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-background rounded-full p-3 shadow-lg"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {depoimentos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`mx-1 h-2 w-2 rounded-full ${current === index ? "bg-primary" : "bg-primary/30"}`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
