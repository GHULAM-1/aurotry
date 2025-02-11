import React from "react";
import SectionThreeCard from "../Section-3-card";
import CartIcon from "../../public/icons/cart-icon";
import RocketIcon from "../../public/icons/rocket-icon";
import LinkIcon from "../../public/icons/link-icon";
import ArIcon from "../../public/icons/ar-icon";


const SectionThreeContent = () => {
  return (
    <div className="m-4">
      <div className="grid grid-cols-1  md:grid-cols-2  gap-6">
        <SectionThreeCard
          title="Generate Link"
          colorOne="#e0e3ff"
          colorTwo="#ffe3da"
          description="Integrate our AR solution into your e-commerce platform with a single link."
          icon={<LinkIcon />}
          image="/assets/images/generate-link-img.png"
          bottom={20}
          right={20}
          height={200}
          width={200}
          mobileHeight={120}
          mobileWidth={120}
        />
        <SectionThreeCard
          title="Try On Virtually"
          colorOne="#ffdfd5"
          colorTwo="#dbe0ff"
          description="Customers use their camera to see themselves wearing your clothes in real-time."
          icon={<ArIcon />}
          image="/assets/images/try-on-virtual-img.png"
          bottom={0}
          right={0}
          height={250}
          width={250}
          mobileHeight={200}
          mobileWidth={200}
        />
        <SectionThreeCard
          title="Buy with Confidence"
          colorOne="#f7ebcd"
          colorTwo="#eee8f1"
          description="Watch conversions soar as shoppers feel sure about their purchase."
          icon={<RocketIcon />}
          image="/assets/images/buy-with-confidence.png"
          bottom={0}
          right={0}
          height={300}
          width={300}
          mobileHeight={200}
          mobileWidth={200}
        />
        <SectionThreeCard
          title="Reduce Returns"
          colorOne="#e1d4e8"
          colorTwo="#dadfff"
          description="Cut return rates by 50% and boost customer loyalty with accurate, real-time previews."
          icon={<CartIcon />}
          image="/assets/images/reduce-return-img.png"
          bottom={0}
          right={0}
          height={350}
          width={350}
          mobileHeight={250}
          mobileWidth={250}
        />
      </div>
    </div>
  );
};

export default SectionThreeContent;
