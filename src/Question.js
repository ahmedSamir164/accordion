import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ question }) => {
  const { title, info } = question;
  const [toggle, setToggle] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        {toggle ? (
          <button className="btn" onClick={() => setToggle(false)}>
            <AiOutlineMinus />
          </button>
        ) : (
          <button className="btn" onClick={() => setToggle(true)}>
            <AiOutlinePlus />
          </button>
        )}
      </header>

      <p>{toggle ? info : null}</p>
    </article>
  );
};

export default Question;
