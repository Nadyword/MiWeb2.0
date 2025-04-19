"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Github, Linkedin, Mail, Sparkles } from "lucide-react"

export default function Hero() {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative z-10">
            {/* Elementos decorativos de fondo */}
            <div className="absolute -z-10 inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                    }}
                />
                <motion.div
                    className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-secondary/10 blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: 1,
                    }}
                />
            </div>

            <motion.div
                className="flex-1 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="h-6 w-6 text-accent animate-pulse" />
                        <span className="text-accent font-medium">Desarrollador Full Stack</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Hola, soy <span className="text-primary">Samuel Sánchez</span>
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muted-foreground">
                        Creando experiencias digitales
                    </h2>
                </div>
                <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                    Especializado en crear experiencias web modernas, intuitivas y de alto rendimiento con las últimas
                    tecnologías.
                </p>
                <div className="flex gap-4 pt-4">
                    <Button asChild size="lg" className="group">
                        <a href="#contact">
                            <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                            Contáctame
                        </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="group">
                        <a href="#projects">
                            Ver proyectos
                            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                        </a>
                    </Button>
                </div>
                <div className="flex gap-4 pt-4">
                    <a
                        href="#"
                        className="bg-background text-foreground hover:text-primary p-2 rounded-full border border-border hover:border-primary transition-colors"
                        aria-label="Github"
                    >
                        <Github className="h-5 w-5" />
                    </a>
                    <a
                        href="#"
                        className="bg-background text-foreground hover:text-primary p-2 rounded-full border border-border hover:border-primary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                        href="#"
                        className="bg-background text-foreground hover:text-primary p-2 rounded-full border border-border hover:border-primary transition-colors"
                        aria-label="Código"
                    >
                        <Code className="h-5 w-5" />
                    </a>
                </div>
            </motion.div>

            <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10"></div>
                    <Image src="/focused-coder.png" alt="Samuel Sánchez - Desarrollador" fill className="object-cover" priority />

                    {/* Círculos decorativos alrededor de la imagen */}
                    <motion.div
                        className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-accent/30 blur-sm"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                        }}
                    />
                    <motion.div
                        className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-secondary/30 blur-sm"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0.7, 0.5],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                            delay: 0.5,
                        }}
                    />
                </div>
            </motion.div>
        </div>
    )
}
