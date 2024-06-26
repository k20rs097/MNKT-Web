import { useState, React } from "react";

const TextBox = ({ inputType, id }) => {
  const [passcode, setPasscode] = useState("");

  return (
    <section id="text-box" className="text-box">
      <input
        type="password"
        id={id}
        className="input-text-box"
        pattern="\d*"
        value={passcode}
        onChange={(e) => setPasscode(e.target.value)}
      />
    </section>
  );
};

export default TextBox;
