"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Clientes", href: "#clientes" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="font-heading text-sm font-bold text-primary-foreground">SS</span>
          </div>
          <span className="font-heading text-lg font-bold text-foreground">
            Solution <span className="text-primary">Softwares</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild>
            <a href="#contacto">Solicita una asesoria</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground md:hidden"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button asChild className="w-full">
                <a href="#contacto" onClick={() => setOpen(false)}>
                  Solicita una asesoria
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
