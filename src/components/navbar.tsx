import React from "react";
import { GiWorld } from "react-icons/gi";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { PiSoundcloudLogo, PiTelegramLogoLight } from "react-icons/pi";
import { GoChevronDown } from "react-icons/go";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { getCurrentDate, inter } from "../utils";
import LocaleSwitcher from "./localeSwitcher";

const Navbar = ({ id }: { id: string }) => {
  // Get the current date and log it
  const currentDate = getCurrentDate();
  return (
    <nav
      id={id}
      className={`bg-[#f0e8d5] p-5 flex md:flex-wrap justify-between items-center text-[#19504D] px-10  ${inter.className}`}
    >
      <div className="flex gap-3 items-center">
        <AiOutlineInstagram size={24} />
        <PiSoundcloudLogo size={24} />
        <AiOutlineYoutube size={24} />
        <PiTelegramLogoLight size={24} />
        <FiFacebook size={24} />
        <RiTwitterXLine size={24} />
      </div>
      <p className="text-lg">{currentDate}</p>
      <div className="flex gap-8">
        <div className="flex gap-2 items-center">
          <GoChevronDown />
          <p>English</p>
          <GiWorld />
        </div>
        {/* <LocaleSwitcher /> */}
        <button className="bg-[#19504D] px-3 py-2 rounded-md text-white">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
