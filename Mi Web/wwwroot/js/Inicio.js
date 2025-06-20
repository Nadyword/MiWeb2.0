export function initHomeAnimations() {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()
            const target = document.querySelector(this.getAttribute("href"))
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                })
            }
        })
    })

    // Mobile menu toggle
    const hamburger = document.getElementById("hamburger")
    const navMenu = document.getElementById("nav-menu")

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active")
    })

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-link, .nav-link-cta").forEach((link) => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active")
            navMenu.classList.remove("active")
        })
    })

    // Navbar scroll effect
    const navbar = document.getElementById("navbar")
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled")
        } else {
            navbar.classList.remove("scrolled")
        }
    })

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const element = entry.target
                const delay = element.dataset.delay || 0

                setTimeout(() => {
                    element.classList.add("animate")
                }, delay)
            }
        })
    }, observerOptions)

    // Observe elements for animation
    document.querySelectorAll("[data-aos]").forEach((el) => {
        observer.observe(el)
    })

    // Service cards animation
    document.querySelectorAll(".service-card").forEach((card) => {
        observer.observe(card)
    })

    // Value items animation
    document.querySelectorAll(".value-item").forEach((item) => {
        observer.observe(item)
    })

    // Values visual animation
    const valuesVisual = document.querySelector(".values-visual")
    if (valuesVisual) {
        observer.observe(valuesVisual)
    }

    // Counter animation for statistics
    const animateCounter = (element, target) => {
        let current = 0
        const increment = target / 100
        const timer = setInterval(() => {
            current += increment
            if (current >= target) {
                current = target
                clearInterval(timer)
            }
            element.textContent = Math.floor(current)
        }, 20)
    }

    // Observe stats for counter animation
    const statsObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll(".stat-number")
                    statNumbers.forEach((stat) => {
                        const target = Number.parseInt(stat.dataset.target)
                        animateCounter(stat, target)
                    })
                    statsObserver.unobserve(entry.target)
                }
            })
        },
        { threshold: 0.5 },
    )

    const statsContainer = document.querySelector(".stats-container")
    if (statsContainer) {
        statsObserver.observe(statsContainer)
    }

    // Testimonials slider
    let currentSlide = 0
    const testimonialTrack = document.getElementById("testimonial-track")
    const testimonialCards = document.querySelectorAll(".testimonial-card")
    const dots = document.querySelectorAll(".dot")
    const prevBtn = document.getElementById("prev-btn")
    const nextBtn = document.getElementById("next-btn")

    const updateSlider = () => {
        const translateX = -currentSlide * 100
        testimonialTrack.style.transform = `translateX(${translateX}%)`

        // Update active states
        testimonialCards.forEach((card, index) => {
            card.classList.toggle("active", index === currentSlide)
        })

        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlide)
        })
    }

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % testimonialCards.length
        updateSlider()
    }

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length
        updateSlider()
    }

    // Event listeners for testimonial controls
    if (nextBtn) nextBtn.addEventListener("click", nextSlide)
    if (prevBtn) prevBtn.addEventListener("click", prevSlide)

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentSlide = index
            updateSlider()
        })
    })

    // Auto-play testimonials
    setInterval(nextSlide, 5000)

    // Contact form handling
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault()

            // Get form data
            const formData = new FormData(contactForm)
            const data = Object.fromEntries(formData)

            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]')
            const originalText = submitBtn.textContent

            submitBtn.textContent = "Enviando..."
            submitBtn.disabled = true

            setTimeout(() => {
                contactForm.reset()
                submitBtn.textContent = originalText
                submitBtn.disabled = false
            }, 2000)
        })
    }

    // Back to top button
    const backToTopBtn = document.getElementById("back-to-top")

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show")
        } else {
            backToTopBtn.classList.remove("show")
        }
    })

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    })

    // Form input animations
    document.querySelectorAll(".form-group input, .form-group select, .form-group textarea").forEach((input) => {
        input.addEventListener("focus", () => {
            input.parentElement.classList.add("focused")
        })

        input.addEventListener("blur", () => {
            if (!input.value) {
                input.parentElement.classList.remove("focused")
            }
        })
    })

    // Parallax effect for hero section
    window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset
        const hero = document.querySelector(".hero")
        if (hero) {
            const rate = scrolled * -0.5
            hero.style.transform = `translateY(${rate}px)`
        }
    })

    // Loading animation
    window.addEventListener("load", () => {
        document.body.classList.add("loaded")
    })

    // Add hover effects to service cards
    document.querySelectorAll(".service-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px) scale(1.02)"
        })

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0) scale(1)"
        })
    })

    // Typing effect for hero title
    const heroTitle = document.querySelector(".hero-title")
    if (heroTitle) {
        const text = heroTitle.textContent
        heroTitle.textContent = ""

        let i = 0
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i)
                i++
                setTimeout(typeWriter, 50)
            }
        }

        setTimeout(typeWriter, 1000)
    }

    // Add ripple effect to buttons
    document.querySelectorAll(".btn").forEach((button) => {
        button.addEventListener("click", function (e) {
            const ripple = document.createElement("span")
            const rect = this.getBoundingClientRect()
            const size = Math.max(rect.width, rect.height)
            const x = e.clientX - rect.left - size / 2
            const y = e.clientY - rect.top - size / 2

            ripple.style.width = ripple.style.height = size + "px"
            ripple.style.left = x + "px"
            ripple.style.top = y + "px"
            ripple.classList.add("ripple")

            this.appendChild(ripple)

            setTimeout(() => {
                ripple.remove()
            }, 600)
        })
    })

    // Add CSS for ripple effect
    const style = document.createElement("style")
    style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
    document.head.appendChild(style)

    // Add active class to current section in navigation
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-link")

    window.addEventListener("scroll", () => {
        let current = ""

        sections.forEach((section) => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id")
            }
        })

        navLinks.forEach((link) => {
            link.classList.remove("active")
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active")
            }
        })
    })
}