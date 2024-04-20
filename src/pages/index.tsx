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
        <aside className="col-auto p-4 space-y-3">
          <button className="w-full self-center bg-[#19504D] px-3 py-2 rounded-md text-white">
            Submit a question
          </button>
          <div className="space-y-6">
            <p className="text-center text-[#5A5A5A] text-sm">
              Subscribe to our weeky newletter to get latest the answers in your
              mail
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full py-2 bg-[#0000000A] border border-gray-400 rounded-md px-2 placeholder:font-light placeholder:font-inter placeholder:-text-[#7B7B7B99] placeholder:text-center"
              />
              <button className=" w-full bg-[#A28340] px-3 py-2 rounded-md text-white">
                Sign up
              </button>
            </div>
          </div>
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
