"use client"

import { motion } from "framer-motion"
import { Lightbulb, Users, Target, Rocket } from "lucide-react"

const features = [
  {
    name: "Inovação",
    description: "Estimulamos o pensamento inovador e a busca por soluções criativas para problemas reais.",
    icon: Lightbulb,
  },
  {
    name: "Comunidade",
    description: "Construímos uma rede de apoio entre estudantes, professores e profissionais do mercado.",
    icon: Users,
  },
  {
    name: "Impacto",
    description: "Buscamos gerar impacto positivo na sociedade através do empreendedorismo.",
    icon: Target,
  },
  {
    name: "Aceleração",
    description: "Oferecemos programas de aceleração para transformar ideias em negócios viáveis.",
    icon: Rocket,
  },
]

export default function QuemSomos() {
  return (
    <section className="py-24 bg-background" id="quem-somos">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary relative">
            Quem Somos
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ffde59] rounded-full"></span>
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Fomentando o ecossistema empreendedor na USP São Carlos
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            O Núcleo de Empreendedorismo da USP São Carlos (NEU) é uma organização estudantil sem fins lucrativos que
            visa fomentar a cultura empreendedora dentro do campus de São Carlos da Universidade de São Paulo. O NEU já
            impactou centenas de estudantes através de eventos, programas de aceleração e mentorias.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="relative pl-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary relative">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#ffde59] rounded-full"></span>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
