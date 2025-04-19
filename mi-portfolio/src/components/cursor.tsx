"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 }) // Fuera de la pantalla inicialmente

  useEffect(() => {
    // Función para actualizar la posición del cursor
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    // Agregar event listener
    window.addEventListener("mousemove", updatePosition)

    // Agregar estilos globales para el cursor
    const styleElement = document.createElement("style")
    styleElement.textContent = `
      @media (min-width: 768px) {
        html, body {
          cursor: none;
        }
        
        a, button, input, textarea, [role="button"] {
          cursor: none;
        }
      }
    `
    document.head.appendChild(styleElement)

    // Limpiar event listener y estilos
    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.head.removeChild(styleElement)
    }
  }, [])

  return (
    <div
      className="hidden md:block fixed pointer-events-none z-[9999] mix-blend-difference"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "24px",
        height: "24px",
        backgroundColor: "hsl(var(--primary))",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  )
}
