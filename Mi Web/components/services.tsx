"use client"

import { Code2, BarChart3, Bot, Workflow, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { AnimatedGrid } from "@/components/animated-bg"

const services = [
  {
    icon: Code2,
    title: "Desarrollo de Software",
    description:
      "Creamos aplicaciones web y moviles a medida que se adaptan a las necesidades especificas de tu negocio, con las tecnologias mas modernas.",
  },
  {
    icon: BarChart3,
    title: "Marketing Digital",
    description:
      "Estrategias basadas en datos para aumentar tu visibilidad, generar leads cualificados y maximizar el retorno de tu inversion publicitaria.",
  },
  {
    icon: Workflow,
    title: "Automatizaciones Inteligentes",
    description:
      "Optimiza tus procesos internos con automatizaciones que reducen errores, ahorran tiempo y permiten a tu equipo enfocarse en lo importante.",
  },
  {
    icon: Bot,
    title: "Chatbots y CRM",
    description:
      "Integra chatbots inteligentes con WhatsApp Business y CRM para mejorar la atencion al cliente y aumentar las conversiones de tu negocio.",
  },
]

export function Services() {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="servicios" className="relative overflow-hidden py-24 lg:py-32">
      {/* Animated grid background */}
      <AnimatedGrid color="0,163,255" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div ref={headerRef} className="mx-auto max-w-2xl text-center">
          <p
            className={`animate-fade-up delay-0 text-sm font-semibold uppercase tracking-widest text-primary ${headerVisible ? "visible" : ""}`}
          >
            Lo que hacemos
          </p>
          <h2
            className={`animate-fade-up delay-1 mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl ${headerVisible ? "visible" : ""}`}
          >
            Servicios que impulsan tu crecimiento
          </h2>
          <p
            className={`animate-fade-up delay-2 mt-4 text-lg leading-relaxed text-muted-foreground ${headerVisible ? "visible" : ""}`}
          >
            Nuestro equipo de expertos combina tecnologia de vanguardia con
            estrategia de negocio para entregar soluciones que generan
            resultados reales.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`animate-scale-in delay-${i} group relative flex flex-col rounded-2xl border border-border/50 bg-card/60 p-8 backdrop-blur-sm transition-all hover:-translate-y-2 hover:border-primary/40 hover:bg-card hover:shadow-xl hover:shadow-primary/5 ${gridVisible ? "visible" : ""}`}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-6">
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  Saber mas <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
