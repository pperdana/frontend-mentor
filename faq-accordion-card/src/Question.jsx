import { useState } from "react";

import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";

const Question = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const { id, info, title } = question;

  return (
    <>
      <div className="text-box p-[1rem]">
        <div className="question p-[1rem] flex items-center justify-between gap-[2rem] text-[1.25rem] font-bold">
          <span className="text duration-300">{title}</span>
          {showAnswer ? (
            <FaCircleMinus
              className="btn text-[25px] cursor-pointer"
              onClick={() => setShowAnswer(!showAnswer)}
            />
          ) : (
            <FaCirclePlus
              className="btn text-[25px] text-[hsl(281,83%,54%)] cursor-pointer"
              onClick={() => setShowAnswer(!showAnswer)}
            />
          )}
        </div>

        {showAnswer && <p className="answer p-[1rem] max-w-[60ch]">{info}</p>}
      </div>
      {id !== 4 ? (
        <div className="divider border-b-[1px] border-solid	border-[hsla(292,16%,49%,.2)]" />
      ) : (
        <div className="hidden" />
      )}
    </>
  );
};

export default Question;
