import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react"

export default function Footer() {
    return (
        <footer className="border-t py-12 relative overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 z-0"></div>

            {/* Patrón de puntos */}
            <div
                className="absolute inset-0 opacity-30 z-0"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(var(--primary), 0.2) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                }}
            ></div>

            <div className="container flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link href="#home" className="font-bold text-xl">
                        <span className="text-primary">Dev</span>Samuel
                    </Link>
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Samuel Sánchez. Todos los derechos reservados.
                    </p>
                </div>

                <div className="flex gap-4">
                    <Link
                        href="https://github.com/Nadyword"
                        className="text-muted-foreground hover:text-primary p-2 rounded-full border border-border hover:border-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="h-5 w-5" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/samuel-sanchez-774636169/"
                        className="text-muted-foreground hover:text-primary p-2 rounded-full border border-border hover:border-primary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-5 w-5" />
                    </Link>
                </div>

                <div className="text-sm text-muted-foreground flex items-center gap-1">
                    Hecho con <Heart className="h-4 w-4 text-accent fill-accent animate-pulse" /> y código
                </div>
            </div>
        </footer>
    )
}
