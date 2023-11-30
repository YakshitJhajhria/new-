import React from "react";
import Dropdown from "./footer-disclosures/Dropdown";
import Link from "next/link";
import {
  eclipseFoundationLinks,
  iconLinks,
  legalLinks,
  otherLinks,
  usefulLinks,
} from "../common/helper";
import { LogoIcon } from "../common/icons";

const Footer = () => {
  return (
    <div className="w-full px-6 sm:px-7 md:px-8 lg:px-10 xl:px-[88px] bg-fllopydisk py-8 md:py-10 lg:py-12 xl:py-16 flex flex-col gap-8">
      <div>
        <div className="hidden sm:flex flex-wrap justify-between gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-burningfireflies text-[16px] font-bold leading-6 font-hankengrotesk">
                Eclipse Foundation
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {eclipseFoundationLinks.map((items, index) => (
                <div key={index}>
                  <Link
                    href={items.link}
                    className="text-white font-hankengrotesk font-normal text-[16px] leading-6 hover:text-burningfireflies duration-300"
                  >
                    {items.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-burningfireflies text-[16px] font-bold leading-6 font-hankengrotesk">
                Useful Links
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {usefulLinks.map((items, index) => (
                <div key={index}>
                  <Link
                    href={items.link}
                    className="text-white font-hankengrotesk font-normal text-[16px] leading-6 hover:text-burningfireflies duration-300"
                  >
                    {items.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-burningfireflies text-[16px] font-bold leading-6 font-hankengrotesk">
                Legal
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {legalLinks.map((items, index) => (
                <div key={index}>
                  <Link
                    href={items.link}
                    className="text-white font-hankengrotesk font-normal text-[16px] leading-6 hover:text-burningfireflies duration-300"
                  >
                    {items.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-burningfireflies text-[16px] font-bold leading-6 font-hankengrotesk">
                Other
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {otherLinks.map((items, index) => (
                <div key={index}>
                  <Link
                    href={items.link}
                    className="text-white font-hankengrotesk font-normal text-[16px] leading-6 hover:text-burningfireflies duration-300"
                  >
                    {items.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="block sm:hidden">
          <Dropdown />
        </div>
      </div>
      <div className="w-full h-[1px] bg-nightlyactivities"></div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-3">
        <div className="flex gap-4">
          <div>
            <LogoIcon />
          </div>
          <div>
            <p className="text-lavendorboquet text-[14px] leading-5 font-hankengrotesk font-normal">
              Copyright © Eclipse Foundation. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="flex gap-6 w-fit items-center">
          {iconLinks.map((items, index) => (
            <div key={index}>
              <Link href={items.link}>{items.icon}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
