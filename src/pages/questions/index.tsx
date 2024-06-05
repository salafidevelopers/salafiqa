import ContentLayout from "@/components/contentLayout";
import { CATEGORIES, QUESTIONS } from "../../utils/data";
import React from "react";
import Link from "next/link";
import { convertToUrlFriendly } from "../../utils";
import { TbArrowBackUp } from "react-icons/tb";
import QuestionCard from "@/components/questionCard";

const Categories = () => {
  //   const text = "Convert This Text into URL Friendly Format!";
  //   const urlFriendlyText = convertToUrlFriendly(text);
  //   console.log(urlFriendlyText);
  return (
    <ContentLayout>
      <>
        <ul className="flex items-center gap-2 my-4">
          <li>
            <TbArrowBackUp size={18} />
          </li>
          <li className="text-sm">
            <Link href={"/"}>Home /</Link>
          </li>
          <li className="text-sm">
            <Link href={"/categories"}>Questions</Link>
          </li>
        </ul>
        <h2 className="font-medium text-3xl mt-3 text-[#115652]">Categories</h2>
        <div className="mt-5 grid grid-cols-responsive270 gap-4">
          {QUESTIONS.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>
      </>
    </ContentLayout>
  );
};

export default Categories;
