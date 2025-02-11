import Image from "next/image";
import React from "react";

interface SectionTwoCardProps {
  title: string;
  description: string;
}
const SectionTwoCard = ({ title, description }: SectionTwoCardProps) => {
  return (
    <div className="py-2 px-8 bg-[#E6E9FF80] rounded-xl">
      <div className="flex flex-col gap-y-4">
        <div className="text-xl font-semibold text-[#A0A0A2]">{title}</div>
        <div className="">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            height={30}
            width={30}
          />
        </div>
        <div className="text-xl font-semibold">{description}</div>
      </div>
    </div>
  );
};

export default SectionTwoCard;
