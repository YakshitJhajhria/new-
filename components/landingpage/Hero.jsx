import React from "react";
import Navbar from "./Navbar";
import {
  AdobeIcon,
  AppleIcon,
  AsanaIcon,
  GithubIcon1,
  GoogleIcon,
  SlackIcon1,
  TogglIcon,
} from "../common/icons";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full bg-fllopydisk max-sm:relative sm:bg-[url('/img/hero-bg.png')] bg-origin-content bg-top bg-no-repeat">
      <div className="flex justify-center">
        <div className="absolute top-[80px]">
          <Image
            src="/img/hero-bg-1.png"
            alt="bg-img"
            width={414}
            height={414}
            className="block sm:hidden opacity-50 bg-opacity-50"
          />
        </div>
      </div>
      <Navbar />
      <div className="max-w-[832px] w-full mx-auto px-8 xl:p-0 flex flex-col gap-[40px]">
        <div className="mt-11 text-center">
          <p className="text-white font-hankengrotesk text-[64px] leading-[72px] lg:text-[104px] font-semibold lg:leading-[120px]">
            The power of Eclipse Temurin™
          </p>
        </div>
        <div>
          <p className="text-white text-[24px] leading-8 font-semibold font-hankengrotesk text-center">
            Download Temurin™ for macOS aarch64
          </p>
        </div>
        <div className="flex justify-center flex-col-reverse sm:flex-row gap-6 items-center sm:items-end">
          <button
            type="submit"
            className="text-white border-b-[1.5px] border-b-white py-2 hover:text-banafsajipurple hover:border-b-banafsajipurple text-[16px] duration-300 leading-6 font-bold font-hankengrotesk w-[84px] h-[48px]"
          >
            Learn More
          </button>
          <button
            type="submit"
            className="rounded-[80px] bg-burningfireflies px-8 py-4 flex items-center justify-center gap-3 border-[2px] border-burningfireflies hover:bg-transparent duration-300"
          >
            <AppleIcon />
            <p className="text-white text-[16px] leading-6 font-hankengrotesk font-bold">
              Download Temurin™
            </p>
          </button>
        </div>
      </div>
      <div className="mt-[156px] py-16 px-6 lg:px-0 flex flex-col gap-6 iotems-center justify-center">
        <div>
          <p className="text-lavendorboquet text-[20px] font-hankengrotesk font-normal leading-6 text-center">
            Temurin has been adopted by over 30 companies
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-row justify-center items-center gap-8 xl:gap-16 max-w-[1160px] w-full mx-auto">
          <AdobeIcon />
          <GithubIcon1 />
          <AsanaIcon />
          <GoogleIcon />
          <SlackIcon1 />
          <TogglIcon />
        </div>
      </div>
      <div className="w-full h-[128px] flex items-center">
        <div className="w-full h-[1px] bg-nightlyactivities"></div>
      </div>
    </div>
  );
};

export default Hero;
