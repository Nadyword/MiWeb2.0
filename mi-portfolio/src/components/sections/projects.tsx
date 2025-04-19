"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Folder, Layers } from "lucide-react"

const projects = [
    {
        title: "Group Set",
        description: "Conjunto de empresas especializadas en la administración y el procesamiento de información de Instituciones Educativas, consolidados por medio de una única solución tecnológica integral en pro del desarrollo y la competitividad de cada entidad, dando cumplimiento a la normatividad nacional.",
        image: "/modern-ecommerce-interface.png",
        tags: ["C#", ".NET", "SQL Server", "Asp"],
        github: "#",
        demo: "https://groupset.com.co/",
        color: "from-purple-500 to-blue-500",
    },
    {
        title: "Nuroleap",
        description:
            "Una aplicación de visualización impulsada por IA pendiente de patente que programa tu mente para lograr tus mayores objetivos.",
        image: "/digital-taskboard.png",
        tags: ["React", "Node.js", "TypeSrcript", "PostGreSQL","Docker"],
        github: "#",
        demo: "https://app.nuroleap.com/",
        color: "from-green-500 to-teal-500",
    },
    {
        title: "Administradora Ayirca C.A",
        description: "Aplicación de Escritorio para la Gestión de Condominios. La herramienta está diseñada para optimizar las operaciones diarias de un condominio, proporcionando un sistema integral, seguro y fácil de usar.",
        image: "/clean-creative-portfolio.png",
        tags: ["SQL Server", "C#", "WinForm", ".NET"],
        github: "#",
        //demo: "#",
        color: "from-pink-500 to-rose-500",
    },
]

export default function Projects() {
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
                    <Folder className="h-6 w-6 text-secondary" />
                    <h2 className="text-3xl font-bold">Proyectos donde e trabajado</h2>
                </div>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Una selección de los proyectos en los que he trabajado recientemente
                </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col overflow-hidden group card-hover">
                            <div className="relative h-48 overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 z-10`}></div>
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Layers className="h-5 w-5 text-primary" />
                                    {project.title}
                                </CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex gap-2">
                                <Button asChild size="sm" className="group">
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        Ir a la Web
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
