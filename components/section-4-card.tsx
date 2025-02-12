import CheckIcon from "@/public/icons/check-icon";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import { Separator } from "./ui/separator";

interface SectionFourCardProps {
  name: string;
  description: string;
  ButtonLabel: string;
  benifits: string[];
  isPremium?: boolean;
  color1?: string;
  color2?: string;
}

const SectionFourCard = ({
  name,
  description,
  ButtonLabel,
  isPremium,
  benifits,
  color1,
  color2,
}: SectionFourCardProps) => {
  const backgroundStyle =
    color1 && color2
      ? { background: `linear-gradient(to bottom, ${color1}, ${color2})` }
      : {};

  return (
    <div
      className="py-5 px-5 border border-[#CACACB] h-[32rem] lg:h-[36rem] md:px-8 rounded-3xl flex flex-col"
      style={backgroundStyle}
    >
      <div className="flex flex-col gap-y-10 flex-grow">
        <div className="flex flex-col gap-y-5 lg:gap-y-10">
          <div className="text-2xl font-semibold">{name}</div>
          <div className="text-lg font-semibold leading-5 text-[#737477]">
            {description}
          </div>
        </div>
        <Separator
          className={`border ${
            isPremium ? "border-[#0000003c]" : "border-[#E9E9E9]"
          }`}
        />
        <div className="flex flex-col gap-y-5">
          {benifits.map((benifit, index) => (
            <div className="flex items-center gap-x-4" key={index}>
              <div>
                <CheckIcon />
              </div>
              <div className="text-base font-medium">{benifit}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto flex justify-end">
        <Button
          className={`${
            isPremium ? "w-[14rem]" : "w-[12rem]"
          } px-[0.2rem] py-5 shadow-none bg-transparent hover:bg-transparent border border-[#CACACB] rounded-full flex justify-between items-center`}
        >
          <span className="ml-2 text-black text-base font-semibold">
            {ButtonLabel}
          </span>
          <span className="p-2 bg-black rounded-full">
            <MoveRight />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default SectionFourCard;
