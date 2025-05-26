"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const vagas = [
  {
    id: 1,
    empresa: "Startup XYZ",
    titulo: "Desenvolvedor Frontend",
    tipo: "Estágio",
    local: "Remoto",
    tags: ["React", "TypeScript", "UI/UX"],
  },
  {
    id: 2,
    empresa: "Tech Solutions",
    titulo: "Product Manager",
    tipo: "CLT",
    local: "São Paulo",
    tags: ["Produto", "Agile", "B2B"],
  },
  {
    id: 3,
    empresa: "Fintech ABC",
    titulo: "Data Scientist",
    tipo: "Estágio",
    local: "Híbrido",
    tags: ["Python", "Machine Learning", "SQL"],
  },
  {
    id: 4,
    empresa: "HealthTech",
    titulo: "UX/UI Designer",
    tipo: "Freelance",
    local: "Remoto",
    tags: ["Figma", "Design Systems", "Pesquisa"],
  },
]

export default function MuralVagas() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Oportunidades</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Mural de Vagas</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Confira as oportunidades de estágio, emprego e freelance em startups e empresas de tecnologia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vagas.map((vaga, index) => (
            <motion.div
              key={vaga.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{vaga.titulo}</CardTitle>
                      <CardDescription className="mt-1">{vaga.empresa}</CardDescription>
                    </div>
                    <Badge variant={vaga.tipo === "Estágio" ? "outline" : "default"}>{vaga.tipo}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-sm text-muted-foreground mb-4">{vaga.local}</div>
                  <div className="flex flex-wrap gap-2">
                    {vaga.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between">
                    Ver detalhes
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg">
            Ver todas as vagas
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
