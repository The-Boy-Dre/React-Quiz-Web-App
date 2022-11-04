
import { shuffleArray } from "./utils";


// It's always god to export stuff like whats below because you never know when you might need it in your application
export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export type QuestionState = Question & {answers: string[]};

export enum Difficulty{
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();  // We await the fetch it's self then we await the conversion to json with the .json method 
  return data.results.map((question: Question) => (
    {
      ...question,
      answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }
  ))
}


