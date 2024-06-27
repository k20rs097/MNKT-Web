import React from "react";
import TextBox from "./TextBox";
// import Warning from "./Warning";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const EnterPasscode = () => {
    return (
        <div className="enter-passcode-container">
            <TextBox
              id={"passcode"}
            />
            <Link to="/build/player" className="play-rectangle"><BsFillPlayBtnFill size={"15rem"}/></Link>
        </div>
    );
}

export default EnterPasscode;