"use client"

import Image from "next/image"
import { Linkedin, Github } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { MeteorShower, Aurora } from "@/components/animated-bg"

const team = [
  {
    name: "Carlos Ramirez",
    role: "CEO & Arquitecto de Software",
    specialty: "Arquitectura de Sistemas",
    years: 12,
    image: "/images/team-carlos.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Andrea Torres",
    role: "CTO & Desarrolladora Full-Stack",
    specialty: "React / Node.js / Cloud",
    years: 9,
    image: "/images/team-andrea.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Miguel Hernandez",
    role: "Lead Backend Developer",
    specialty: "APIs & Microservicios",
    years: 10,
    image: "/images/team-miguel.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Lucia Mendez",
    role: "Directora de Marketing Digital",
    specialty: "SEO / SEM / Growth",
    years: 7,
    image: "/images/team-lucia.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "David Vargas",
    role: "Ingeniero de IA & Chatbots",
    specialty: "Inteligencia Artificial",
    years: 6,
    image: "/images/team-david.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Valentina Rios",
    role: "Lead UX/UI Designer",
    specialty: "Diseno de Experiencia",
    years: 8,
    image: "/images/team-valentina.jpg",
    linkedin: "#",
    github: "#",
  },
]

export function Team() {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="equipo" className="relative overflow-hidden py-24 lg:py-32">
      {/* Animated backgrounds */}
      <Aurora />
      <MeteorShower count={10} />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div ref={headerRef} className="mx-auto max-w-2xl text-center">
          <p
            className={`animate-fade-up delay-0 text-sm font-semibold uppercase tracking-widest text-primary ${headerVisible ? "visible" : ""}`}
          >
            Nuestro equipo
          </p>
          <h2
            className={`animate-fade-up delay-1 mt-3 font-heading text-3xl font-bold text-balance text-foreground sm:text-4xl ${headerVisible ? "visible" : ""}`}
          >
            El talento detras de cada proyecto
          </h2>
          <p
            className={`animate-fade-up delay-2 mt-4 text-lg leading-relaxed text-muted-foreground ${headerVisible ? "visible" : ""}`}
          >
            Profesionales apasionados por la tecnologia con anos de experiencia
            creando soluciones digitales que transforman negocios.
          </p>
        </div>

        {/* Team grid */}
        <div ref={gridRef} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`animate-scale-in delay-${i % 6} group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-card hover:shadow-xl hover:shadow-primary/5 ${gridVisible ? "visible" : ""}`}
            >
              {/* Photo */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                {/* Social links overlay */}
                <div className="absolute bottom-4 right-4 flex gap-2 translate-y-4 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href={member.linkedin}
                    aria-label={`LinkedIn de ${member.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/80 text-muted-foreground backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.github}
                    aria-label={`GitHub de ${member.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/80 text-muted-foreground backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-primary">{member.role}</p>

                <div className="mt-4 flex flex-col gap-3">
                  {/* Specialty */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Especialidad</p>
                      <p className="text-sm font-medium text-foreground">{member.specialty}</p>
                    </div>
                  </div>

                  {/* Years */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4 text-accent"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Experiencia</p>
                      <p className="text-sm font-medium text-foreground">
                        {member.years} anos de experiencia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
