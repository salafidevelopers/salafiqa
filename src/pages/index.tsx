import QuestionCard from "@/components/questionCard";
import Subnav from "@/components/subnav";
import TagAside from "@/components/tagAside";
import Tags from "@/components/tags";
import { CATEGORIES, QUESTIONS } from "@/utils/data";

export default function Home() {
  return (
    <main className={`p-10`}>
      <Subnav />
      <div className="grid grid-cols-4">
        <section className="col-span-3 border-r border-r-[#00000012] px-2">
          <h2 className="font-medium text-3xl mt-3 text-[#115652]">
            Latest Answers
          </h2>
          <div className="pt-5 space-y-4">
            {QUESTIONS.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        </section>
        <aside className="col-auto p-4 space-y-3">
          <TagAside />
        </aside>
      </div>
    </main>
  );
}
