import React from "react";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { PiSoundcloudLogo, PiTelegramLogoLight } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import logo from "../../public/assets/images/logo.png";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer
      className={`bg-[#19504D] text-white flex justify-between items-center px-10 py-5 ${inter.className}`}
    >
      <div className="flex gap-3 items-center">
        <input
          type="email"
          placeholder="Email address"
          className="py-2 bg-transparent border border-gray-400 rounded-md px-2 placeholder:font-medium placeholder:font-inter"
        />
        <button className="bg-[#A28340] px-3 py-2 rounded-md text-white">
          Sign up
        </button>
      </div>
      <Image src={logo} alt="Logo" />
      <div className="flex gap-3 items-center">
        <AiOutlineInstagram size={24} />
        <PiSoundcloudLogo size={24} />
        <AiOutlineYoutube size={24} />
        <PiTelegramLogoLight size={24} />
        <FiFacebook size={24} />
        <RiTwitterXLine size={24} />
      </div>
    </footer>
  );
};

export default Footer;
