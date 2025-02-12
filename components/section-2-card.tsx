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
        <div className="text-[1.313rem] font-semibold text-[#A0A0A2]">{title}</div>
        <div className="">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            height={40}
            width={40}
          />
        </div>
        <div className="text-[1.313rem] leading-[1.575rem] font-semibold">{description}</div>
      </div>
    </div>
  );
};

export default SectionTwoCard;
