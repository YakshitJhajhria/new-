import React, { useState } from "react";
import { CrossIcon, Logo, RightarrowIcon } from "../common/icons";
import Link from "next/link";
import { iconLinks, sidekinks } from "../common/helper";
import Aboutsidebar from "./dropdown-sidebars/Aboutsidebar";
import Resourcesidebar from "./dropdown-sidebars/Resourcesidebar";
import Projectsidebar from "./dropdown-sidebars/Projectsidebar";
import Comunitysidebar from "./dropdown-sidebars/Comunitysidebar";

const Sidebar = ({ toggleNavbar }) => {
  const [aboutSidebar, setAboutSidebar] = useState(false);

  const toggleAbout = () => {
    setAboutSidebar(!aboutSidebar);
  };
  const [projectSidebar, setProjectSidebar] = useState(false);

  const toggleProject = () => {
    setProjectSidebar(!projectSidebar);
  };
  const [resourceSidebar, setResourceSidebar] = useState(false);

  const toggleResource = () => {
    setResourceSidebar(!resourceSidebar);
  };
  const [comunitySidebar, setomunitySidebar] = useState(false);

  const toggleComunity = () => {
    setomunitySidebar(!comunitySidebar);
  };
  return (
    <div className="bg-fllopydisk flex flex-col justify-between h-[896px] pb-10 px-6">
      <div className="flex flex-col gap-[48px]">
        <div className="py-4 flex justify-between items-center">
          <div>
            <Logo />
          </div>
          <div>
            <button
              type="submit"
              className="hover:rotate-180 duration-500"
              onClick={toggleNavbar}
            >
              <CrossIcon />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <p className="text-white text-[20px] fonr-normal leading-7 font-hankengrotesk hover:text-banafsajipurple duration-500 cursor-pointer">
                About Us
              </p>
              <div
                className={`absolute top-[128px] w-full duration-700 ${
                  aboutSidebar ? "left-0" : "left-[-150%]"
                }`}
              >
                <Aboutsidebar toggleAbout={toggleAbout} />
              </div>
              <div>
                <button type="submit" onClick={toggleAbout}>
                  <RightarrowIcon />
                </button>
              </div>
            </div>
            <div className="bg-naggarothnight w-full h-[1px]"></div>
          </div>
          {sidekinks.map((items, index) => (
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
            <p className="text-white text-[20px] fonr-normal leading-7 font-hankengrotesk hover:text-banafsajipurple duration-500 cursor-pointer">
              Projects
            </p>
            <div
              className={`absolute top-[128px] w-full duration-700 ${
                projectSidebar ? "left-0" : "left-[-150%]"
              }`}
            >
              <Projectsidebar toggleProject={toggleProject} />
            </div>
            <div>
              <button type="submit">
                <RightarrowIcon />
              </button>
            </div>
          </div>
          <div className="bg-naggarothnight w-full h-[1px]"></div>
          <div className="flex justify-between items-center">
            <p className="text-white text-[20px] fonr-normal leading-7 font-hankengrotesk hover:text-banafsajipurple duration-500 cursor-pointer">
              Resources
            </p>
            <div
              className={`absolute top-[128px] w-full duration-700 ${
                resourceSidebar ? "left-0" : "left-[-150%]"
              }`}
            >
              <Resourcesidebar toggleResource={toggleResource} />
            </div>
            <div>
              <button type="submit">
                <RightarrowIcon />
              </button>
            </div>
          </div>
          <div className="bg-naggarothnight w-full h-[1px]"></div>
          <div className="flex justify-between items-center">
            <p className="text-white text-[20px] fonr-normal leading-7 font-hankengrotesk hover:text-banafsajipurple duration-500 cursor-pointer">
              Community
            </p>
            <div
              className={`absolute top-[128px] w-full duration-700 ${
                comunitySidebar ? "left-0" : "left-[-150%]"
              }`}
            >
              <Comunitysidebar toggleComunity={toggleComunity} />
            </div>
            <div>
              <button type="submit">
                <RightarrowIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[48px]">
        <div>
          <button
            type="submit"
            className="text-center rounded-[80px] bg-burningfireflies flex justify-center items-center py-4 px-8 max-w-[366px] w-full h-[56px] mx-auto text-white text-[16px] font-hankengrotesk font-bold leading-6 hover:bg-white hover:text-burningfireflies border border-burningfireflies duration-300"
          >
            Contact Us
          </button>
        </div>
        <div className="flex gap-6 mx-auto w-fit items-center">
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

export default Sidebar;
