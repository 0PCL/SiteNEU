"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, Building, DollarSign, Search, ExternalLink, X } from "lucide-react"

interface Vaga {
  id: number
  titulo: string
  empresa: string
  tipo: "Estágio" | "CLT"
  modalidade: "Presencial" | "Remoto" | "Híbrido"
  localizacao: string
  salario?: string
  area: string
  tags: string[]
  descricaoBreve: string
  descricaoCompleta: string
  requisitos: string[]
  beneficios: string[]
  linkInscricao: string
  dataPublicacao: string
  prazoInscricao: string
}

const vagas: Vaga[] = [
  {
    id: 1,
    titulo: "Desenvolvedor Frontend React",
    empresa: "TechStart Inovação",
    tipo: "Estágio",
    modalidade: "Híbrido",
    localizacao: "São Carlos, SP",
    salario: "R$ 1.500 - R$ 2.000",
    area: "Tecnologia",
    tags: ["React", "TypeScript", "JavaScript", "CSS"],
    descricaoBreve: "Oportunidade para desenvolver interfaces modernas e responsivas em uma startup de tecnologia.",
    descricaoCompleta:
      "Estamos buscando um desenvolvedor frontend para integrar nossa equipe de desenvolvimento. Você trabalhará na criação de interfaces modernas e responsivas, utilizando as melhores práticas de desenvolvimento. É uma excelente oportunidade para crescer profissionalmente em um ambiente inovador e dinâmico.",
    requisitos: [
      "Conhecimento em React e JavaScript",
      "Experiência com HTML5 e CSS3",
      "Conhecimento básico em Git",
      "Cursando Ciência da Computação, Engenharia ou áreas afins",
    ],
    beneficios: [
      "Vale alimentação",
      "Vale transporte",
      "Ambiente jovem e inovador",
      "Flexibilidade de horários",
      "Mentoria técnica",
    ],
    linkInscricao: "https://exemplo.com/vaga1",
    dataPublicacao: "2024-01-15",
    prazoInscricao: "2024-02-15",
  },
  {
    id: 2,
    titulo: "Product Manager",
    empresa: "FinTech Solutions",
    tipo: "CLT",
    modalidade: "Remoto",
    localizacao: "São Paulo, SP",
    salario: "R$ 8.000 - R$ 12.000",
    area: "Produto",
    tags: ["Product Management", "Agile", "Scrum", "Analytics"],
    descricaoBreve: "Lidere o desenvolvimento de produtos financeiros inovadores em uma fintech em crescimento.",
    descricaoCompleta:
      "Buscamos um Product Manager experiente para liderar o desenvolvimento de nossos produtos financeiros. Você será responsável por definir a estratégia de produto, trabalhar com equipes multidisciplinares e garantir que entregamos valor real aos nossos clientes. Experiência prévia em fintech é um diferencial.",
    requisitos: [
      "3+ anos de experiência em Product Management",
      "Experiência com metodologias ágeis",
      "Conhecimento em analytics e métricas de produto",
      "Formação superior completa",
      "Inglês intermediário",
    ],
    beneficios: [
      "Salário competitivo",
      "Stock options",
      "Plano de saúde e odontológico",
      "Trabalho 100% remoto",
      "Budget para cursos e eventos",
    ],
    linkInscricao: "https://exemplo.com/vaga2",
    dataPublicacao: "2024-01-10",
    prazoInscricao: "2024-02-10",
  },
  {
    id: 3,
    titulo: "Data Scientist",
    empresa: "AI Analytics Corp",
    tipo: "CLT",
    modalidade: "Presencial",
    localizacao: "Campinas, SP",
    salario: "R$ 6.000 - R$ 10.000",
    area: "Data Science",
    tags: ["Python", "Machine Learning", "SQL", "TensorFlow"],
    descricaoBreve: "Desenvolva modelos de machine learning para resolver problemas complexos de negócio.",
    descricaoCompleta:
      "Procuramos um Data Scientist para integrar nossa equipe de analytics. Você trabalhará no desenvolvimento de modelos preditivos, análise de grandes volumes de dados e criação de insights que direcionam decisões estratégicas. É uma oportunidade única para trabalhar com tecnologias de ponta em projetos desafiadores.",
    requisitos: [
      "Experiência com Python e bibliotecas de ML",
      "Conhecimento em SQL e bancos de dados",
      "Experiência com TensorFlow ou PyTorch",
      "Mestrado ou PhD em área quantitativa",
      "Portfolio com projetos de ML",
    ],
    beneficios: [
      "Remuneração competitiva",
      "Flexibilidade de projetos",
      "Acesso a GPUs para treinamento",
      "Ambiente de pesquisa",
      "Publicação de papers",
    ],
    linkInscricao: "https://exemplo.com/vaga3",
    dataPublicacao: "2024-01-12",
    prazoInscricao: "2024-02-20",
  },
  {
    id: 4,
    titulo: "UX/UI Designer",
    empresa: "Design Studio",
    tipo: "Estágio",
    modalidade: "Remoto",
    localizacao: "Nacional",
    salario: "R$ 1.200 - R$ 1.800",
    area: "Design",
    tags: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    descricaoBreve: "Crie experiências digitais incríveis em projetos de design inovadores.",
    descricaoCompleta:
      "Estamos buscando um estagiário de UX/UI Design para integrar nossa equipe criativa. Você trabalhará na criação de interfaces, prototipagem e pesquisa com usuários. É uma excelente oportunidade para construir um portfolio diversificado e aprender com profissionais experientes.",
    requisitos: [
      "Portfolio com projetos de UI/UX",
      "Proficiência em Figma",
      "Conhecimento em Design System",
      "Experiência com prototipagem",
      "Cursando Design, Publicidade ou áreas afins",
    ],
    beneficios: [
      "Mentoria especializada",
      "Projetos diversificados",
      "Vale alimentação",
      "Trabalho remoto",
      "Networking com outros designers",
    ],
    linkInscricao: "https://exemplo.com/vaga4",
    dataPublicacao: "2024-01-08",
    prazoInscricao: "2024-02-28",
  },
  {
    id: 5,
    titulo: "Desenvolvedor Mobile Flutter",
    empresa: "AppTech Startup",
    tipo: "Estágio",
    modalidade: "Híbrido",
    localizacao: "São Carlos, SP",
    salario: "R$ 1.200 - R$ 1.800",
    area: "Tecnologia",
    tags: ["Flutter", "Dart", "Mobile", "Firebase"],
    descricaoBreve: "Desenvolva aplicativos móveis inovadores usando Flutter em uma startup em crescimento.",
    descricaoCompleta:
      "Oportunidade para estagiar em desenvolvimento mobile com Flutter. Você participará do desenvolvimento de aplicativos inovadores, trabalhando com uma equipe experiente e aprendendo as melhores práticas de desenvolvimento mobile. Ideal para quem quer iniciar a carreira em mobile development.",
    requisitos: [
      "Conhecimento básico em Flutter/Dart",
      "Experiência com programação orientada a objetos",
      "Conhecimento básico em Git",
      "Cursando cursos de tecnologia",
      "Interesse em desenvolvimento mobile",
    ],
    beneficios: [
      "Mentoria especializada",
      "Vale alimentação",
      "Vale transporte",
      "Certificações gratuitas",
      "Ambiente startup",
    ],
    linkInscricao: "https://exemplo.com/vaga5",
    dataPublicacao: "2024-01-14",
    prazoInscricao: "2024-02-25",
  },
  {
    id: 6,
    titulo: "Marketing Digital",
    empresa: "Growth Marketing Co",
    tipo: "CLT",
    modalidade: "Presencial",
    localizacao: "Ribeirão Preto, SP",
    salario: "R$ 4.000 - R$ 6.000",
    area: "Marketing",
    tags: ["Google Ads", "Facebook Ads", "SEO", "Analytics"],
    descricaoBreve: "Gerencie campanhas de marketing digital para clientes de diversos segmentos.",
    descricaoCompleta:
      "Procuramos um especialista em marketing digital para gerenciar campanhas de performance para nossos clientes. Você será responsável por criar estratégias, otimizar campanhas e gerar relatórios de performance. Experiência com Google Ads e Facebook Ads é essencial.",
    requisitos: [
      "2+ anos em marketing digital",
      "Certificações Google Ads",
      "Experiência com Facebook Ads",
      "Conhecimento em Google Analytics",
      "Formação em Marketing ou áreas afins",
    ],
    beneficios: [
      "Plano de saúde",
      "Vale refeição",
      "Participação nos lucros",
      "Treinamentos especializados",
      "Ambiente colaborativo",
    ],
    linkInscricao: "https://exemplo.com/vaga6",
    dataPublicacao: "2024-01-11",
    prazoInscricao: "2024-02-18",
  },
]

export default function MuralVagas() {
  const [filtros, setFiltros] = useState({
    busca: "",
    tipo: "Todos os tipos",
    modalidade: "Todas modalidades",
    area: "Todas as áreas",
  })

  const [vagaSelecionada, setVagaSelecionada] = useState<Vaga | null>(null)

  const areas = [...new Set(vagas.map((vaga) => vaga.area))]
  const tipos = [...new Set(vagas.map((vaga) => vaga.tipo))]
  const modalidades = [...new Set(vagas.map((vaga) => vaga.modalidade))]

  const vagasFiltradas = vagas.filter((vaga) => {
    return (
      (filtros.busca === "" ||
        vaga.titulo.toLowerCase().includes(filtros.busca.toLowerCase()) ||
        vaga.empresa.toLowerCase().includes(filtros.busca.toLowerCase()) ||
        vaga.tags.some((tag) => tag.toLowerCase().includes(filtros.busca.toLowerCase()))) &&
      (filtros.tipo === "Todos os tipos" || vaga.tipo === filtros.tipo) &&
      (filtros.modalidade === "Todas modalidades" || vaga.modalidade === filtros.modalidade) &&
      (filtros.area === "Todas as áreas" || vaga.area === filtros.area)
    )
  })

  const abrirModal = (vaga: Vaga) => {
    setVagaSelecionada(vaga)
  }

  const fecharModal = () => {
    setVagaSelecionada(null)
  }

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "Estágio":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "CLT":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getModalidadeColor = (modalidade: string) => {
    switch (modalidade) {
      case "Remoto":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300"
      case "Presencial":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "Híbrido":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
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
              Mural de{" "}
              <span className="text-primary relative">
                Vagas
                <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-2 h-2 md:w-3 md:h-3 bg-[#ffde59] rounded-full"></span>
              </span>
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg leading-7 md:leading-8 text-muted-foreground px-4">
              Descubra oportunidades incríveis em startups e empresas de tecnologia. Encontre a vaga perfeita para
              impulsionar sua carreira no ecossistema empreendedor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-6 md:py-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <motion.div
            className="bg-background rounded-2xl p-4 md:p-6 shadow-lg border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-lg font-semibold text-foreground mb-4 relative">
              Filtrar Vagas
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ffde59] rounded-full"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Buscar por cargo, empresa..."
                    value={filtros.busca}
                    onChange={(e) => setFiltros({ ...filtros, busca: e.target.value })}
                    className="pl-10 h-10 md:h-auto"
                  />
                </div>
              </div>
              <Select value={filtros.tipo} onValueChange={(value) => setFiltros({ ...filtros, tipo: value })}>
                <SelectTrigger className="h-10 md:h-auto">
                  <SelectValue placeholder="Tipo de vaga" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Todos os tipos">Todos os tipos</SelectItem>
                  {tipos.map((tipo) => (
                    <SelectItem key={tipo} value={tipo}>
                      {tipo}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={filtros.modalidade}
                onValueChange={(value) => setFiltros({ ...filtros, modalidade: value })}
              >
                <SelectTrigger className="h-10 md:h-auto">
                  <SelectValue placeholder="Modalidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Todas modalidades">Todas modalidades</SelectItem>
                  {modalidades.map((modalidade) => (
                    <SelectItem key={modalidade} value={modalidade}>
                      {modalidade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={filtros.area} onValueChange={(value) => setFiltros({ ...filtros, area: value })}>
                <SelectTrigger className="h-10 md:h-auto">
                  <SelectValue placeholder="Área" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Todas as áreas">Todas as áreas</SelectItem>
                  {areas.map((area) => (
                    <SelectItem key={area} value={area}>
                      {area}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <p className="text-sm text-muted-foreground">
                {vagasFiltradas.length} vaga{vagasFiltradas.length !== 1 ? "s" : ""} encontrada
                {vagasFiltradas.length !== 1 ? "s" : ""}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setFiltros({
                    busca: "",
                    tipo: "Todos os tipos",
                    modalidade: "Todas modalidades",
                    area: "Todas as áreas",
                  })
                }
                className="w-full sm:w-auto"
              >
                Limpar filtros
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lista de Vagas */}
      <section className="py-6 md:py-8 bg-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <AnimatePresence>
              {vagasFiltradas.map((vaga, index) => (
                <motion.div
                  key={vaga.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className=""
                >
                  <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 cursor-pointer group relative">
                    <span className="absolute top-2 right-2 w-2 h-2 bg-[#ffde59] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                    <CardHeader onClick={() => abrirModal(vaga)} className="p-4 md:p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex gap-2 flex-wrap">
                          <Badge className={getTipoColor(vaga.tipo)}>{vaga.tipo}</Badge>
                          <Badge className={getModalidadeColor(vaga.modalidade)}>{vaga.modalidade}</Badge>
                        </div>
                      </div>
                      <CardTitle className="text-lg md:text-xl">{vaga.titulo}</CardTitle>
                      <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Building className="h-4 w-4 flex-shrink-0" />
                          <span className="truncate">{vaga.empresa}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span className="truncate">{vaga.localizacao}</span>
                        </span>
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-grow p-4 md:p-6 pt-0">
                      <p className="text-muted-foreground mb-4 text-sm md:text-base line-clamp-3">
                        {vaga.descricaoBreve}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-4">
                        {vaga.salario && (
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4 flex-shrink-0" />
                            <span className="truncate">{vaga.salario}</span>
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4 flex-shrink-0" />
                          <span>{vaga.area}</span>
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {vaga.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {vaga.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{vaga.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>

                    <CardFooter className="p-4 md:p-6 pt-0">
                      <Button
                        className="w-full gap-2 bg-[#1473f3] text-white hover:bg-[#1473f3]/90 h-10 md:h-auto"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(vaga.linkInscricao, "_blank")
                        }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm md:text-base">Candidatar-se</span>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {vagasFiltradas.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground text-base md:text-lg px-4">
                Nenhuma vaga encontrada com os filtros selecionados.
              </p>
              <Button
                variant="outline"
                className="mt-4 w-full sm:w-auto"
                onClick={() =>
                  setFiltros({
                    busca: "",
                    tipo: "Todos os tipos",
                    modalidade: "Todas modalidades",
                    area: "Todas as áreas",
                  })
                }
              >
                Limpar filtros
              </Button>
            </motion.div>
          )}
        </div>
      </section>
      {/* Modal de Detalhes da Vaga */}
      <AnimatePresence>
        {vagaSelecionada && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={fecharModal}
          >
            <motion.div
              className="bg-background rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 md:p-6 border-b border-border">
                <div className="flex justify-between items-start">
                  <div className="flex-1 mr-4">
                    <div className="flex gap-2 mb-3 flex-wrap">
                      <Badge className={getTipoColor(vagaSelecionada.tipo)}>{vagaSelecionada.tipo}</Badge>
                      <Badge className={getModalidadeColor(vagaSelecionada.modalidade)}>
                        {vagaSelecionada.modalidade}
                      </Badge>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">{vagaSelecionada.titulo}</h2>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-muted-foreground text-sm">
                      <span className="flex items-center gap-1">
                        <Building className="h-4 w-4 flex-shrink-0" />
                        <span>{vagaSelecionada.empresa}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span>{vagaSelecionada.localizacao}</span>
                      </span>
                      {vagaSelecionada.salario && (
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4 flex-shrink-0" />
                          <span>{vagaSelecionada.salario}</span>
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4 flex-shrink-0" />
                        <span>{vagaSelecionada.area}</span>
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={fecharModal} className="flex-shrink-0">
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 relative">
                      Sobre a Vaga
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ffde59] rounded-full"></span>
                    </h3>
                    <p className="text-muted-foreground mb-6 text-sm md:text-base">
                      {vagaSelecionada.descricaoCompleta}
                    </p>

                    <h3 className="text-lg font-semibold mb-3 relative">
                      Requisitos
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ffde59] rounded-full"></span>
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {vagaSelecionada.requisitos.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm md:text-base">
                          <span className="w-2 h-2 bg-[#ffde59] rounded-full mt-2 flex-shrink-0"></span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-lg font-semibold mb-3 relative">
                      Tecnologias
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ffde59] rounded-full"></span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {vagaSelecionada.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 relative">
                      Benefícios
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ffde59] rounded-full"></span>
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {vagaSelecionada.beneficios.map((beneficio, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm md:text-base">
                          <span className="w-2 h-2 bg-[#ffde59] rounded-full mt-2 flex-shrink-0"></span>
                          <span>{beneficio}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-4 mb-6">
                      <h3 className="text-lg font-semibold mb-3 relative">
                        Informações Adicionais
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ffde59] rounded-full"></span>
                      </h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>
                          <strong>Área:</strong> {vagaSelecionada.area}
                        </p>
                        <p>
                          <strong>Publicado em:</strong>{" "}
                          {new Date(vagaSelecionada.dataPublicacao).toLocaleDateString("pt-BR")}
                        </p>
                        <p>
                          <strong>Prazo para inscrição:</strong>{" "}
                          {new Date(vagaSelecionada.prazoInscricao).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                    </div>

                    <Button
                      className="w-full gap-2 bg-[#1473f3] text-white hover:bg-[#1473f3]/90 h-12 md:h-auto"
                      size="lg"
                      onClick={() => window.open(vagaSelecionada.linkInscricao, "_blank")}
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span className="text-sm md:text-base">Candidatar-se à Vaga</span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
