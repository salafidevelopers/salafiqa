import ContentLayout from "@/components/contentLayout";
import QuestionCard from "@/components/questionCard";
import { CATEGORIES, QUESTIONS } from "../utils/data";
import Link from "next/link";

export default function Home() {
  return (
    <ContentLayout>
      <>
        <h2 className="font-medium text-3xl mt-3 text-[#115652]">
          Latest Answers
        </h2>
        <div className="pt-5 space-y-4">
          {QUESTIONS.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center">
          <Link
            href={"/questions"}
            className="w-fitself-center bg-[#19504D] px-3 py-2 rounded-md text-white"
          >
            All Questions
          </Link>
        </div>
      </>
    </ContentLayout>
  );
}
