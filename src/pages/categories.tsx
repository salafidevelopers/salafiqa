import ContentLayout from "@/components/contentLayout";
import { CATEGORIES } from "@/utils/data";
import { IoFolderOutline } from "react-icons/io5";
import React from "react";
import Link from "next/link";
import { convertToUrlFriendly } from "@/utils";

const Categories = () => {
  //   const text = "Convert This Text into URL Friendly Format!";
  //   const urlFriendlyText = convertToUrlFriendly(text);
  //   console.log(urlFriendlyText);
  return (
    <ContentLayout>
      <>
        <h2 className="font-medium text-3xl mt-3 text-[#115652]">Categories</h2>
        <article className="mt-3 border border-[#00000026] px-2 py-3 rounded-md space-y-2">
          <ul className="flex items-baseline flex-wrap gap-4 space-y-2 justify-around">
            {CATEGORIES.map((category) => (
              <li key={category.id} className=" text-[#115652] text-lg">
                <Link
                  href={`/category/${category.id}`}
                  className="flex gap-2 items-center"
                >
                  <IoFolderOutline size={24} />
                  <p>{category.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </>
    </ContentLayout>
  );
};

export default Categories;
