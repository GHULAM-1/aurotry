import React from "react";
import SectionFourHeader from "./section-4-header";
import SectionFourContent from "./section-4-content";

type Props = {};

const SectionFour = () => {
  return (
    <div className="my-16">
      <div className="flex items-center justify-center">
        <SectionFourHeader />
      </div>
      <div>
        <SectionFourContent />
      </div>
    </div>
  );
};

export default SectionFour;
