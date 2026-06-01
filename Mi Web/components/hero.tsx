"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ParticleNetwork, MeteorShower } from "@/components/animated-bg"

export function Hero() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Animated backgrounds */}
      <ParticleNetwork particleCount={50} color="0,163,255" />
      <MeteorShower count={8} />

      {/* Static glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-glow absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="animate-pulse-glow-slow absolute bottom-1/4 right-0 h-[400px] w-[400px] rounded-full bg-accent/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-32">
        {/* Text */}
        <div className="flex flex-col justify-center">
          <div
            className={`animate-fade-down delay-0 mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 ${isVisible ? "visible" : ""}`}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span className="text-xs font-medium text-primary">Innovacion digital</span>
          </div>

          <h1
            className={`animate-fade-up delay-1 font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl ${isVisible ? "visible" : ""}`}
          >
            <span className="text-balance">
              Transformamos tu negocio con{" "}
              <span className="text-primary">tecnologia inteligente</span>
            </span>
          </h1>

          <p
            className={`animate-fade-up delay-2 mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground ${isVisible ? "visible" : ""}`}
          >
            Desarrollamos software a medida, automatizamos procesos y
            potenciamos tu presencia digital para que tu empresa escale con
            confianza.
          </p>

          <div
            className={`animate-fade-up delay-3 mt-10 flex flex-wrap gap-4 ${isVisible ? "visible" : ""}`}
          >
            <Button size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25" asChild>
              <a href="#contacto">
                Solicita una asesoria
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="transition-all duration-300 hover:scale-105" asChild>
              <a href="#servicios">Conoce nuestros servicios</a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className={`animate-fade-up delay-4 mt-14 grid grid-cols-3 gap-8 border-t border-border/50 pt-8 ${isVisible ? "visible" : ""}`}
          >
            {[
              { value: "150+", label: "Proyectos entregados" },
              { value: "98%", label: "Clientes satisfechos" },
              { value: "5+", label: "Anos de experiencia" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div
          className={`animate-fade-right delay-2 relative flex items-center justify-center ${isVisible ? "visible" : ""}`}
        >
          <div className="animate-float-slow relative w-full overflow-hidden rounded-2xl border border-border/50 bg-card/50 shadow-2xl shadow-primary/5">
            <Image
              src="/images/hero-dashboard.jpg"
              alt="Dashboard tecnologico de Solution Softwares"
              width={700}
              height={500}
              className="h-auto w-full object-cover"
              priority
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
          </div>
        </div>
      </div>
    </section>
  )
}
