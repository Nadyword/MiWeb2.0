// Variables globales
let isNavOpen = false
let currentTab = "fitness"
const chatMessages = []
let isChatOpen = false

// Elementos del DOM
const navbar = document.getElementById("navbar")
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")
const contactForm = document.getElementById("contactForm")
const chatWidget = document.getElementById("chatWidget")
const chatToggle = document.getElementById("chatToggle")
const chatWindow = document.getElementById("chatWindow")
const chatMinimize = document.getElementById("chatMinimize")
const chatInput = document.getElementById("chatInput")
const chatSend = document.getElementById("chatSend")
const chatBody = document.getElementById("chatBody")

// Respuestas predefinidas del chatbot
const chatResponses = [
  "¡Excelente pregunta! Nuestros chatbots se adaptan completamente a las necesidades específicas de tu negocio.",
  "Puedo ayudarte con información sobre precios, funcionalidades, tiempos de desarrollo o cualquier duda técnica que tengas.",
  "¿Te gustaría agendar una llamada gratuita para discutir tu proyecto en detalle? Podemos crear una solución perfecta para ti.",
  "Nuestros chatbots pueden integrarse con WhatsApp, Facebook Messenger, tu sitio web, Slack y muchas otras plataformas.",
  "El tiempo de desarrollo típico es de 2-4 semanas, dependiendo de la complejidad y funcionalidades requeridas.",
  "¡Perfecto! Te recomiendo llenar el formulario de contacto para recibir una consulta personalizada y gratuita.",
  "Ofrecemos soporte técnico continuo, actualizaciones regulares y mantenimiento para garantizar el mejor rendimiento.",
  "Nuestros chatbots utilizan inteligencia artificial avanzada para comprender el contexto y ofrecer respuestas naturales.",
  "¿Qué tipo de chatbot te interesa más? Tenemos soluciones para fitness, e-commerce, reservas, contabilidad y más.",
  "Todos nuestros chatbots incluyen analytics detallados para que puedas medir su impacto en tu negocio.",
]

// Inicialización cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Aplicación inicializada correctamente")

  // Configurar navegación móvil
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      isNavOpen = !isNavOpen
      navMenu.classList.toggle("active")
      navToggle.classList.toggle("active")
      document.body.style.overflow = isNavOpen ? "hidden" : ""
    })
  }

  // Cerrar menú móvil al hacer clic en un enlace
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (isNavOpen) {
        isNavOpen = false
        navMenu.classList.remove("active")
        navToggle.classList.remove("active")
        document.body.style.overflow = ""
      }
    })
  })

  // Scroll suave para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = anchor.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }

      // Cerrar menú móvil
      if (isNavOpen) {
        isNavOpen = false
        navMenu.classList.remove("active")
        navToggle.classList.remove("active")
        document.body.style.overflow = ""
      }
    })
  })

  // Botones del hero con efecto ripple
  document.querySelectorAll(".hero-buttons .btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      // Efecto de ripple
      const ripple = document.createElement("span")
      const rect = button.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      `

      button.style.position = "relative"
      button.style.overflow = "hidden"
      button.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)

      // Scroll a la sección correspondiente
      if (button.textContent.includes("Comenzar")) {
        const contactSection = document.getElementById("contact")
        if (contactSection) {
          const offsetTop = contactSection.offsetTop - 80
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })
        }
      } else if (button.textContent.includes("Ver Demos")) {
        const servicesSection = document.getElementById("services")
        if (servicesSection) {
          const offsetTop = servicesSection.offsetTop - 80
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })
        }
      }
    })
  })

  // Configurar sistema de tabs
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab")

      // Actualizar botones
      document.querySelectorAll(".tab-button").forEach((btn) => {
        btn.classList.remove("active")
      })
      button.classList.add("active")

      // Actualizar contenido
      document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.remove("active")
      })
      document.getElementById(tabId).classList.add("active")

      currentTab = tabId

      // Animar el cambio
      const activeContent = document.getElementById(tabId)
      activeContent.style.opacity = "0"
      activeContent.style.transform = "translateY(20px)"

      setTimeout(() => {
        activeContent.style.transition = "all 0.3s ease-out"
        activeContent.style.opacity = "1"
        activeContent.style.transform = "translateY(0)"
      }, 50)
    })
  })

  // Configurar validación del formulario
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      let isValid = true
      const requiredFields = contactForm.querySelectorAll("[required]")

      requiredFields.forEach((field) => {
        const value = field.value.trim()
        const fieldGroup = field.closest(".form-group")
        const errorMessage = fieldGroup.querySelector(".error-message")

        let fieldValid = true
        let message = ""

        // Validar campo requerido
        if (field.hasAttribute("required") && !value) {
          fieldValid = false
          message = "Este campo es obligatorio"
        }

        // Validar email
        if (field.type === "email" && value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(value)) {
            fieldValid = false
            message = "Por favor, ingresa un email válido"
          }
        }

        // Validar teléfono
        if (field.type === "tel" && value) {
          const phoneRegex = /^[+]?[\d\s\-()]{10,}$/
          if (!phoneRegex.test(value)) {
            fieldValid = false
            message = "Por favor, ingresa un teléfono válido"
          }
        }

        // Mostrar/ocultar error
        if (fieldValid) {
          fieldGroup.classList.remove("error")
          errorMessage.textContent = ""
        } else {
          fieldGroup.classList.add("error")
          errorMessage.textContent = message
          isValid = false
        }
      })

      // Enviar formulario si es válido
      if (isValid) {
        const submitBtn = contactForm.querySelector('button[type="submit"]')
        const originalText = submitBtn.querySelector(".btn-text").textContent
        const btnIcon = submitBtn.querySelector(".btn-icon")

        // Mostrar estado de carga
        submitBtn.querySelector(".btn-text").textContent = "Enviando..."
        btnIcon.textContent = "⏳"
        submitBtn.disabled = true

        // Simular envío
        setTimeout(() => {
          // Mostrar éxito
          submitBtn.querySelector(".btn-text").textContent = "¡Enviado!"
          btnIcon.textContent = "✅"

          // Mostrar notificación
          const notification = document.createElement("div")
          notification.textContent = "¡Gracias por tu interés! Nos pondremos en contacto contigo pronto."

          Object.assign(notification.style, {
            position: "fixed",
            top: "20px",
            right: "20px",
            padding: "1rem 1.5rem",
            borderRadius: "12px",
            color: "white",
            fontWeight: "600",
            zIndex: "10000",
            transform: "translateX(100%)",
            transition: "transform 0.3s ease-out",
            backgroundColor: "#10b981",
          })

          document.body.appendChild(notification)

          setTimeout(() => {
            notification.style.transform = "translateX(0)"
          }, 100)

          setTimeout(() => {
            notification.style.transform = "translateX(100%)"
            setTimeout(() => {
              document.body.removeChild(notification)
            }, 300)
          }, 5000)

          // Resetear formulario
          setTimeout(() => {
            contactForm.reset()
            submitBtn.querySelector(".btn-text").textContent = originalText
            btnIcon.textContent = "📤"
            submitBtn.disabled = false
          }, 2000)
        }, 2000)
      }
    })

    // Validación en tiempo real
    const inputs = contactForm.querySelectorAll("input, select, textarea")
    inputs.forEach((input) => {
      input.addEventListener("blur", (e) => {
        const field = e.target
        const value = field.value.trim()
        const fieldGroup = field.closest(".form-group")
        const errorMessage = fieldGroup.querySelector(".error-message")

        let isValid = true
        let message = ""

        if (field.hasAttribute("required") && !value) {
          isValid = false
          message = "Este campo es obligatorio"
        }

        if (field.type === "email" && value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(value)) {
            isValid = false
            message = "Por favor, ingresa un email válido"
          }
        }

        if (field.type === "tel" && value) {
          const phoneRegex = /^[+]?[\d\s\-()]{10,}$/
          if (!phoneRegex.test(value)) {
            isValid = false
            message = "Por favor, ingresa un teléfono válido"
          }
        }

        if (isValid) {
          fieldGroup.classList.remove("error")
          errorMessage.textContent = ""
        } else {
          fieldGroup.classList.add("error")
          errorMessage.textContent = message
        }
      })

      input.addEventListener("input", (e) => {
        const fieldGroup = e.target.closest(".form-group")
        if (fieldGroup.classList.contains("error") && e.target.value.trim()) {
          fieldGroup.classList.remove("error")
          fieldGroup.querySelector(".error-message").textContent = ""
        }
      })
    })
  }

  // Configurar chatbot
  if (chatToggle && chatWindow) {
    chatToggle.addEventListener("click", () => {
      isChatOpen = !isChatOpen
      chatWidget.classList.toggle("active")
      chatWindow.classList.toggle("active")

      if (isChatOpen) {
        chatInput.focus()
      }
    })

    if (chatMinimize) {
      chatMinimize.addEventListener("click", () => {
        isChatOpen = false
        chatWidget.classList.remove("active")
        chatWindow.classList.remove("active")
      })
    }

    if (chatSend) {
      chatSend.addEventListener("click", () => {
        const message = chatInput.value.trim()
        if (!message) return

        // Agregar mensaje del usuario
        const messageElement = document.createElement("div")
        messageElement.className = "chat-message user-message"

        const avatar = document.createElement("div")
        avatar.className = "message-avatar"
        avatar.textContent = "👤"

        const content = document.createElement("div")
        content.className = "message-content"

        const messageText = document.createElement("p")
        messageText.textContent = message

        const time = document.createElement("span")
        time.className = "message-time"
        time.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

        content.appendChild(messageText)
        content.appendChild(time)
        messageElement.appendChild(avatar)
        messageElement.appendChild(content)

        chatBody.appendChild(messageElement)
        chatBody.scrollTop = chatBody.scrollHeight

        messageElement.style.opacity = "0"
        messageElement.style.transform = "translateY(20px)"

        setTimeout(() => {
          messageElement.style.transition = "all 0.3s ease-out"
          messageElement.style.opacity = "1"
          messageElement.style.transform = "translateY(0)"
        }, 50)

        chatInput.value = ""
        chatMessages.push({ message, sender: "user", timestamp: new Date() })

        // Simular respuesta del bot
        setTimeout(
          () => {
            const response = chatResponses[Math.floor(Math.random() * chatResponses.length)]

            const botMessageElement = document.createElement("div")
            botMessageElement.className = "chat-message bot-message"

            const botAvatar = document.createElement("div")
            botAvatar.className = "message-avatar"
            botAvatar.textContent = "🤖"

            const botContent = document.createElement("div")
            botContent.className = "message-content"

            const botMessageText = document.createElement("p")
            botMessageText.textContent = response

            const botTime = document.createElement("span")
            botTime.className = "message-time"
            botTime.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

            botContent.appendChild(botMessageText)
            botContent.appendChild(botTime)
            botMessageElement.appendChild(botAvatar)
            botMessageElement.appendChild(botContent)

            chatBody.appendChild(botMessageElement)
            chatBody.scrollTop = chatBody.scrollHeight

            botMessageElement.style.opacity = "0"
            botMessageElement.style.transform = "translateY(20px)"

            setTimeout(() => {
              botMessageElement.style.transition = "all 0.3s ease-out"
              botMessageElement.style.opacity = "1"
              botMessageElement.style.transform = "translateY(0)"
            }, 50)

            chatMessages.push({ message: response, sender: "bot", timestamp: new Date() })
          },
          1000 + Math.random() * 1000,
        )
      })
    }

    if (chatInput) {
      chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          chatSend.click()
        }
      })
    }
  }

  // Animar elementos flotantes
  const floatingElements = document.querySelectorAll(".floating-element")
  floatingElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.5}s`
  })

  // Animar estadísticas del hero
  setTimeout(() => {
    const stats = document.querySelectorAll(".stat-number")
    stats.forEach((stat) => {
      const finalValue = stat.textContent
      const isNumber = !isNaN(Number.parseInt(finalValue))

      if (isNumber) {
        const startTime = performance.now()
        const startValue = 0
        const endValue = Number.parseInt(finalValue)
        const duration = 2000

        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)

          // Easing function
          const easeProgress = 1 - Math.pow(1 - progress, 4)

          const current = Math.floor(startValue + (endValue - startValue) * easeProgress)
          stat.textContent = current + (stat.textContent.includes("%") ? "%" : "+")

          if (progress < 1) {
            requestAnimationFrame(updateCounter)
          }
        }

        requestAnimationFrame(updateCounter)
      }
    })
  }, 1000)

  // Intersection Observer para animaciones
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")

        if (entry.target.classList.contains("service-card")) {
          const icon = entry.target.querySelector(".service-icon")
          if (icon) {
            icon.style.transform = "scale(1.2)"
            setTimeout(() => {
              icon.style.transition = "transform 0.3s ease-out"
              icon.style.transform = "scale(1)"
            }, 200)
          }
        }
      }
    })
  }, observerOptions)

  document.querySelectorAll(".fade-in, .service-card").forEach((el) => {
    observer.observe(el)
  })

  // Animar mensajes del demo después de 2 segundos
  setTimeout(() => {
    const demoChat = document.getElementById("demo-chat")
    if (demoChat) {
      const messages = demoChat.querySelectorAll(".message")

      messages.forEach((message, index) => {
        setTimeout(() => {
          message.style.opacity = "0"
          message.style.transform = "translateY(10px)"

          setTimeout(() => {
            message.style.transition = "all 0.3s ease-out"
            message.style.opacity = "1"
            message.style.transform = "translateY(0)"
          }, 50)
        }, index * 1000)
      })
    }
  }, 2000)
})

// Efectos de scroll con throttling
let scrollTimeout = false
window.addEventListener("scroll", () => {
  if (!scrollTimeout) {
    setTimeout(() => {
      if (window.scrollY > 100) {
        navbar.classList.add("scrolled")
      } else {
        navbar.classList.remove("scrolled")
      }
      scrollTimeout = false
    }, 10)
    scrollTimeout = true
  }
})

// Cerrar menús al hacer clic fuera
document.addEventListener("click", (e) => {
  // Cerrar menú móvil si se hace clic fuera
  if (isNavOpen && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    isNavOpen = false
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
    document.body.style.overflow = ""
  }

  // Cerrar chat si se hace clic fuera
  if (isChatOpen && chatWindow && chatToggle && !chatWindow.contains(e.target) && !chatToggle.contains(e.target)) {
    isChatOpen = false
    chatWidget.classList.remove("active")
    chatWindow.classList.remove("active")
  }
})

// Manejar redimensionamiento de ventana
window.addEventListener("resize", () => {
  // Cerrar menú móvil en resize
  if (window.innerWidth > 768 && isNavOpen) {
    isNavOpen = false
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
    document.body.style.overflow = ""
  }

  // Ajustar chat en móvil
  if (window.innerWidth <= 480 && isChatOpen && chatWindow) {
    chatWindow.style.width = `${window.innerWidth - 32}px`
  }
})

// Navegación por teclado
document.addEventListener("keydown", (e) => {
  // Escape para cerrar modales
  if (e.key === "Escape") {
    if (isChatOpen) {
      isChatOpen = false
      chatWidget.classList.remove("active")
      chatWindow.classList.remove("active")
    }
    if (isNavOpen) {
      isNavOpen = false
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
      document.body.style.overflow = ""
    }
  }

  // Enter/Space para activar botones personalizados
  if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("tab-button")) {
    e.preventDefault()
    e.target.click()
  }
})

// Agregar estilos CSS para el efecto ripple
const rippleStyles = document.createElement("style")
rippleStyles.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`
document.head.appendChild(rippleStyles)

// Crear elemento para anuncios de accesibilidad
const announcer = document.createElement("div")
announcer.setAttribute("aria-live", "polite")
announcer.setAttribute("aria-atomic", "true")
announcer.className = "sr-only"
announcer.style.cssText = `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`
document.body.appendChild(announcer)

// Lazy loading para imágenes
const images = document.querySelectorAll("img[data-src]")
if (images.length > 0) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.removeAttribute("data-src")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Service Worker para PWA (opcional)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("✅ Service Worker registrado:", registration)
      })
      .catch((error) => {
        console.log("❌ Error al registrar Service Worker:", error)
      })
  })
}

// Funciones globales para uso externo
window.scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetTop = element.offsetTop - 80
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

window.showNotification = (message, type = "info") => {
  const notification = document.createElement("div")
  notification.textContent = message

  Object.assign(notification.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "1rem 1.5rem",
    borderRadius: "12px",
    color: "white",
    fontWeight: "600",
    zIndex: "10000",
    transform: "translateX(100%)",
    transition: "transform 0.3s ease-out",
    backgroundColor: type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6",
  })

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 5000)
}

console.log("🚀 Solution Software Landing Page cargada correctamente")
