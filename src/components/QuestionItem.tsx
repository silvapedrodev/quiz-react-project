import { questions } from "@/data/questions";
import { Question } from "@/types/Question";
import { on } from "events";
import { useState } from "react";

type Props = {
  question: Question;
  count: number;
  onAnswer: (answer: number) => void;
}

export const QuestionItem = ({question, count, onAnswer}: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const checkOptions = (key: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(key);

      setTimeout(() => {
        onAnswer(key);
        setSelectedAnswer(null);
      }, 1000);

      
    }
  }

  return (
    <div>
      <div className="text-center py-4">
          <span className="font-bold text-lg">Question {count}</span>/{questions.length}
      </div>
      <div className="text-2xl font-bold mb-5">{count}. {question.question}</div>
      {question.options.map((item, key) => (
         <div
          key={key}
          onClick={() => checkOptions(key)}
          className={`
            max-w-8/12 px-3 py-2 m-auto rounded-md text-lg mb-4 border
            ${selectedAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60' }
            ${selectedAnswer === null || selectedAnswer !== key ? 'bg-purple-950 border-purple-900' : ''}
            ${selectedAnswer !== null && selectedAnswer === question.correctAnswer && selectedAnswer == key && 'bg-green-900 border-green-500'}
            ${selectedAnswer !== null && selectedAnswer !== question.correctAnswer && selectedAnswer == key && 'bg-red-900 border-red-500'}
          `}
        >{item}
        </div>
      ))}
    </div>
  );
}