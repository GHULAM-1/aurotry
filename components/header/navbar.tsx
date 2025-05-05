import { Menu, MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const Navbar = () => {
  return (
    <div className="relative w-full max-w-[964px] min-w-[250px] h-[56px] p-[8px] lg:max-w-[1320px] lg:min-w-[964px] lg:h-[72px] lg:px-[16px] lg:py-[12px]  flex justify-between items-center rounded-full bg-white z-10">
      <div className="flex lg:hidden">
        <div className="relative w-[40px] h-[40px] flex-none order-0">
          <Image src="/assets/images/logo.png" alt="" fill={true} />
        </div>
      </div>
      <div className="flex lg:hidden">
        <div className="w-[40px] h-[40px] bg-[#CACACB] rounded-full flex items-center justify-center">
          <Menu />
        </div>
      </div>
      <div className="hidden lg:flex flex-row items-center p-0 gap-10 w-[320px] h-[40px]">
        <div className="relative w-[40px] h-[40px] flex-none order-0">
          <Image src="/assets/images/logo.png" alt="" fill={true} />
        </div>

        <p className="w-[7px] h-[25px] font-['Work_Sans'] font-semibold text-[21px] leading-[120%] text-[#CACACB] flex-none order-1">
          |
        </p>
        <p className="w-[82px] h-[25px] font-['Work_Sans'] font-semibold text-[21px] leading-[120%] text-[#0F0F12] flex-none order-2">
          Product
        </p>
        <p className="w-[71px] h-[25px] font-['Work_Sans'] font-semibold text-[21px] leading-[120%] text-[#0F0F12] flex-none order-3">
          Pricing
        </p>
      </div>
      <div className="hidden lg:flex flex-row justify-center items-center p-0 gap-10 w-[437px] h-[48px] flex-none order-1">
        <p className="w-[113px] h-[25px] font-['Work_Sans'] font-semibold text-[21px] leading-[120%] text-[#0F0F12] flex-none order-0">
          Contact us
        </p>
        <p className="w-[7px] h-[25px] font-['Work_Sans'] font-semibold text-[21px] leading-[120%] text-[#CACACB] flex-none order-1">
          |
        </p>

        <p className="w-[63px] h-[25px] font-['Work_Sans'] font-semibold text-[21px] leading-[120%] text-[#0F0F12] flex-none order-2">
          Log In
        </p>
        <div className="flex flex-row justify-center items-center p-[6px] pl-[20px] gap-[12px] w-[134px] h-[48px] bg-[#0F0F12] rounded-full flex-none order-3">
          <p className="w-[60px] h-[19px] font-['Work_Sans'] font-semibold text-[16px] leading-[120%] text-[#FFFFFF] flex-none order-0">
            Sign Up
          </p>
          <div className="w-[36px] h-[36px] bg-[#FFFFFF] rounded-full flex items-center justify-center">
            <MoveRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
