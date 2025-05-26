"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactModal from "./ContactModal"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [logoError, setLogoError] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const LogoFallback = () => (
    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-sm">
      NE
    </div>
  )

  const openContactModal = () => {
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }

  return (
    <>
      <footer className="bg-background border-t border-border">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-5">
            <div className="col-span-1 md:col-span-3 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                {!logoError ? (
                  <div className="h-10 w-10 relative">
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=NEU"
                      alt="NEU Logo"
                      fill
                      className="object-contain"
                      onError={() => setLogoError(true)}
                    />
                  </div>
                ) : (
                  <LogoFallback />
                )}
                <span className="font-bold text-lg">NEU-USP São Carlos</span>
              </div>
              <p className="text-muted-foreground max-w-md">
                O Núcleo de Empreendedorismo da USP São Carlos é uma organização estudantil sem fins lucrativos que visa
                fomentar a cultura empreendedora dentro do campus de São Carlos da Universidade de São Paulo.
              </p>
              <div className="flex space-x-6 mt-6">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Navegação</h3>
              <ul className="mt-4 space-y-3">
                {["Início", "Mural de Vagas", "InoStart", "Blog", "Sobre Nós"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Programas</h3>
              <ul className="mt-4 space-y-3">
                {["Pré-aceleração", "Hackathons", "Workshops", "Palestras"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Contato</h3>
              <ul className="space-y-3 mb-6">
                <li className="text-sm text-muted-foreground">neu@eesc.usp.br</li>
                <li className="text-sm text-muted-foreground">Av. Trabalhador São-carlense, 400 - São Carlos, SP</li>
              </ul>
              <Button className="bg-[#ffde59] text-black hover:bg-[#ffde59]/90 font-medium" onClick={openContactModal}>
                Fale Conosco
              </Button>
            </div>
          </div>
          <div className="mt-16 border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Núcleo de Empreendedorismo da USP São Carlos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  )
}
