import React from "react";
import SectionFourCard from "../section-4-card";
import { basicPkg, enterprisePkg, premiumPkg } from "@/constants/packages-data";

const SectionFourContent = () => {
  return (
    <div className="my-12 px-5 lg:px-16">
      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-3 items-center gap-x-5">
        <SectionFourCard
          name={basicPkg.name}
          description={basicPkg.description}
          benifits={basicPkg.benifits}
          ButtonLabel={basicPkg.ButtonLabel}
        />
        <SectionFourCard
          name={premiumPkg.name}
          description={premiumPkg.description}
          benifits={premiumPkg.benifits}
          ButtonLabel={premiumPkg.ButtonLabel}
          isPremium
          color1="#e3e8ff"
          color2="#e2e6ff"
        />
        <SectionFourCard
          name={enterprisePkg.name}
          description={enterprisePkg.description}
          benifits={enterprisePkg.benifits}
          ButtonLabel={enterprisePkg.ButtonLabel}
        />
      </div>
    </div>
  );
};

export default SectionFourContent;
