import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { MoveUpRight } from "lucide-react";

interface SectionThreeCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  colorOne: string;
  colorTwo: string;
  bottom: number;
  right: number;
  height: number;
  width: number;
  mobileHeight: number;
  mobileWidth: number;
}

const SectionThreeCard = ({
  title,
  description,
  image,
  icon,
  colorOne,
  colorTwo,
  bottom,
  right,
  height,
  width,
  mobileHeight,
  mobileWidth,
}: SectionThreeCardProps) => {
  return (
    <div
      className=" relative px-8 py-4 h-[28rem] md:h-[37rem] rounded-3xl overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${colorOne}, ${colorTwo})`,
      }}
    >
      <div className="flex flex-col h-full gap-y-8 1.5xl:gap-y-0 1.5xl:justify-between">
        <div className="flex items-center gap-x-3">
          <div>{icon}</div>
          <div className="text-2xl md:text-4xl font-semibold">{title}</div>
        </div>
        <div className="flex w-full justify-between items-end">
          <div className="flex flex-col gap-y-6">
            <div className="text-xl font-semibold text-[#737477] w-full md:w-96 1.5xl:w-64">
              {description}
            </div>
            <Button className="w-[10rem] px-[0.2rem] py-5 shadow-none bg-transparent hover:bg-transparent border border-[#CACACB] rounded-full flex justify-between items-center">
              <span className="ml-2 text-black text-base font-semibold">
                Learn More
              </span>
              <span className="p-2 bg-black rounded-full">
                <MoveUpRight />
              </span>
            </Button>
          </div>
          <div
            className="absolute w-1/3 h-1/3 sm:h-1/2 md:h-2/3 lg:h-1/2 lg:w-1/2 2xl:h-2/3 2xl:w-1/3 "
            style={{ bottom: bottom, right: right }}
          >
            <Image className="w-full" src={image} fill={true} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThreeCard;
