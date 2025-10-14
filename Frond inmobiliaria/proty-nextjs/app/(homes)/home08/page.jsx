import Footer1 from "@/components/footers/Footer1";
import Header7 from "@/components/headers/Header7";
import Agents from "@/components/homes/home-3/Agents";
import Banner from "@/components/homes/home-2/Banner";
import Blogs from "@/components/homes/home-2/Blogs";
import Brands from "@/components/common/Brands";
import Facts from "@/components/homes/home-2/Facts";
import FeaturedProperty from "@/components/homes/home-1/Properties";
import Hero from "@/components/homes/home-3/Hero";
import Properties from "@/components/homes/home-3/Properties";
import Services from "@/components/homes/home-3/Features";
import Testimonials from "@/components/homes/home-3/Testimonials";
import WelcomeSection from "@/components/homes/home-2/Categories";
import React from "react";

export const metadata = {
  title: "Home 08 || Proty - Real Estate React Nextjs Template",
  description: "Proty - Real Estate React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div id="wrapper" className="counter-scroll">
        <Header7 />
        <Hero />

        <div className="main-content bg-color-white">
          <Facts />
          <WelcomeSection />
          <FeaturedProperty />
          <Brands />
          <Properties />
          <Banner />
          <Testimonials />
          <Services />
          <Agents />
          <Blogs />
        </div>
        <Footer1 parentClass="style-2" />
      </div>
    </>
  );
}
