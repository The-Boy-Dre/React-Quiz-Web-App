import React from 'react'

// This name 'Props' can be any name we want
type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
}

//This is typescript based to tell React that it's a functional component
const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => (
<div>
  <p className='number'> 
    Question: {questionNr} / {totalQuestions}  [This is how you call a variable in tsx/jsx, with curly braces]
  </p>
  <p dangerouslySetInnerHTML={{__html: question}}></p>
  <div>
     {answers.map(answer => (
      <div>
        <button disabled={userAnswer} onClick={callback}>
          <span dangerouslySetInnerHTML={{__html: answer}}></span>
        </button>
      </div>
     ))}
  </div>


</div>

  
);
    

export default QuestionCard;