import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"
import FloatingSocialLinks from "./components/FloatingSocialLinks"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Núcleo de Empreendedorismo da USP",
  description: "Fomentando o espírito empreendedor na comunidade universitária",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <FloatingSocialLinks />
      </body>
    </html>
  )
}
