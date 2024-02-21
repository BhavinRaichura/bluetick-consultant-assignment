"use client";
import AOS from "aos";
import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="home" className="flex max-md:flex-col gap-4 lg:h-screen  ">
      <div className=" w-1/2 pt-20 max-md:w-full text-left max-md:text-center  ">
        <h1
          data-aos-duration="400"
          data-aos="fade-right"
          className=" text-secondary text-5xl max-lg:text-4xl max-md:text-4xl font-bold py-6 max-md:py-4 "
        >
          Transforming Enterprises
        </h1>
        <h3
          data-aos-duration="600"
          data-aos="fade-right"
          className=" text-secondary text-3xl max-lg:text-xl max-md:text-2xl font-medium py-4 max-md:py-4 "
        >
          with cutting-edge, scalable, privacy-focused Generative AI Solutions{" "}
        </h3>
        <p
          data-aos-duration="800"
          data-aos="fade-right"
          className=" text-secondary text-2xl max-lg:text-base max-md:text-lg  font-normal py-14 max-md:py-8 "
        >
          Founded in 2017, Bluetick Consultants is a technology-driven firm that
          has made a significant impact in the Indian and US startup ecosystems.{" "}
        </p>
        <a href="https://www.bluetickconsultants.com/generative-ai.html">
          <button className="button">
            <span className="button-text">About us</span>
          </button>
        </a>
      </div>
      <div className="w-1/2 max-md:w-full">
        <img
          className="w-full h-max"
          src="https://generative-ai.bluetickconsultants.com/images/products/generativeAI.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
