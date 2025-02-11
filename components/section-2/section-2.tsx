import React from "react";
import SectionTwoCard from "../section-2-card";

const SectionTwo = () => {
  return (
    <div className="my-2 mx-4">
      <div className="flex flex-col md:flex-row gap-6">
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
  );
};

export default SectionTwo;
