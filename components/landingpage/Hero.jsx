import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="w-full bg-fllopydisk bg-[url('/img/hero-bg.png')] bg-contain bg-center bg-no-repeat">
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
        <div className="flex justify-center flex-col sm:flex-row gap-3 items-center">
          <button
            type="submit"
            className="text-white border-b-[1.5px] border-b-white py-2 hover:text-banafsajipurple hover:border-b-banafsajipurple text-[16px] leading-6 font-bold font-hankengrotesk"
          >
            Learn More
          </button>
          <button type="submit"></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
