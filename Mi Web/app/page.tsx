import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Benefits } from "@/components/benefits"
import { Portfolio } from "@/components/portfolio"
import { ClientProjects } from "@/components/client-projects"
import { Team } from "@/components/team"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Portfolio />
        <ClientProjects />
        <Team />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
