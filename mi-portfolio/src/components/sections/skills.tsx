"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, PenToolIcon as Tool, Zap } from "lucide-react"
import { TechIcon } from "@/components/tech-icon"

const skills = [
    {
        category: "Frontend",
        icon: <Code className="h-6 w-6 text-primary" />,
        color: "border-primary",
        bgColor: "bg-primary/10",
        technologies: [
            { name: "HTML/CSS", level: 95 },
            { name: "JavaScript", level: 70 },
            { name: "TypeScript", level: 80 },
            { name: "React", level: 70 },
            { name: "Next.js", level: 65 },
            { name: "TailwindCSS", level: 50 },
        ],
    },
    {
        category: "Backend",
        icon: <Server className="h-6 w-6 text-secondary" />,
        color: "border-secondary",
        bgColor: "bg-secondary/10",
        technologies: [
            { name: "C#", level: 95 },
            { name: "Node.js", level: 70 },
            { name: "SQL Server", level: 85 },
            { name: "PostgreSQL", level: 80 },
            { name: "REST API", level: 90 },
            { name: "PHP", level: 70 }
        ],
    },
    {
        category: "Herramientas & Otros",
        icon: <Tool className="h-6 w-6 text-accent" />,
        color: "border-accent",
        bgColor: "bg-accent/10",
        technologies: [
            { name: "Git", level: 90 },
            { name: "Docker", level: 75 },
            { name: "CI/CD", level: 80 },
            { name: "AWS", level: 85 },
            { name: "Nginx", level: 95 },
            { name: "Visual Studio", level: 95 },
        ],
    },
]

export default function Skills() {
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
                    <Zap className="h-6 w-6 text-secondary" />
                    <h2 className="text-3xl font-bold">Mis Habilidades</h2>
                </div>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Tecnologías y herramientas con las que trabajo
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skillGroup, groupIndex) => (
                    <motion.div
                        key={skillGroup.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                    >
                        <Card className={`card-hover border-l-4 ${skillGroup.color} h-full`}>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`${skillGroup.bgColor} p-2 rounded-full`}>{skillGroup.icon}</div>
                                    <h3 className="text-xl font-bold">{skillGroup.category}</h3>
                                </div>

                                <div className="space-y-5">
                                    {skillGroup.technologies.map((tech, techIndex) => (
                                        <motion.div
                                            key={tech.name}
                                            initial={{ opacity: 0, width: 0 }}
                                            whileInView={{ opacity: 1, width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: techIndex * 0.1 + groupIndex * 0.1 }}
                                            className="space-y-2"
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-2">
                                                    <TechIcon name={tech.name} className="h-5 w-5" />
                                                    <span className="font-medium">{tech.name}</span>
                                                </div>
                                                <span
                                                    className={`text-sm font-semibold ${tech.level >= 90
                                                            ? "text-green-500 dark:text-green-400"
                                                            : tech.level >= 80
                                                                ? "text-blue-500 dark:text-blue-400"
                                                                : tech.level >= 70
                                                                    ? "text-yellow-500 dark:text-yellow-400"
                                                                    : "text-orange-500 dark:text-orange-400"
                                                        }`}
                                                >
                                                    {tech.level}%
                                                </span>
                                            </div>
                                            <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                                                <motion.div
                                                    className={`absolute top-0 left-0 h-full rounded-full ${groupIndex === 0
                                                            ? "bg-gradient-to-r from-primary to-purple-400"
                                                            : groupIndex === 1
                                                                ? "bg-gradient-to-r from-secondary to-green-400"
                                                                : "bg-gradient-to-r from-accent to-red-400"
                                                        }`}
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${tech.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.8, delay: techIndex * 0.1 + groupIndex * 0.1 }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
