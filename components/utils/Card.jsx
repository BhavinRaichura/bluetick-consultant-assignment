"use client";
import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "../styles/card.module.css";

const Card = ({ title, desc, url }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh;
  }, []);
  return (
    <div
      className={`group ${styles.blogcard} priority-3 `}
      /*' group w-full h-full bg-white hover:bg-gray-50 text-black  p-5 rounded-md shadow-lg hover:-translate-y-2 transition-all overflow-hidden'*/ data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <h2 className=" text-2xl max-sm:text-xl font-semibold mb-2 ">{title}</h2>
      <p className="mb-2 text-desc ">{desc}</p>
      <p className=" text-primary pt-4 " style={{ width: "calc(100% - 1rem)" }}>
        <a href={url} className="" target="_blank">
          <span className="peer">Read more</span>
          <span>
            <FaArrowRightLong className="group-hover:w-8  w-0 transition-all h-3 inline-block" />
          </span>
        </a>
      </p>
    </div>
  );
};

export default Card;
