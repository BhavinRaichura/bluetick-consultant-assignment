import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

import { MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" py-10 border-t-2 ">
      <div className=" flex max-md:flex-col gap-20 justify-between">
        <div className=" w-64">
          <img
            className=""
            src="https://generative-ai.bluetickconsultants.com/images/bluetick-consultants.png"
            alt=""
            srcset=""
          />
          <p className=" text-base font-medium text-gray-700 py-2">
            Bluetick Consultant LLP
          </p>
          <p className="my-5">
            <a href="mailto:contact@bluetickconsultants.com"></a>
            contact@bluetickconsultants.com
          </p>
          <div className="flex ">
            <img
              className="h-20 w-max"
              src="https://generative-ai.bluetickconsultants.com/images/glassdoor-rating.webp"
              alt=""
            />
            <img
              className="h-20 w-max"
              src="https://generative-ai.bluetickconsultants.com/images/bluetick-iso.webp"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className=" flex gap-8 max-md:flex-col pb-10 border-b-2">
            <div className="">
              <h4 className=" col-span-1 text-lg font-semibold text-gray-700 my-4">
                RESOURCES
              </h4>
              <div className="flex">
                <p className=" col-span-1 text-gray-700 text-base font-normal">
                  Blog
                </p>
              </div>
            </div>
            <div className="w-full">
              <h4 className=" col-span-2 text-lg font-semibold text-gray-700 my-4">
                PRODUCTS
              </h4>
              <div className="flex gap-8 flex-wrap max-md:flex-col justify-between ">
                <p className=" col-span-1 text-gray-700 text-base font-normal">
                  Talk To Code
                </p>
                <p className=" col-span-1 text-gray-700 text-base font-normal">
                  Interview GPT
                </p>
                <p className=" col-span-1 text-gray-700 text-base font-normal col-start-2">
                  Privacy Doc
                </p>
                <p className=" col-span-1 text-gray-700 text-base font-normal">
                  {" "}
                  Sales Call Evaluator
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 max-lg:flex-col justify-between my-10">
            <div className=" flex justify-center gap-8 max-lg:gap-4 ">
              <div className=" w-12 h-12 p-4 group hover:bg-blue-700 rounded-full shadow-lg flex justify-center items-center">
                <FaFacebookF className=" w-8 h-8 group-hover:text-white " />
              </div>
              <div className=" w-12 h-12 p-4 rounded-full group hover:bg-pink-600 shadow-lg flex justify-center items-center">
                <FaInstagram className="w-8 h-8 group-hover:text-white" />
              </div>
              <div className=" w-12 h-12 p-4 rounded-full hover:bg-blue-600 group shadow-lg flex justify-center items-center">
                <FaLinkedinIn className="w-8 h-8 group-hover:text-white" />
              </div>
            </div>
            <p className="col-span-2 text-center max-lg:my-4 text-gray-700">
              2024 © All rights reserved by Bluetick Consultants LLP{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
