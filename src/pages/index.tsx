import QuestionCard from "@/components/questionCard";
import Subnav from "@/components/subnav";
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
        <aside className="col-auto p-4">
          <ul className="flex gap-3 flex-wrap">
            {CATEGORIES.map((tag) => (
              <li
                key={tag.id}
                className="w-fit border border-[#11565226] bg-[#11565212] text-[#115652] text-[12px] rounded-full py-1 px-3"
              >
                <Tags title={tag.title} count={tag.count} id={tag.id} />
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}
