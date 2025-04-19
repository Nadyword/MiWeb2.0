"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Code2, Lightbulb, Heart, BookOpen } from "lucide-react"

const technologies = [
    { name: "C#", color: "bg-purple-600" },
    { name: "Asp", color: "bg-blue-400" },
    { name: "TypeScript", color: "bg-blue-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Next.js", color: "bg-black" },
    { name: "Node.js", color: "bg-green-600" },
    { name: ".Net", color: "bg-purple-900" },
    { name: "SQL Server", color: "bg-red-500" },
    { name: "PorsGreSQL", color: "bg-blue-900" },
    { name: "Git", color: "bg-orange-500" },
    { name: "Docker", color: "bg-blue-600" },
    { name: "AWS", color: "bg-yellow-500" },
    { name: "Azure", color: "bg-blue-400" }
]

export default function About() {
    return (
        <div className="space-y-10">
            <motion.div
                className="space-y-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center justify-center gap-2 mb-4">
                    <BookOpen className="h-6 w-6 text-secondary" />
                    <h2 className="text-3xl font-bold">Sobre Mí</h2>
                </div>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Conozca un poco más sobre mi trayectoria y experiencia profesional
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                        <Heart className="h-5 w-5 text-accent" />
                        Mi Historia
                    </h3>
                    <p className="text-muted-foreground">
                        Soy un desarrollador Full Stack con más de 5 años de experiencia creando aplicaciones web modernas y
                        escalables. Mi pasión por la tecnología comenzó desde temprana edad y he dedicado mi carrera a perfeccionar
                        mis habilidades en el desarrollo web.
                    </p>
                    <p className="text-muted-foreground">
                        Me especializo en crear apliacionnes funcionales, rápidas y seguras utilizando las últimas tecnologías. Me encanta planificar, diseñar y desarrollar soluciones que no solo cumplan con los requisitos del cliente, sino que también superen sus expectativas. El desarrollo web es mi pasión y siempre estoy buscando aprender y mejorar mis habilidades.
                    </p>
                </motion.div>

                <motion.div
                    className="grid gap-6"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Card className="card-hover border-l-4 border-l-primary">
                        <CardContent className="p-6 flex gap-4 items-start">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Calendar className="h-10 w-10 text-primary" />
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold">Experiencia</h4>
                                <p className="text-muted-foreground">4 años desarrollando aplicaciones web</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="card-hover border-l-4 border-l-secondary">
                        <CardContent className="p-6 flex gap-4 items-start">
                            <div className="bg-secondary/10 p-3 rounded-full">
                                <Code2 className="h-10 w-10 text-secondary" />
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold">Tecnologías Favoritas</h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {technologies.map((tech) => (
                                        <Badge key={tech.name} className={`${tech.color} text-white`}>
                                            {tech.name}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="card-hover border-l-4 border-l-accent">
                        <CardContent className="p-6 flex gap-4 items-start">
                            <div className="bg-accent/10 p-3 rounded-full">
                                <Lightbulb className="h-10 w-10 text-accent" />
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold">Filosofía</h4>
                                <p className="text-muted-foreground">
                                    Crea un codigo limpio, mantenible y escalable. Siempre busca la simplicidad y la eficiencia en cada proyecto.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}
