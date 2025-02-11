import React from "react";
import Texture1 from "../textures/texture-1";
import Texture2 from "../textures/texture-2";
import Texture5 from "../textures/texture-5";
import Texture3 from "../textures/texture-3";
import Texture4 from "../textures/texture-4";
import Navbar from "./navbar";

const HeroBackground = () => {
  return (
    <div className="relative">
      <div className="relative m-2 bg-white">
        <Texture1 />
        <Texture2 />
        <Texture5 />
        <Texture3 />
        <Texture4 />
        <Navbar />
      </div>
    </div>
  );
};

export default HeroBackground;
