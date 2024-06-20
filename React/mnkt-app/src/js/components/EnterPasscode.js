import React from "react";
import TextBox from "./TextBox";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const EnterPasscode = () => {
    return (
        <div>
            <TextBox
              inputType={"text"}
              id={"passcode"}
            />
            <Link to="/player">Enter</Link>
        </div>
    );
}

export default EnterPasscode;