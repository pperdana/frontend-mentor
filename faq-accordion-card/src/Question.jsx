import { useState } from "react";

import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";

const Question = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const { id, info, title } = question;

  return (
    <div className="text-box">
      <div className="question">
        <span className="text">{title}</span>
        <FaCirclePlus
          className="btn"
          onClick={() => setShowAnswer(!showAnswer)}
        />
      </div>
      {showAnswer && <p className="answer">{info}</p>}
    </div>
  );
};

export default Question;
