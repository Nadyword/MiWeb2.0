import Footer1 from "@/components/footers/Footer1";
import Header7 from "@/components/headers/Header7";
import About from "@/components/homes/home-2/About";
import Agents from "@/components/homes/home-2/Agents";
import Blogs from "@/components/homes/home-2/Blogs";
import Brands from "@/components/common/Brands";
import Facts from "@/components/homes/home-2/Facts";
import Features from "@/components/homes/home-3/Features";
import Hero from "@/components/homes/home-2/Hero";
import Properties from "@/components/homes/home-2/Properties";
import Services from "@/components/homes/home-2/Categories";
import Services2 from "@/components/homes/home-1/Partners";
import Testimonials from "@/components/homes/home-2/Testimonials";
import React from "react";

export const metadata = {
  title: "Home 09 || Proty - Real Estate React Nextjs Template",
  description: "Proty - Real Estate React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div id="wrapper" className="counter-scroll">
        <div className="bg-body-1 wrap-top">
          <Header7 />
          <Hero />
        </div>
        <div className="main-content">
          <Facts />
          <About />
          <Services />
          <Properties />
          <Features />
          <Agents />
          <Services2 />
          <Testimonials />
          <Brands />
          <Blogs />
        </div>
        <Footer1 parentClass="style-2" />
      </div>
    </>
  );
}
