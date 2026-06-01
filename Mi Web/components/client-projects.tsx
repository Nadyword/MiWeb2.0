"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Globe } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { AnimatedGrid, FloatingOrbs } from "@/components/animated-bg"

const categories = [
  "Todos",
  "E-Commerce",
  "Corporativo",
  "Salud",
  "Gastronomia",
] as const

type Category = (typeof categories)[number]

const projects = [
  {
    title: "Moda Luxe Store",
    client: "Moda Luxe",
    category: "E-Commerce" as Category,
    description:
      "Tienda online de moda con catalogo inteligente, pasarela de pagos integrada y panel de gestion de pedidos en tiempo real.",
    image: "/images/client-ecommerce.jpg",
    tags: ["Next.js", "Stripe", "CMS"],
    url: "#",
  },
  {
    title: "Sabor & Tradicion",
    client: "Restaurante La Mesa",
    category: "Gastronomia" as Category,
    description:
      "Sitio web con sistema de reservas online, menu digital interactivo y programa de fidelizacion de clientes.",
    image: "/images/client-restaurant.jpg",
    tags: ["React", "Node.js", "WhatsApp API"],
    url: "#",
  },
  {
    title: "Inmobiliaria Premier",
    client: "Grupo Inmobiliario RC",
    category: "Corporativo" as Category,
    description:
      "Portal inmobiliario con buscador avanzado de propiedades, tours virtuales 360 y CRM integrado para agentes.",
    image: "/images/client-realestate.jpg",
    tags: ["Next.js", "Maps API", "CRM"],
    url: "#",
  },
  {
    title: "FitZone Gym",
    client: "FitZone",
    category: "Corporativo" as Category,
    description:
      "Plataforma de gestion de gimnasio con reservas de clases, planes de entrenamiento personalizados y pagos recurrentes.",
    image: "/images/client-fitness.jpg",
    tags: ["React", "Stripe", "Dashboard"],
    url: "#",
  },
  {
    title: "Clinica Dental Sonrie",
    client: "Dr. Martinez & Asociados",
    category: "Salud" as Category,
    description:
      "Web de clinica dental con agenda de citas online, historial de pacientes y recordatorios automatizados por WhatsApp.",
    image: "/images/client-clinic.jpg",
    tags: ["Next.js", "Chatbot", "CRM"],
    url: "#",
  },
  {
    title: "Bufete Legal Justitia",
    client: "Justitia Abogados",
    category: "Corporativo" as Category,
    description:
      "Sitio corporativo de firma legal con consultas online, blog juridico con SEO optimizado y sistema de gestion de casos.",
    image: "/images/client-law.jpg",
    tags: ["WordPress", "SEO", "Chatbot"],
    url: "#",
  },
]

export function ClientProjects() {
  const [activeFilter, setActiveFilter] = useState<Category>("Todos")
  const [headerRef, headerVisible] = useScrollAnimation()
  const [filtersRef, filtersVisible] = useScrollAnimation({ threshold: 0.2 })
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.05 })

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="clientes" className="relative overflow-hidden py-24 lg:py-32">
      {/* Animated backgrounds */}
      <AnimatedGrid color="16,185,129" />
      <FloatingOrbs count={3} />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div ref={headerRef} className="mx-auto max-w-2xl text-center">
          <p
            className={`animate-blur-in delay-0 text-sm font-semibold uppercase tracking-widest text-primary ${headerVisible ? "visible" : ""}`}
          >
            Nuestros Clientes
          </p>
          <h2
            className={`animate-blur-in delay-1 mt-3 font-heading text-3xl font-bold text-balance text-foreground sm:text-4xl ${headerVisible ? "visible" : ""}`}
          >
            Webs que hemos desarrollado
          </h2>
          <p
            className={`animate-blur-in delay-2 mt-4 text-lg leading-relaxed text-muted-foreground ${headerVisible ? "visible" : ""}`}
          >
            Conoce algunos de los proyectos que hemos creado para nuestros
            clientes. Cada sitio esta disenado a medida para impulsar su
            negocio.
          </p>
        </div>

        {/* Filters */}
        <div
          ref={filtersRef}
          className="mt-12 flex flex-wrap items-center justify-center gap-2"
        >
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`animate-scale-in delay-${i} transition-all duration-300 ${filtersVisible ? "visible" : ""} rounded-full px-5 py-2 text-sm font-medium ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                  : "border border-border/60 bg-card/50 text-muted-foreground backdrop-blur-sm hover:border-primary/40 hover:text-foreground hover:scale-105"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div ref={gridRef} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <article
              key={project.title}
              className={`animate-fade-up delay-${i % 3} group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-card hover:shadow-xl hover:shadow-primary/5 ${gridVisible ? "visible" : ""}`}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Proyecto web ${project.title} desarrollado para ${project.client}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-background/70 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                  <span className="flex translate-y-4 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-lg transition-transform duration-500 group-hover:translate-y-0">
                    <Globe className="h-4 w-4" />
                    Ver proyecto
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-primary">
                      {project.client}
                    </p>
                  </div>
                  <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2 border-t border-border/50 pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary/80 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors duration-200 group-hover:bg-primary/10 group-hover:text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`animate-fade-up delay-3 mt-16 text-center ${gridVisible ? "visible" : ""}`}
        >
          <p className="text-muted-foreground">
            {"Quieres ver tu negocio aqui?"}{" "}
            <a
              href="#contacto"
              className="font-semibold text-primary underline underline-offset-4 transition-all duration-200 hover:text-primary/80 hover:underline-offset-8"
            >
              Hablemos de tu proyecto
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
