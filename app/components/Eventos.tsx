"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

const proximosEventos = [
  {
    id: 1,
    titulo: "",
    descricao: "",
    data: "",
    horario: "",
    local: "",
    categoria: "workshop",
  },
  {
    id: 2,
    titulo: "",
    descricao: "",
    data: "",
    horario: "",
    local: "",
    categoria: "palestra",
  },
  {
    id: 3,
    titulo: "",
    descricao: "",
    data: "",
    horario: "",
    local: "",
    categoria: "hackathon",
  },
]

export default function Eventos() {
  const [activeTab, setActiveTab] = useState("todos")

  const filteredEventos =
    activeTab === "todos" ? proximosEventos : proximosEventos.filter((evento) => evento.categoria === activeTab)

  return (
    <section id="eventos" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary relative">
            Eventos
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ffde59] rounded-full"></span>
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Próximos eventos e atividades
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Participe dos nossos eventos e atividades para desenvolver habilidades empreendedoras, expandir sua rede de
            contatos e conhecer oportunidades no ecossistema de inovação.
          </p>
        </motion.div>

        <Tabs defaultValue="todos" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="workshop">Workshops</TabsTrigger>
              <TabsTrigger value="palestra">Palestras</TabsTrigger>
              <TabsTrigger value="hackathon">Hackathons</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEventos.map((evento, index) => (
                <motion.div
                  key={evento.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow relative group">
                    <span className="absolute top-2 right-2 w-2 h-2 bg-[#ffde59] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <CardHeader>
                      <div className="text-sm font-medium text-primary mb-1 uppercase relative">
                        {evento.categoria}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffde59] transition-all duration-300 group-hover:w-full"></span>
                      </div>
                      <CardTitle>{evento.titulo}</CardTitle>
                      <CardDescription>{evento.descricao}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{evento.data}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Clock className="h-4 w-4" />
                        <span>{evento.horario}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{evento.local}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Inscrever-se
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Ver todos os eventos
          </Button>
        </div>
      </div>
    </section>
  )
}
