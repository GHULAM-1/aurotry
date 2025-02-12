import React from "react";
import { Button } from "../ui/button";
import { MoveRight, MoveUpRight } from "lucide-react";

const SectionFourHeader = () => {
  return (
    <div className="px-5 w-[29.25rem] md:w-[35rem] lg:w-[42rem] xl:w-[48rem] 1.5xl:w-[75rem] 3xl:w-[75rem] lg:px-16">
      <div className="flex flex-col items-center justify-center text-center gap-y-5">
        <div className="text-3xl sm:text-3xl md:text-4xl 2xl:text-[5rem] 2xl:leading-[4.5rem] font-semibold">
          Ready to Transform Your E-Commerce Experience?
        </div>
        <div className="text-[1rem] leading-[1.325rem] text-[#737477] sm:leading-[2rem] sm:text-xl md:text-2xl 2xl:text-[2.3rem] font-semibold max-w-4xl xl:max-w-7xl 2xl:leading-[3rem]">
          Choose an Aurotry plan that fits your budget and busisness goals
        </div>
        <Button className="w-[16.3rem] px-[0.2rem] py-5 shadow-none rounded-full flex justify-between items-center">
          <span className="ml-2 text-base font-semibold capitalize">
            Start your free trial today
          </span>
          <span className="p-2 bg-white text-black rounded-full">
            <MoveRight />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default SectionFourHeader;
