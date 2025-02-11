import React from "react";
import SectionThreeHeader from "./section-3-header";
import SectionThreeContent from "./section-3-content";

const SectionThree = () => {
  return (
    <div className="flex flex-col gap-x-10">
      <div className="my-10">
        <SectionThreeHeader />
      </div>
      <div className="my-10">
        <SectionThreeContent />
      </div>
    </div>
  );
};

export default SectionThree;
