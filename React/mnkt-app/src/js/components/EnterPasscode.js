import React from "react";
import TextBox from "./TextBox";
import Warning from "./Warning";
import { Link } from "react-router-dom";

const EnterPasscode = () => {
    return (
        <div className="enter-passcode-container">
            <TextBox
              inputType={"text"}
              id={"passcode"}
            />
            <Warning 
              text={"数字を入力してください。"}
            />
            <Link to="/player">Enter</Link>
        </div>
    );
}

export default EnterPasscode;