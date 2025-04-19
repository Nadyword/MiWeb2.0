import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import CustomCursor from "@/components/cursor"
import DecorativeShapes from "@/components/decorative-shapes"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Portfolio de Desarrollador",
    description: "Portfolio personal de un desarrollador Full Stack",
    generator: 'v0.dev'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" suppressHydrationWarning>
            <head>
                <link rel="icon" href="Logo icono.ico" />
            </head>
            <body className={cn("min-h-screen antialiased", inter.className)}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
                    <DecorativeShapes />
                    <CustomCursor />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
