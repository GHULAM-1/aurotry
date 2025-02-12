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
//hello

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
      <div className="flex flex-col h-full gap-y-8 md:gap-y-0 md:justify-between">
        <div className="flex items-center gap-x-3">
          <div>{icon}</div>
          <div className="text-2xl md:text-4xl font-semibold">{title}</div>
        </div>
        <div className="flex w-full justify-between items-end">
          <div className="flex flex-col gap-y-6">
            <div className="text-xl font-semibold text-[#737477] w-full md:w-72">
              {description}
            </div>
            <Button className="w-1/3 md:w-1/2 px-[0.2rem] py-5 shadow-none bg-transparent hover:bg-transparent border border-[#CACACB] rounded-full flex justify-between items-center">
              <span className="ml-2 text-black text-base font-semibold">
                Learn More
              </span>
              <span className="p-2 bg-black rounded-full">
                <MoveUpRight />
              </span>
            </Button>
          </div>
          <div className="absolute" style={{ bottom: bottom, right: right }}>
            <Image
              className="hidden md:block"
              src={image}
              alt="image"
              height={height}
              width={width}
            />
            <Image
              className="block md:hidden"
              src={image}
              alt="image"
              height={mobileHeight}
              width={mobileWidth}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThreeCard;
