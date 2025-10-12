import PageTitle from "@/components/otherPages/LoanProcess/PageTitle";
import Facts from "@/components/otherPages/LoanProcess/Facts";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

export default function page() {
  return (
    <>
      <div id="wrapper" className="counter-scroll">
        <Header1 />
        <PageTitle />
        <div className="main-content">
          <Facts />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
