"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const iniciativas = [
  {
    id: 1,
    titulo: "Programa de Pré-aceleração",
    descricao: "Um programa de 8 semanas para validar ideias e desenvolver modelos de negócio.",
    imagem: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    titulo: "Fundo de Investimento NEU",
    descricao: "Investimento inicial para startups promissoras fundadas por alunos da USP.",
    imagem: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    titulo: "Mentoria para Startups",
    descricao: "Conectamos empreendedores com mentores experientes do mercado.",
    imagem: "/placeholder.svg?height=400&width=600",
  },
]

export default function Iniciativas() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Iniciativas</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nossos programas de apoio ao empreendedorismo
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Desenvolvemos diversas iniciativas para apoiar empreendedores em diferentes estágios, desde a ideação até a
            captação de investimentos.
          </p>
        </motion.div>

        <div className="space-y-20">
          {iniciativas.map((iniciativa, index) => (
            <motion.div
              key={iniciativa.id}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="lg:w-1/2">
                <Image
                  src={iniciativa.imagem || "/placeholder.svg"}
                  alt={iniciativa.titulo}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-foreground mb-4">{iniciativa.titulo}</h3>
                <p className="text-lg text-muted-foreground mb-6">{iniciativa.descricao}</p>
                <Button>Saiba mais</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
