"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign } from "lucide-react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { name, email, message } = formData;

        // Construir el mensaje para WhatsApp
        const whatsappMessage = `Hola, soy ${name}. Mi correo es ${email}. Quiero hablar sobre: ${message}`;

        // Número de teléfono al que se enviará el mensaje (incluye el código de país)
        const phoneNumber = "584241325210"; // Ejemplo: +58 424-132-52-10

        // Redirigir al enlace de WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, "_blank");
    };

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
                    <MessageSquare className="h-6 w-6 text-secondary" />
                    <h2 className="text-3xl font-bold">Contacto</h2>
                </div>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">¿Tienes un proyecto en mente? ¡Hablemos!</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            <Mail className="h-5 w-5 text-accent" />
                            Información de Contacto
                        </h3>
                        <p className="text-muted-foreground">
                            Estoy disponible para proyectos freelance, oportunidades de trabajo a tiempo completo o simplemente para
                            charlar sobre tecnología.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <p className="text-muted-foreground">samuelsc1509@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-secondary/10 p-3 rounded-full">
                                    <Phone className="h-6 w-6 text-secondary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Teléfono</h4>
                                    <p className="text-muted-foreground">+58 424-132-52-10</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-accent/10 p-3 rounded-full">
                                    <MapPin className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Ubicación</h4>
                                    <p className="text-muted-foreground">Los Teques, Venezuela</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Card className="border-t-4 border-t-primary">
                        <CardContent className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="flex items-center gap-2">
                                        <User className="h-4 w-4 text-primary" />
                                        Nombre
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Tu nombre"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="border-primary/20 focus:border-primary"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="flex items-center gap-2">
                                        <AtSign className="h-4 w-4 text-primary" />
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="tu@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="border-primary/20 focus:border-primary"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="flex items-center gap-2">
                                        <MessageSquare className="h-4 w-4 text-primary" />
                                        Mensaje
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Cuéntame sobre tu proyecto..."
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="border-primary/20 focus:border-primary"
                                    />
                                </div>

                                <Button type="submit" className="w-full group" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <span className="flex items-center">
                                            <svg
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Enviando...
                                        </span>
                                    ) : (
                                        <span className="flex items-center">
                                            <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            Enviar Mensaje
                                        </span>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}
