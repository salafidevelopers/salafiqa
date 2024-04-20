import React from "react";
import { CiCalendar } from "react-icons/ci";

interface Question {
  id: number;
  title: string;
  questionNo: string;
  publishedOn: string;
  question: string;
}

interface QuestionCardProps {
  question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const { title, questionNo, publishedOn, question: mainQuestion } = question;

  // Truncate the question text to max three lines
  const truncatedQuestion = mainQuestion.split("\n").slice(0, 3).join("\n");

  return (
    <article className="border border-[#00000026] px-2 py-3 rounded-md space-y-2">
      <p className="text-[#115652] text-lg cursor-pointer">{title}</p>
      <p className="text-[#00000099] ">
        <span className="line-clamp-3 overflow-hidden">
          Q: {truncatedQuestion}
        </span>
        <span className="text-[#A28340] cursor-pointer">Read more</span>
      </p>

      <div className="flex gap-3 items-center text-[#11565299]">
        <p className="cursor-pointer">{questionNo}</p>
        <div className="flex gap-1 items-center cursor-pointer">
          <CiCalendar /> <p>{publishedOn}</p>
        </div>
      </div>
    </article>
  );
};

export default QuestionCard;
