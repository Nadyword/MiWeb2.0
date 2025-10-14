import Footer1 from "@/components/footers/Footer1";
import Header7 from "@/components/headers/Header7";
import About from "@/components/homes/home-2/About";
import Agents from "@/components/homes/home-2/Agents";
import Blogs from "@/components/homes/home-2/Blogs";
import Brands from "@/components/common/Brands";
import Contact from "@/components/contact/Contact";
import HelpSection from "@/components/homes/home-1/HelpCenter";
import Hero from "@/components/homes/home-1/Hero";
import Properties from "@/components/homes/home-1/Properties";
import Properties2 from "@/components/homes/home-1/Properties2";
import Properties3 from "@/components/homes/home-2/Properties";
import Testimonials from "@/components/homes/home-1/Testimonials";
import React from "react";

export const metadata = {
  title: "Home 10 || Proty - Real Estate React Nextjs Template",
  description: "Proty - Real Estate React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div id="wrapper" className="counter-scroll">
        <Header7 />
        <Hero />
        <div className="main-content overflow-hidden">
          <Brands />
          <Properties />
          <Contact />
          <HelpSection />
          <About />
          <Properties2 />
          <Agents />
          <Properties3 />
          <Testimonials />
          <Blogs />
        </div>
        <Footer1 parentClass="style-2" />
      </div>
    </>
  );
}
