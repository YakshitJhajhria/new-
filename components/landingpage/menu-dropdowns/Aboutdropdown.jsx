import { aboutDropdownLinks } from "@/components/common/helper";
import { DroparrowIcon, RightarrowIcon } from "@/components/common/icons";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

export default function AboutDropdown() {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex items-center justify-center gap-2 font-normal text-white text-[16px] leading-6 font-hankengrotesk hover:text-banafsajipurple group duration-300">
            About
            <DroparrowIcon />
          </Menu.Button>
        </div>
        <Menu.Items className="absolute left-0 mt-3 p-6 w-[176px] text-left origin-top-right bg-blackhtun rounded-[24px]">
          <div className="flex flex-col gap-4">
            {aboutDropdownLinks.map((items, index) => (
              <div key={index} className="flex flex-col gap-4">
                <Link
                  href={items.link}
                  className="text-white hover:text-banafsajipurple hover:font-bold duration-300 font-normal text-[16px] leading-6 font-hankengrotesk"
                >
                  {items.name}
                </Link>
                <div className="w-full h-[1px] bg-naggarothnight"></div>
              </div>
            ))}
            <Link
              href=""
              className="text-white hover:text-banafsajipurple hover:font-bold duration-300 font-normal text-[16px] leading-6 font-hankengrotesk"
            >
              Support Us
            </Link>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
