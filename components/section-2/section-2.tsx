import React from "react";
import SectionTwoCard from "../section-2-card";

const SectionTwo = () => {
  return (
    <div className="my-10 px-5 py-10 lg:px-16">
      <div className="flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <SectionTwoCard
            title="Redefining the shopping experience."
            description="From real-time AR previews, try on virtually, and buy with confidence. "
          />
          <SectionTwoCard
            title="Trusted by the Best"
            description="Join 500+ brands revolutionizing their e-commerce with our Aurotry."
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
