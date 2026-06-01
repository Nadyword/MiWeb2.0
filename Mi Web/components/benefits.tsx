"use client"

import { TrendingUp, Zap, DollarSign, Rocket } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Aurora, ScanLine } from "@/components/animated-bg"

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumenta tus ventas",
    description:
      "Nuestras soluciones digitales estan disenadas para convertir visitantes en clientes y maximizar tus ingresos de forma sostenible.",
    metric: "+45%",
    metricLabel: "conversion promedio",
  },
  {
    icon: Zap,
    title: "Automatiza tu atencion",
    description:
      "Chatbots y flujos automatizados que atienden a tus clientes 24/7, mejorando la experiencia y liberando a tu equipo.",
    metric: "24/7",
    metricLabel: "disponibilidad",
  },
  {
    icon: DollarSign,
    title: "Reduce costos operativos",
    description:
      "La automatizacion y digitalizacion de procesos puede reducir significativamente tus costos operativos mensuales.",
    metric: "-60%",
    metricLabel: "costos operativos",
  },
  {
    icon: Rocket,
    title: "Escala tu negocio",
    description:
      "Infraestructura tecnologica preparada para crecer contigo. Sin limites, sin cuellos de botella, sin preocupaciones.",
    metric: "10x",
    metricLabel: "capacidad de escala",
  },
]

export function Benefits() {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="beneficios" className="relative overflow-hidden py-24 lg:py-32">
      {/* Animated aurora background */}
      <Aurora />
      <ScanLine />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div ref={headerRef} className="mx-auto max-w-2xl text-center">
          <p
            className={`animate-blur-in delay-0 text-sm font-semibold uppercase tracking-widest text-accent ${headerVisible ? "visible" : ""}`}
          >
            Resultados reales
          </p>
          <h2
            className={`animate-blur-in delay-1 mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl ${headerVisible ? "visible" : ""}`}
          >
            Beneficios que transforman tu empresa
          </h2>
          <p
            className={`animate-blur-in delay-2 mt-4 text-lg leading-relaxed text-muted-foreground ${headerVisible ? "visible" : ""}`}
          >
            No solo construimos software. Creamos soluciones que impactan
            directamente en tus metricas de negocio.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="mt-16 grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className={`animate-fade-${i % 2 === 0 ? "left" : "right"} delay-${i} group relative overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-card hover:shadow-xl hover:shadow-accent/5 lg:p-10 ${gridVisible ? "visible" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-lg group-hover:shadow-accent/25">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-heading text-3xl font-bold text-accent transition-transform duration-300 group-hover:scale-110 lg:text-4xl">
                    {benefit.metric}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{benefit.metricLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
