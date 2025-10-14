import ThemeController from "@/components/common/ThemeController";
import Footer1 from "@/components/footers/Footer1";
import Header6 from "@/components/headers/Header6";
import About from "@/components/homes/home-2/About";
import Blogs from "@/components/homes/home-2/Blogs";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/homes/home-1/Hero";
import Projects from "@/components/projects/Project1";
import Services from "@/components/homes/home-1/Partners";
import Team from "@/components/homes/home-2/Agents";
import Testimonials from "@/components/homes/home-1/Testimonials";
import React from "react";

export const metadata = {
  title: "Home 06 || Proty - Real Estate React Nextjs Template",
  description: "Proty - Real Estate React Nextjs Template",
};
export default function page() {
  return (
    <>
      <ThemeController themeColor={"default-dark"} />
      <div id="wrapper" className="bg-body-1 counter-scroll">
        <Header6 />
        <Hero />
        <div className="main-content">
          <About />
          <Services />
          <Projects />
          <Team />
          <Testimonials />
          <Blogs />
          <Contact />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
