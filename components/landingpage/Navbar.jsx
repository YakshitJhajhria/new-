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
    <div className="max-w-[1440px] w-full px-6 xl:px-[88px] py-4 sm:py-6 lg:py-8 flex justify-between gap-6 items-center">
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
        <div className="rounded-[80px] p-[2px] bg-gradient-to-r from-burningfireflies hover:bg-burningfireflies group duration-300 hidden sm:block">
          <button
            type="submit"
            className="rounded-[80px] text-white font-hankengrotesk font-bold text-[16px] leading-6 w-[145px] h-[48px] text-center bg-fllopydisk group-hover:bg-burningfireflies duration-300"
          >
            Contact Us
          </button>
        </div>
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
