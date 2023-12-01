import Image from "next/image";
import React from "react";
import { DotIcon } from "../common/icons";
import { productCards } from "../common/helper";

const Products = () => {
  return (
    <div className="bg-fllopydisk py-8 sm:py-8 md:py-10 lg:py-12 xl:py-16 px-6">
      <div className="bg-fllopydisk max-w-[1264px] w-full mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-6 text-center max-w-[660px] w-full mx-auto">
          <div>
            <p className="text-white text-[36px] sm:text-[44px] leading-[48px] sm:leading-[56px] font-semibold font-hankengrotesk">
              A short title about products
            </p>
          </div>
          <div>
            <p className="text-lavendorboquet text-[16px] leading-6 font-normal font-hankengrotesk">
              Eclipse Temurin offers high-performance, cross-platform,
              open-source Java runtime binaries that are enterprise-ready and
              Java SE TCK-tested for general use in the Java ecosystem.
            </p>
          </div>
        </div>
        <div className="flex max-lg:flex-wrap lg:flex-row gap-6 items-center justify-center lg:justify-between w-full">
          {productCards.map((items, index) => (
            <div
              key={index}
              className="p-6 md:p-16 max-w-[400px] w-full h-[500px] flex flex-col justify-between items-start bg-[var(--tones-white-5,rgba(255,255,255,0.05))] rounded-[24px] border-[2px] border-nightlyactivities"
            >
              <div>
                <Image src={items.img} alt="logo" width={120} height={120} />
              </div>
              <div className="flex flex-col gap-8 items-start">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-3 items-center">
                    <div>{items.icon}</div>
                    <div>
                      <p className="text-burningfireflies font-hankengrotesk font-bold text-[16px] leading-6">
                        {items.ovrln}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-hankengrotesk font-semibold text-[24px] sm::text-[32px] leading-[34px] sm:leading-10">
                      {items.text}
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="rounded-[80px] text-white font-hankengrotesk font-bold text-[16px] leading-6 px-8 py-3 border-[2px] border-burningfireflies border-r-burningfireflies/50 hover:bg-burningfireflies duration-300"
                  >
                    {items.btn}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
