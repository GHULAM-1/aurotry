import React from "react";
import Navbar from "./navbar";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[807px] sm:h-[990px] lg:h-[1485px] flex gap-[10px] items-center justify-center p-[20px] overflow-hidden">
      <div className="relative min-w-[420px] max-w-[964px] h-[807px] lg:max-w-[1400px] lg:min-w-[1000px] w-full sm:h-[990px] lg:h-[1445px] overflow-hidden bg-white rounded-[20px] top-[10px] left-[0px] lg:top-[0px] lg:left-[0px]  ">
        <div className="relative w-full p-8">
          <Navbar />
        </div>
        <div className="relative z-10">
        <div className="absolute w-[360px] h-[552px] top-[112px] sm:w-[600px] sm:h-[728px] lg:w-[1250px] lg:h-[1064px] flex flex-col items-center gap-[60px] left-1/2 -translate-x-1/2 lg:top-[274px]">

            <div className="w-full h-[294px] sm:h-[312px] lg:h-[320px] flex flex-col gap-[12px] sm:gap-[24px]">
              <div className="w-[360px] h-[114px] text-[32px] sm:text-[42px] sm:w-[600px] lg:w-[1250px] lg:h-[160px] text-center font-semibold lg:text-[80px] leading-[100%] tracking-[-2%]">
                Revolutionize Online Shopping with AR Clothing Previews
              </div>
              <div className="text-[#00000060] text-[18px] sm:text-[23px] lg:text-[27px] font-semibold leading-[120%] tracking-[0%] text-center">
                Let your customers see themselves in your clothes—before they
                buy. Boost confidence, reduce returns, and elevate your
                e-commerce experience.
              </div>
              <div className="w-full flex justify-center">
                <div className="w-[147px] h-[44px] lg:w-[163px] lg:h-[48px] flex justify-center items-center gap-[16px] p-[6px] pl-[20px] lg:pl-[24px] text-[14px] text-white bg-[#8046fd] rounded-full">
                  Try it now
                  <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-white text-black">
                    <MoveRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[360px] h-[198px] sm:w-[640px] sm:h-[350px] lg:w-[1243px] lg:h-[684px] ">
              <Image
                src="/assets/images/hero-image.png"
                alt="hero-img"
                fill={true}
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-[1032px] w-[1400px] h-[413px] overflow-hidden bg-gradient-to-t from-[#F7F8FF] to-[#f7f8ff00] z-[5]"></div>
          <div
            className="absolute w-[635.03px] h-[436.72px] left-[-207px] top-[502px] 
             bg-gradient-to-b from-[rgba(237,106,94,0.5)] via-[rgba(194,135,232,0.5)] to-[rgba(174,184,254,0.5)] blur-[100px]"
          ></div>
          <div className="absolute w-[601px] h-[372px] left-[-83px] top-[-168px] bg-gradient-to-b from-[rgba(128,70,253,0.4)] to-[rgba(117,139,253,0.4)] blur-[100px]"></div>
          <div className="absolute w-[442.1px] h-[343.62px] left-[1131.55px] top-[-167.67px] bg-gradient-to-b from-[rgba(128,70,253,0.3)] to-[rgba(206,83,71,0.3)] blur-[100px] rotate-[28deg]"></div>
          <div className="absolute w-[849.21px] h-[608.39px] left-[721.68px] top-[572.89px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(247,135,100,0.7)_0%,rgba(174,184,254,0.7)_100%)] blur-[100px] rotate-[-156.99deg]"></div>
          <div className="absolute w-[601px] h-[372px] left-[-44px] top-[1153px] bg-[linear-gradient(180deg,rgba(128,70,253,0.4)_0%,rgba(117,139,253,0.4)_100%)] blur-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
