"use client";

import { QuestionItem } from "@/components/QuestionItem";
import { Results } from "@/components/Results";
import { questions } from "@/data/questions";
import { useState } from "react";


export default function Home() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const loadNextQuestion = () => {
    if(questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  const handleAnswer = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  }

  const handleRestart = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className={`w-full max-w-xl text-center p-6 rounded-md mx-2
        ${!showResult ? 'bg-purple-700 text-white' : 'bg-purple-900'}
        `}>
        {!showResult && 
          <div className="flex justify-center items-center w-30 h-30 bg-purple-700 rounded-full m-auto -mt-20">
            <p className="text-6xl">🤔</p>
          </div>
        }

        <div>
          {!showResult && <QuestionItem 
            question={questions[currentQuestion]}
            count={currentQuestion + 1}
            onAnswer={handleAnswer}
          />}
          {showResult && 
          <Results questions={questions} answers={answers}/>
          }
          <div>
           {showResult && <button onClick={handleRestart} className="bg-purple-700 text-white font-bold py-2 px-6 rounded-md mt-10 cursor-pointer hover:bg-purple-950">Restart</button>}
          </div>
        </div>

      </div>
    </div>
  );
}
