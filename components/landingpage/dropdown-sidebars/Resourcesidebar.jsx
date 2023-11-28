import { resourceLinks } from "@/components/common/helper";
import { BackarrowIcon } from "@/components/common/icons";
import Link from "next/link";
import React from "react";

const Resourcesidebar = ({ toggleResource }) => {
  return (
    <div className="bg-fllopydisk flex flex-col justify-between pb-10 px-6">
      <div className="flex flex-col gap-[48px]">
        <div className="py-4 flex gap-6 items-center">
          <div className="order-2">
            <p className="text-white text-[20px] fonr-normal leading-7 font-hankengrotesk">
              Resources
            </p>
          </div>
          <div>
            <button type="submit" className="order-1" onClick={toggleResource}>
              <BackarrowIcon />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {resourceLinks.map((items, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <Link
                  href={items.link}
                  className="text-white text-[20px] fonr-normal leading-7 font-hankengrotesk hover:text-banafsajipurple duration-500"
                >
                  {items.name}
                </Link>
              </div>
              <div className="bg-naggarothnight w-full h-[1px]"></div>
            </div>
          ))}
          <div className="flex justify-between items-center">
            <Link
              href=""
              className="text-white text-[20px] fonr-normal leading-7 font-hankengrotesk hover:text-banafsajipurple duration-500 cursor-pointer"
            >
              Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resourcesidebar;
