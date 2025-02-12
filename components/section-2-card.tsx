import Image from "next/image";
import React from "react";

interface SectionTwoCardProps {
  title: string;
  description: string;
}
const SectionTwoCard = ({ title, description }: SectionTwoCardProps) => {
  return (
    <div className="py-4 px-10 bg-[#E6E9FF80] rounded-xl">
      <div className="flex flex-col gap-y-4">
        <div className="text-lg sm:text-[1.313rem] 3xl:text-[3rem] font-semibold text-[#A0A0A2]">
          {title}
        </div>
        <div className="relative w-20 h-12 md:h-12 lg:h-16 2xl:h-24">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            fill={true}
            className="object-contain"
          />
        </div>
        <div className="text-lg sm:text-[1.313rem] 3xl:text-[3rem] leading-[1.575rem] 3xl:leading-[3rem] font-semibold">
          {description}
        </div>
      </div>
    </div>
  );
};

export default SectionTwoCard;
