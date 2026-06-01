"use client"

import { ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { FloatingOrbs } from "@/components/animated-bg"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Desarrollo Web",
    description:
      "Plataforma de comercio electronico con integracion de pagos, gestion de inventario y panel de administracion personalizado.",
    results: "+200% en ventas online",
    gradient: "from-primary/20 to-accent/10",
  },
  {
    title: "CRM Automatizado",
    category: "Automatizacion",
    description:
      "Sistema CRM personalizado con flujos automatizados de seguimiento de leads, reportes en tiempo real y dashboard analitico.",
    results: "3x mas leads convertidos",
    gradient: "from-accent/20 to-primary/10",
  },
  {
    title: "Chatbot WhatsApp",
    category: "Chatbots",
    description:
      "Bot inteligente para WhatsApp Business con procesamiento de lenguaje natural, atencion 24/7 y escalamiento a agentes humanos.",
    results: "-70% tiempo de respuesta",
    gradient: "from-primary/15 to-accent/15",
  },
]

export function Portfolio() {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="portafolio" className="relative overflow-hidden py-24 lg:py-32">
      {/* Floating orbs background */}
      <FloatingOrbs count={4} />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div ref={headerRef} className="mx-auto max-w-2xl text-center">
          <p
            className={`animate-fade-up delay-0 text-sm font-semibold uppercase tracking-widest text-primary ${headerVisible ? "visible" : ""}`}
          >
            Casos de exito
          </p>
          <h2
            className={`animate-fade-up delay-1 mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl ${headerVisible ? "visible" : ""}`}
          >
            Proyectos que hablan por si solos
          </h2>
          <p
            className={`animate-fade-up delay-2 mt-4 text-lg leading-relaxed text-muted-foreground ${headerVisible ? "visible" : ""}`}
          >
            Cada proyecto es una historia de transformacion. Descubre como
            hemos ayudado a empresas como la tuya.
          </p>
        </div>

        {/* Projects */}
        <div ref={gridRef} className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`animate-fade-up delay-${i + 1} group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-card hover:shadow-xl hover:shadow-primary/5 ${gridVisible ? "visible" : ""}`}
            >
              {/* Gradient header */}
              <div
                className={`flex h-48 items-end bg-gradient-to-br ${project.gradient} p-6 transition-all duration-500 group-hover:h-52`}
              >
                <span className="rounded-full border border-primary/30 bg-background/80 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4">
                  <span className="text-sm font-semibold text-accent">
                    {project.results}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
