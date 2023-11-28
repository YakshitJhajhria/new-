import { projectDropdownLinks } from "@/components/common/helper";
import { RightarrowIcon } from "@/components/common/icons";
import { Menu } from "@headlessui/react";
import Link from "next/link";

export default function ProjectsDropdown() {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-white hover:text-banafsajipurple group duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            Projects
            <RightarrowIcon
              className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Menu.Items className="absolute right-0 p-6 w-[176px] text-left origin-top-right bg-blackhtun rounded-[24px]">
          <div className="flex flex-col gap-4">
            {projectDropdownLinks.map((items, index) => (
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
