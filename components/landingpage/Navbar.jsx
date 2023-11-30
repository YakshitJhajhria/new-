import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Logo, MenuIcon } from "../common/icons";
import Link from "next/link";
import Image from "next/image";
import AboutDropdown from "./menu-dropdowns/Aboutdropdown";
import ProjectsDropdown from "./menu-dropdowns/Projectdropdown";
import ResourcesDropdown from "./menu-dropdowns/Resourcedropdown";
import ComunityDropdown from "./menu-dropdowns/Conmunitydropdown";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleNavbar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="max-w-[1440px] w-full px-6 sm:px-[44px] xl:px-[88px] py-4 sm:py-6 lg:py-8 flex justify-between gap-6 items-center">
      <style jsx>
        {`
          .btn10 {
            position: relative;
            overflow: hidden !important;
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            background: transparent !important;
            z-index: 10;
          }

          .btn10:hover {
            border: 2px solid #ff1464;
            color: #fff !important;
          }
          .btn10::before {
            content: "";
            width: 0%;
            height: 100%;
            display: block;
            background: #ff1464;
            position: absolute;
            -ms-transform: skewX(-20deg);
            -webkit-transform: skewX(-20deg);
            transform: skewX(-20deg);
            left: -10%;
            opacity: 1;
            top: 0;
            z-index: -12;
            -moz-transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
            -o-transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
            -webkit-transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
            transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
            box-shadow: 2px 0px 14px rgba(0, 0, 0, 0.6);
          }
          .btn10:hover::before,
          .btn1O:hover::before {
            opacity: 1;
            width: 116%;
          }
          .btn10:hover::after,
          .btn1O:hover::after {
            opacity: 1;
            width: 120%;
          }
        `}
      </style>
      <div className="w-[174px] h-[38px]">
        <Link href="">
          <Logo />
        </Link>
      </div>
      <div className="max-w-[777px] w-full hidden lg:flex justify-between items-center mx-auto gap-3 ">
        <div>
          <AboutDropdown />
        </div>
        <div>
          <Link
            href=""
            className="text-white text-[16px] font-hankengrotesk leading-[24px] font-normal hover:text-banafsajipurple duration-300"
          >
            Latest Releases
          </Link>
        </div>
        <div>
          <Link
            href=""
            className="text-white text-[16px] font-hankengrotesk leading-[24px] font-normal hover:text-banafsajipurple duration-300"
          >
            Marketplace
          </Link>
        </div>
        <div>
          <ProjectsDropdown />
        </div>
        <div>
          <ResourcesDropdown />
        </div>
        <div>
          <ComunityDropdown />
        </div>
      </div>
      <div className="flex justify-end gap-6 items-center">
        <button
          type="submit"
          className="hidden md:block border-[2px]  border-r-burningfireflies/50 border-burningfireflies rounded-[80px] text-center w-[145px] h-[48px] btn10 text-white hover:bg-burningfireflies duration-700"
        >
          Contact Us
        </button>
        <button
          type="submit"
          className="block lg:hidden"
          onClick={toggleNavbar}
        >
          <MenuIcon />
        </button>
      </div>
      <div
        className={`absolute w-full left-0 duration-500 ${
          sidebar ? "top-0" : "top-[-200%]"
        }`}
      >
        <Sidebar toggleNavbar={toggleNavbar} />
      </div>
    </div>
  );
};

export default Navbar;
