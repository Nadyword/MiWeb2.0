import LoanCalculator from "@/components/homes/home-1/LoanCalculator";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Properties2 from "@/components/homes/home-1/Properties2";
import HelpCenter from "@/components/homes/home-1/HelpCenter";
import Properties from "@/components/homes/home-1/Properties";
import Partners from "@/components/homes/home-1/Partners";
import Categories from "@/components/common/Categories";
import Cities from "@/components/homes/home-1/Cities";
import Blogs from "@/components/homes/home-1/Blogs";
import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";
import Hero from "@/components/homes/home-1/Hero";

export const metadata = {
  title: "ELITE",
  description: "Inmobiliaria ELITE",
};
export default function Home() {
  return (
    <>
      <Header1 />
      <Hero />
      <div className="main-content ">
        <Categories />
        <Properties />
        <Properties2 />
        <Partners />
        <HelpCenter />
        <Testimonials />
        {/* <LoanCalculator /> */}
        {/* <Cities /> */}
        {/* <Blogs /> */}
      </div>
      <Footer1 />
    </>
  );
}
