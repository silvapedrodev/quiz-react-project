import { Question } from "@/types/Question";

type Props = {
  questions: Question[];
  answers: number[];
}

export const Results = ({ questions, answers }: Props) => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-10">Respostas</h1>
      {questions.map((item, key) => (
        <div key={key} className="mb-3 text-left">
          <div className="font-semibold">{item.question}</div>
          <div>
            <span>{item.correctAnswer == answers[key] ? "✅" : "❌"}</span> - {item.options[item.correctAnswer]}
          </div>
        </div>
      ))}
    </div>
  );
}