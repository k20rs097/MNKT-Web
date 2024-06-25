import React from "react";

const TextBox = ({ inputType, id }) => {
  return (
    <section id="text-box" className="text-box">
      <input
        type={inputType}
        id={id}
        pattern="\d*"
        // onInput={}
        className="input-text-box"
      />
    </section>
  );
};

export default TextBox;