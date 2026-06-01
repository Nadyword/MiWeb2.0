"use client"

import { MessageCircle, Mail, Instagram, Linkedin, Facebook } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const quickLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Clientes", href: "#clientes" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
]

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
]

export function Footer() {
  const [footerRef, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <footer ref={footerRef} className="border-t border-border/40 bg-card/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div
            className={`animate-fade-up delay-0 sm:col-span-2 lg:col-span-1 ${isVisible ? "visible" : ""}`}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="font-heading text-sm font-bold text-primary-foreground">SS</span>
              </div>
              <span className="font-heading text-lg font-bold text-foreground">
                Solution <span className="text-primary">Softwares</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Transformamos negocios con tecnologia inteligente. Desarrollo,
              marketing, automatizacion y mas.
            </p>
          </div>

          {/* Quick links */}
          <div className={`animate-fade-up delay-1 ${isVisible ? "visible" : ""}`}>
            <h4 className="font-heading text-sm font-semibold text-foreground">
              Enlaces
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={`animate-fade-up delay-2 ${isVisible ? "visible" : ""}`}>
            <h4 className="font-heading text-sm font-semibold text-foreground">
              Contacto
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@solutionsoftwares.com"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  contacto@solutionsoftwares.com
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className={`animate-fade-up delay-3 ${isVisible ? "visible" : ""}`}>
            <h4 className="font-heading text-sm font-semibold text-foreground">
              Redes Sociales
            </h4>
            <div className="mt-4 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-primary/40 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`animate-fade-up delay-4 mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground ${isVisible ? "visible" : ""}`}
        >
          <p>
            &copy; {new Date().getFullYear()} Solution Softwares. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
