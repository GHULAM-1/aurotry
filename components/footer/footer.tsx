import Image from "next/image";
import Link from "next/link";
import CallIcon from "../../public/icons/call-icon";
import MailIcon from "../../public/icons/mail-icon";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="py-3 px-4 sm:px-6 md:px-16">
      <div className="flex flex-col gap-y-8 md:gap-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-y-4">
          <Link href="#" className="flex items-center gap-x-2">
            <div>
              <Image
                src="/assets/images/logo.png"
                alt=""
                height={40}
                width={40}
              />
            </div>
            <div className="text-lg font-bold">Aurotry</div>
          </Link>
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center text-base gap-x-5 font-medium">
              <MailIcon />
              <div>hello@aurotry.com</div>
            </div>
            <div className="flex items-center text-base gap-x-4 font-medium">
              <CallIcon />
              <div>+92 321 1234567</div>
            </div>
          </div>
        </div>
        <Separator className="border border-black" />
        <div className="flex flex-col md:flex-row justify-between gap-y-8">
          <div className="flex flex-col gap-y-5">
            <div className="max-w-xs text-base font-normal">
              Your customer. Your style. Now in AR. Let&apos;s get started
            </div>
            <div className="w-32 sm:w-32">
              <Button className="flex w-full items-center justify-between rounded-3xl">
                Try it now
                <span className="bg-white text-black ml-[0.15rem] p-[0.4rem] rounded-full">
                  <MoveRight className="font-semibold" />
                </span>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="flex flex-col sm:flex-row justify-between gap-y-8 sm:gap-y-0">
              <div className="flex flex-col gap-y-4 text-xl font-semibold text-[#737477]">
                <Link href="#">Home</Link>
                <Link href="#">How it works</Link>
                <Link href="#">Features</Link>
                <Link href="#">Pricing</Link>
                <Link href="#">FAQs</Link>
                <Link href="#">Contact Us</Link>
              </div>
              <div className="flex flex-col text-xl gap-y-5 font-semibold text-[#737477]">
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terms of Service</Link>
                <Link href="#">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-base text-[#737477] font-normal">
          © 2025 Aurotry. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
