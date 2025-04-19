"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evitar hidratación incorrecta
  useEffect(() => {
    setMounted(true)
  }, [])

  // Función para alternar el tema
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Renderizar un placeholder durante la hidratación
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="bg-transparent">
        <div className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Cambiar tema</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="bg-primary/10 hover:bg-primary/20 transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-400" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-primary" />
      )}
      <span className="sr-only">Cambiar tema</span>
    </Button>
  )
}
