import React from "react";

const Aboutsidebar = () => {
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
              <div>
                <RightarrowIcon />
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
          {dropdownLinks.map((items, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <p className="text-white text-[20px] fonr-normal leading-7 font-hankengrotesk hover:text-banafsajipurple duration-500 cursor-pointer">
                  {items.name}
                </p>
                <div>{items.icon}</div>
              </div>
              <div className="bg-naggarothnight w-full h-[1px]"></div>
            </div>
          ))}
          <div className="flex justify-between items-center">
            <p className="text-white text-[20px] fonr-normal leading-7 font-hankengrotesk hover:text-banafsajipurple duration-500 cursor-pointer">
              Community
            </p>
            <div>
              <RightarrowIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsidebar;
