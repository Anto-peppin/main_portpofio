import React, { useState } from "react";
import { SparklesText } from "./sparkless";
import { HiMenuAlt3 } from "react-icons/hi";
const Nav = () => {
  return (
    <div className="w-full p-2 sticky top-0 shadow-sm shadow-white z-9999 bg-black">
      <div className="w-[90%] mx-auto rounded-4xl text-white flex items-cnter justify-between border-2 px-2 py-1">
        <ul className="flex justify-between items-center px-3 w-full gap-2 sm:justify-around">
          <li className=" gap-2 items-center sm:gap-8 hidden sm:flex">
            <a href="#home">
              <span className="cursor-pointer">Home</span>
            </a>
            <a href="#project">
              <span className="cursor-pointer">Projects</span>
            </a>
          </li>

          <li className="flex items-end gap-1">
            <SparklesText className="text-xl whitespace-nowrap  ">
              PORTFOLIO
            </SparklesText>
          </li>

          <li className=" gap-1 items-center sm:gap-8 hidden sm:flex">
            <a href="#skill">
              {" "}
              <span className="cursor-pointer">Skills</span>
            </a>
            <a href="#contact">
              <span className="cursor-pointer">Contact</span>
            </a>
          </li>

          <div className="drawer drawer-end inline-block sm:hidden">
            <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-5"
                className="drawer-button flex justify-end cursor-pointer"
              >
                {" "}
                <HiMenuAlt3 />{" "}
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-5"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-black min-h-full w-fit pt-10 p-6">
                {/* Sidebar content here */}
                <a href="#home">
                  <li className="p-2 px-3 font-bold text-xl cursor-pointer text-transparent bg-linear-[to_top,blue,white] bg-clip-text ">
                    Home
                  </li>
                </a>
                <a href="#project">
                  {" "}
                  <li className="p-2 px-3 font-bold text-xl cursor-pointer text-transparent bg-linear-[to_top,blue,white] bg-clip-text ">
                    Projects
                  </li>
                </a>
                <a href="#skill">
                  {" "}
                  <li className="p-2 px-3 font-bold text-xl cursor-pointer text-transparent bg-linear-[to_top,blue,white] bg-clip-text ">
                    Skills
                  </li>
                </a>
                <a href="#contact">
                  {" "}
                  <li className="p-2 px-3 font-bold text-xl cursor-pointer text-transparent bg-linear-[to_top,blue,white] bg-clip-text ">
                    Contact
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
