import React from "react";

const Faq = () => {
  return (
    <div className="bg-fllopydisk px-6 xl:px-0 py-8 sm:py-16">
      <div className="max-w-[1264px] w-full mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-6">
        <div className="p-8 sm:p-10 backdrop-blur-md rounded-[24px] border border-nightlyactivities bg-[var(--tones-white-5,rgba(255,255,255,0.05))] flex flex-col justify-between max-w-[420px] w-full h-[552px]">
          <div className="flex flex-col gap-6">
            <div className="max-w-[310px] w-full">
              <p className="text-white font-hankengrotesk font-semibold text-[30px] leading-[38px] sm:text-[40px] sm:leading-[48px]">
                Frequently asked questions
              </p>
            </div>
            <div>
              <p className="text-lavendorboquet text-[24px] leading-7 font-normal font-hankengrotesk">
                Eclipse Temurin offers high-performance, cross-platform,
                open-source Java runtime.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-white text-[20px] leading-7 font-hankengrotesk font-semibold">
                Have a question that hasn’t been answered? Get in touch
              </p>
            </div>
            <div>
              <div className="rounded-[80px] p-[2px] bg-gradient-to-r from-burningfireflies hover:bg-burningfireflies group duration-300 w-fit">
                <button
                  type="submit"
                  className="rounded-[80px] text-white font-hankengrotesk font-bold text-[16px] leading-6 px-8 py-3 bg-fllopydisk group-hover:bg-burningfireflies duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Faq;
