"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import ContactModal from "./ContactModal"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Mural de Vagas", href: "/vagas" },
    { name: "InoStart", href: "/inostart" },
    { name: "Blog", href: "/blog" },
    { name: "Sobre Nós", href: "/sobre" },
  ]

  const LogoFallback = () => (
    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-sm md:text-lg">
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
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#051d40]/95 backdrop-blur-md shadow-sm" : "bg-[#051d40]"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between p-3 md:p-4 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="sr-only">Núcleo de Empreendedorismo da USP São Carlos</span>
              {!logoError ? (
                <div className="h-8 w-8 md:h-10 md:w-10 relative">
                  <Image
                    src={
                      theme === "dark"
                        ? "/placeholder.svg?height=40&width=40&text=NEU"
                        : "/placeholder.svg?height=40&width=40&text=NEU"
                    }
                    alt="NEU Logo"
                    fill
                    className="object-contain"
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                <LogoFallback />
              )}
              <span className="font-bold text-sm md:text-lg hidden sm:inline-block text-white">NEU-USP São Carlos</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  item.name === "Sobre Nós" ? "mr-8" : ""
                } ${pathname === item.href ? "text-white" : "text-white/80 hover:text-white"}`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#ffde59] transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <Button
              className="hidden md:inline-flex bg-[#ffde59] text-black hover:bg-[#ffde59]/90 font-medium"
              onClick={openContactModal}
            >
              Contato
            </Button>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  aria-label="Menu"
                  className="text-white hover:bg-white/10 h-8 w-8 p-0"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <div className="flex flex-col gap-6 mt-10">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium transition-colors py-2 ${
                        pathname === item.href ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    className="mt-4 w-full bg-[#ffde59] text-black hover:bg-[#ffde59]/90 font-medium"
                    onClick={openContactModal}
                  >
                    Contato
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  )
}
