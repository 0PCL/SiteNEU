"use client"

import { Input } from "@/components/ui/input"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Calendar, Clock, User } from "lucide-react"

interface Artigo {
  id: number
  titulo: string
  resumo: string
  conteudo: string
  autor: string
  dataPublicacao: string
  tempoLeitura: string
  categoria: string
  tags: string[]
  imagemCapa: string
  slug: string
}

const artigos: Artigo[] = [
  {
    id: 1,
    titulo: "[Título do Artigo]",
    resumo: "[Resumo do artigo aparece aqui]",
    conteudo: "[Conteúdo completo do artigo]",
    autor: "[Nome do Autor]",
    dataPublicacao: "2024-01-20",
    tempoLeitura: "[X min]",
    categoria: "[Categoria]",
    tags: ["[Tag1]", "[Tag2]", "[Tag3]"],
    imagemCapa: "/placeholder.svg?height=400&width=600&text=Imagem",
    slug: "[slug-do-artigo]",
  },
  {
    id: 2,
    titulo: "[Título do Artigo]",
    resumo: "[Resumo do artigo aparece aqui]",
    conteudo: "[Conteúdo completo do artigo]",
    autor: "[Nome do Autor]",
    dataPublicacao: "2024-01-18",
    tempoLeitura: "[X min]",
    categoria: "[Categoria]",
    tags: ["[Tag1]", "[Tag2]", "[Tag3]"],
    imagemCapa: "/placeholder.svg?height=400&width=600&text=Imagem",
    slug: "[slug-do-artigo]",
  },
  {
    id: 3,
    titulo: "[Título do Artigo]",
    resumo: "[Resumo do artigo aparece aqui]",
    conteudo: "[Conteúdo completo do artigo]",
    autor: "[Nome do Autor]",
    dataPublicacao: "2024-01-15",
    tempoLeitura: "[X min]",
    categoria: "[Categoria]",
    tags: ["[Tag1]", "[Tag2]", "[Tag3]"],
    imagemCapa: "/placeholder.svg?height=400&width=600&text=Imagem",
    slug: "[slug-do-artigo]",
  },
  {
    id: 4,
    titulo: "[Título do Artigo]",
    resumo: "[Resumo do artigo aparece aqui]",
    conteudo: "[Conteúdo completo do artigo]",
    autor: "[Nome do Autor]",
    dataPublicacao: "2024-01-12",
    tempoLeitura: "[X min]",
    categoria: "[Categoria]",
    tags: ["[Tag1]", "[Tag2]", "[Tag3]"],
    imagemCapa: "/placeholder.svg?height=400&width=600&text=Imagem",
    slug: "[slug-do-artigo]",
  },
  {
    id: 5,
    titulo: "[Título do Artigo]",
    resumo: "[Resumo do artigo aparece aqui]",
    conteudo: "[Conteúdo completo do artigo]",
    autor: "[Nome do Autor]",
    dataPublicacao: "2024-01-10",
    tempoLeitura: "[X min]",
    categoria: "[Categoria]",
    tags: ["[Tag1]", "[Tag2]", "[Tag3]"],
    imagemCapa: "/placeholder.svg?height=400&width=600&text=Imagem",
    slug: "[slug-do-artigo]",
  },
  {
    id: 6,
    titulo: "[Título do Artigo]",
    resumo: "[Resumo do artigo aparece aqui]",
    conteudo: "[Conteúdo completo do artigo]",
    autor: "[Nome do Autor]",
    dataPublicacao: "2024-01-08",
    tempoLeitura: "[X min]",
    categoria: "[Categoria]",
    tags: ["[Tag1]", "[Tag2]", "[Tag3]"],
    imagemCapa: "/placeholder.svg?height=400&width=600&text=Imagem",
    slug: "[slug-do-artigo]",
  },
]

export default function Blog() {
  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case "Empreendedorismo":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Investimento":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Tecnologia":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Marketing":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "Networking":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300"
      case "Metodologia":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Blog do{" "}
              <span className="text-primary relative">
                NEU
                <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-2 h-2 md:w-3 md:h-3 bg-[#ffde59] rounded-full"></span>
              </span>
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg leading-7 md:leading-8 text-muted-foreground px-4">
              Conteúdos exclusivos sobre empreendedorismo, inovação e tecnologia. Aprenda com especialistas e
              compartilhe conhecimento com a comunidade empreendedora da USP São Carlos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Artigo em Destaque */}
      {artigos.length > 0 && (
        <section className="py-6 md:py-8 bg-background">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <motion.div
              className="mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 relative">
                Artigo em Destaque
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ffde59] rounded-full"></span>
              </h2>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src={artigos[0].imagemCapa || "/placeholder.svg"}
                        alt={artigos[0].titulo}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={getCategoriaColor(artigos[0].categoria)}>{artigos[0].categoria}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-4 md:p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-lg md:text-2xl mb-2">{artigos[0].titulo}</CardTitle>
                      <CardDescription className="text-sm md:text-base">{artigos[0].resumo}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 mb-4 md:mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs md:text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3 md:h-4 md:w-4" />
                          <span>{artigos[0].autor}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                          <span>{new Date(artigos[0].dataPublicacao).toLocaleDateString("pt-BR")}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3 md:h-4 md:w-4" />
                          <span>{artigos[0].tempoLeitura}</span>
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {artigos[0].tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-0">
                      <Button className="w-full sm:w-auto gap-2 bg-[#1473f3] text-white hover:bg-[#1473f3]/90 h-10 md:h-auto">
                        <span className="text-sm md:text-base">Ler artigo completo</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Lista de Artigos */}
      <section className="py-6 md:py-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <motion.div
            className="mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-foreground relative">
              Todos os Artigos
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ffde59] rounded-full"></span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {artigos.slice(1).map((artigo, index) => (
              <motion.div
                key={artigo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 cursor-pointer group relative overflow-hidden">
                  <span className="absolute top-2 right-2 w-2 h-2 bg-[#ffde59] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></span>

                  <div className="relative h-40 md:h-48">
                    <Image
                      src={artigo.imagemCapa || "/placeholder.svg"}
                      alt={artigo.titulo}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoriaColor(artigo.categoria)}>{artigo.categoria}</Badge>
                    </div>
                  </div>

                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-base md:text-lg line-clamp-2">{artigo.titulo}</CardTitle>
                    <CardDescription className="line-clamp-3 text-sm">{artigo.resumo}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow p-4 md:p-6 pt-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs md:text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3 md:h-4 md:w-4" />
                        <span>{artigo.autor}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 md:h-4 md:w-4" />
                        <span>{artigo.tempoLeitura}</span>
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {artigo.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {artigo.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{artigo.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="p-4 md:p-6 pt-0">
                    <Button
                      variant="outline"
                      className="w-full gap-2 group-hover:bg-[#1473f3] group-hover:text-white group-hover:border-[#1473f3] transition-colors h-10 md:h-auto"
                    >
                      <span className="text-sm md:text-base">Ler mais</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl rounded-3xl bg-primary/5 p-6 md:p-8 lg:p-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground lg:text-4xl relative">
                Não Perca Nenhum Conteúdo
                <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-2 h-2 md:w-3 md:h-3 bg-[#ffde59] rounded-full"></span>
              </h2>
              <p className="mt-4 md:mt-6 text-base md:text-lg leading-7 md:leading-8 text-muted-foreground">
                Inscreva-se em nossa newsletter para receber os novos artigos diretamente em seu e-mail e ficar por
                dentro de todas as novidades do ecossistema empreendedor.
              </p>
              <div className="mt-8 md:mt-10">
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Input placeholder="Seu melhor e-mail" className="h-10 md:h-12 rounded-lg flex-grow" />
                  <Button className="h-10 md:h-12 px-6 md:px-8 bg-[#1473f3] text-white hover:bg-[#1473f3]/90">
                    <span className="text-sm md:text-base">Inscrever-se</span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
