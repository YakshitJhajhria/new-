import React from "react";
import { CrossIcon, Logo } from "../common/icons";
import Link from "next/link";
import { sidekinks } from "../common/helper";
import { styles } from "@/styles/styles.module.css";

const Sidebar = ({ toggleNavbar }) => {
  return (
    <>
      <div className="bg-fllopydisk flex flex-col gap-[48px]">
        <div className="px-6 py-4 flex justify-between items-center">
          <div>
            <Logo />
          </div>
          <div>
            <button
              type="submit"
              className="hover:rotate-180 duration-300"
              onClick={toggleNavbar}
            >
              <CrossIcon />
            </button>
          </div>
        </div>
        <div className="px-6 flex flex-col gap-6">
          {sidekinks.map((items, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <Link
                  href={items.link}
                  className="text-white text-[20px] fonr-normal leading-7 font-hankengrotesk hover:text-banafsajipurple duration-300"
                >
                  {items.name}
                </Link>
                <div>{items.icon}</div>
              </div>
              <div className="bg-naggarothnight w-full h-[1px]"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
