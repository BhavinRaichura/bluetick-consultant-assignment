"use client";
import AOS from "aos";
import React, { useEffect } from "react";

const ServiceCard = ({ title, desc }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className=" group w-full h-60 overflow-hidden  border-b-2 z-0"
    >
      <div>
        <span className="w-20 group-hover:w-full block relative left-0 top-0 h-1 bg-blue-700 animation-fast"></span>
        <h2 className="text-3xl max-md:2xl text-left group-hover:text-2xl max-md:group-hover:texl-xl transition-all duration-200 py-2 font-bold">
          {title}
        </h2>
        <p className="hidden group-hover:block text-base max-md:text-sm text-left animation-slow text-secondary">
          {desc}
        </p>
      </div>
    </div>
  );
};
export default ServiceCard;
