import React from "react";
import { IoSearch } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { PiScroll } from "react-icons/pi";
import { MdOutlineMosque } from "react-icons/md";
import Link from "next/link";
import { cn } from "@/utils";
import { useRouter } from "next/router";

const subnavItems = [
  {
    title: "Categories",
    link: "/categories",
    icon: BiCategory,
  },
  {
    title: "Ask a question",
    link: "/ask",
    icon: AiOutlineQuestionCircle,
  },
  {
    title: "Books and articles",
    link: "/books",
    icon: PiScroll,
  },
  {
    title: "Get to know Islam",
    link: "/know-islam",
    icon: MdOutlineMosque,
  },
];

function SubnavItem({ title, link }: { title: string; link: string }) {
  return (
    <Link href={link} className={cn(" py-2")}>
      {title}
    </Link>
  );
}

const Subnav = () => {
  const router = useRouter();
  return (
    <nav className="flex items-center gap-5 justify-between border-b border-b-[#00000012] pb-4">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search for answers..."
          className="placeholder:text-[#11565299] placeholder:text-sm w-full bg-[#E4E4DD] border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500"
        />
        <IoSearch
          color="#115652"
          size={24}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
        />
      </div>
      <ul className="flex items-center gap-8">
        {subnavItems.map((item, index) => (
          <li
            key={index}
            className={cn(
              "flex items-center gap-1 text-[#19504D] hover:text-[#19504D99]",
              router.pathname === item.link ? "text-[#19504D99]" : ""
            )}
          >
            <item.icon />
            <SubnavItem title={item.title} link={item.link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Subnav;
