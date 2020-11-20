import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [answerDisplayed, setAnswerDisplayed] = useState(false);

  const toggleAnswer = () => setAnswerDisplayed(!answerDisplayed);

  return (
    <li className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleAnswer}>
          <i>
            {answerDisplayed ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </i>
        </button>
      </header>
      {answerDisplayed && <p>{info}</p>}
    </li>
  );
};

export default Question;
