"use client"

import { motion } from "framer-motion"

export default function DecorativeShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Círculo grande en la esquina superior derecha */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 dark:bg-primary/10"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Círculo pequeño en la esquina inferior izquierda */}
      <motion.div
        className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-secondary/5 dark:bg-secondary/10"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Forma rectangular en el centro derecha */}
      <motion.div
        className="absolute top-1/3 -right-20 w-80 h-80 rounded-3xl bg-accent/5 dark:bg-accent/10 rotate-12"
        animate={{
          rotate: [12, 20, 12],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Forma rectangular en el centro izquierda */}
      <motion.div
        className="absolute top-2/3 -left-20 w-72 h-72 rounded-3xl bg-primary/5 dark:bg-primary/10 -rotate-12"
        animate={{
          rotate: [-12, -25, -12],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </div>
  )
}
