import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Contact from "@/components/sections/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                <section id="home" className="container py-24 sm:py-32 relative hero-pattern bg-overlay">
                    <Hero />
                </section>
                <section id="about" className="container py-24 sm:py-32 border-t relative grid-pattern bg-overlay">
                    <About />
                </section>
                <section id="projects" className="container py-24 sm:py-32 border-t relative tech-pattern bg-overlay">
                    <Projects />
                </section>
                <section id="skills" className="container py-24 sm:py-32 border-t relative bg-dots">
                    <Skills />
                </section>
                <section id="contact" className="container py-24 sm:py-32 border-t relative geometric-pattern bg-overlay">
                    <Contact />
                </section>
            </main>
            <Footer />
        </div>
    )
}
