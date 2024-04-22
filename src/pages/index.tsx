import ContentLayout from "@/components/contentLayout";
import QuestionCard from "@/components/questionCard";
import { CATEGORIES, QUESTIONS } from "@/utils/data";

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
      </>
    </ContentLayout>
  );
}
