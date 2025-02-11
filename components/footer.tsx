import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { IoMailOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div>
      <div>
        <Link href="#" className="flex items-center gap-x-4">
          <div>
            <Image
              src="/assets/images/logo.png"
              alt=""
              height={30}
              width={30}
            />
          </div>
          <div className="text-lg font-bold">Aurotry</div>
        </Link>
        <div className="flex flex-col items-start">
            <div className="flex items-center">

            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
