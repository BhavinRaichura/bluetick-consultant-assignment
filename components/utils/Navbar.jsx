"use client";
import Image from "next/image";
import React, { useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

import styles from "../styles/nav.module.css";

const imageUrl =
  "https://generative-ai.bluetickconsultants.com/images/bluetick-consultants.png";

const Navbar = () => {
  const [open, setOpen] = useState(0);
  return (
    <nav className="w-full text-black fixed left-0 top-0 backdrop-blur-lgs px-20 max-lg:px-10 priority-1 ">
      <div className=" flex justify-between items-center">
        <div className="">
          <img src={imageUrl} className=" w-40 h-16 p-3 " />
        </div>
        <div>
          <button className="lg:hidden" onClick={() => setOpen((e) => !e)}>
            <HiMenuAlt3 className="w-8 h-8" />
          </button>
          <ul className="flex gap-10 max-lg:hidden">
            <li>
              <a
                className={` ${styles.navRuteText} group text-secondary active:text-primary hover:text-primary`}
                href="#home"
              >
                {" "}
                HOME{" "}
                <span
                  className={`${styles.navRouteUnderline} group-hover:w-full animation-fast`}
                ></span>
              </a>
            </li>
            <li>
              <a
                className={` ${styles.navRuteText} group text-secondary active:text-primary hover:text-primary`}
                href="#product"
              >
                {" "}
                PRODUCT{" "}
                <span
                  className={`${styles.navRouteUnderline} group-hover:w-full animation-fast`}
                ></span>
              </a>
            </li>
            <li>
              <a
                className={` ${styles.navRuteText} group text-secondary active:text-primary hover:text-primary`}
                href="#blog"
              >
                {" "}
                BLOG{" "}
                <span
                  className={`${styles.navRouteUnderline} group-hover:w-full animation-fast`}
                ></span>
              </a>
            </li>
            <li>
              <a
                className={` ${styles.navRuteText} group text-secondary active:text-primary hover:text-primary`}
                href="#contact"
              >
                {" "}
                CONTACT US{" "}
                <span
                  className={`${styles.navRouteUnderline} group-hover:w-full animation-fast`}
                ></span>
              </a>
            </li>
          </ul>

          {
            /* Mobile nav view */

            <div
              className={` pt-3 px-5 lg:hidden h-screen w-64 top-0 right-0 bg-gray-50 fixed animation-slow priority-1 ${
                open ? "-translate-x-0" : " translate-x-96"
              }`}
            >
              <button
                className="lg:hidden float-end"
                onClick={() => setOpen((e) => !e)}
              >
                <MdOutlineClose className=" w-8 h-8 my-2 " />
              </button>
              <ul className="flex gap-2  flex-col w-full bg-gray-50">
                <li>
                  <a
                    className={` ${styles.navRuteText} group text-secondary active:text-primary hover:text-primary`}
                    href="#home"
                  >
                    {" "}
                    HOME{" "}
                    <span
                      className={`${styles.navRouteUnderline} group-hover:w-full animation-fast`}
                    ></span>
                  </a>
                </li>
                <li>
                  <a
                    className={` ${styles.navRuteText} group text-secondary active:text-primary hover:text-primary`}
                    href="#product"
                  >
                    {" "}
                    PRODUCT{" "}
                    <span
                      className={`${styles.navRouteUnderline} group-hover:w-full animation-fast`}
                    ></span>
                  </a>
                </li>
                <li>
                  <a
                    className={` ${styles.navRuteText} group text-secondary active:text-primary hover:text-primary`}
                    href="#blog"
                  >
                    {" "}
                    BLOG{" "}
                    <span
                      className={`${styles.navRouteUnderline} group-hover:w-full animation-fast`}
                    ></span>
                  </a>
                </li>
                <li>
                  <a
                    className={` ${styles.navRuteText} group text-secondary active:text-primary hover:text-primary`}
                    href="#contact"
                  >
                    {" "}
                    CONTACT US{" "}
                    <span
                      className={`${styles.navRouteUnderline} group-hover:w-full animation-fast`}
                    ></span>
                  </a>
                </li>
              </ul>
            </div>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
