"use client";
import SearchForm from "@/components/common/SearchForm";
import React, { useState } from "react";

export default function Hero() {
  // State to track the active item
  const [activeItem, setActiveItem] = useState("For sale");

  // Array of items to render
  const items = ["For sale", "For rent"];

  return (
    <div className="page-title home01">
      <div className="tf-container ">
        <div className="row justify-center relative">
          <div className="col-lg-8 ">
            <div className="content-inner">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
