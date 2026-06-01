"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ParticleNetwork } from "@/components/animated-bg"

export function CtaSection() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="contacto" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={sectionRef}
          className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/80 px-8 py-16 text-center backdrop-blur-sm sm:px-16 lg:py-24"
        >
          {/* Particle network inside the card */}
          <ParticleNetwork particleCount={35} color="16,185,129" />

          {/* Decorative glows */}
          <div className="pointer-events-none absolute inset-0">
            <div className="animate-pulse-glow absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[100px]" />
            <div className="animate-pulse-glow-slow absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]" />
          </div>

          <div className="relative">
            <p
              className={`animate-blur-in delay-0 text-sm font-semibold uppercase tracking-widest text-primary ${isVisible ? "visible" : ""}`}
            >
              Da el primer paso
            </p>
            <h2
              className={`animate-blur-in delay-1 mx-auto mt-4 max-w-2xl font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl ${isVisible ? "visible" : ""}`}
            >
              <span className="text-balance">Digitaliza tu empresa hoy</span>
            </h2>
            <p
              className={`animate-blur-in delay-2 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground ${isVisible ? "visible" : ""}`}
            >
              Agenda una asesoria gratuita y descubre como la tecnologia puede
              llevar tu negocio al siguiente nivel.
            </p>
            <div
              className={`animate-fade-up delay-3 mt-10 flex flex-wrap items-center justify-center gap-4 ${isVisible ? "visible" : ""}`}
            >
              <Button size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25" asChild>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  Contactar por WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="transition-all duration-300 hover:scale-105" asChild>
                <a href="mailto:contacto@solutionsoftwares.com">
                  Enviar un correo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
