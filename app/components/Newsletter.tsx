"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
})

export default function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulação de envio
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSuccess(true)
      form.reset()
    }, 1500)
  }

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl rounded-3xl bg-primary/5 p-8 sm:p-10 lg:p-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Fique por dentro das novidades
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Inscreva-se em nossa newsletter para receber atualizações sobre eventos, oportunidades e conteúdos
              exclusivos sobre empreendedorismo.
            </p>
            <div className="mt-10">
              {isSuccess ? (
                <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 text-green-700 dark:text-green-300">
                  Obrigado por se inscrever! Em breve você receberá nossas novidades.
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex-grow">
                          <FormControl>
                            <Input placeholder="Seu melhor e-mail" className="h-12 rounded-lg" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="h-12 px-8" disabled={isSubmitting}>
                      {isSubmitting ? "Inscrevendo..." : "Inscrever-se"}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
