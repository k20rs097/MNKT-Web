import React from "react";
import TextBox from "./TextBox";

const EnterPasscode = () => {
    return (
        <div>
            <TextBox
              inputType={"text"}
              id={"passcode"}
            />
        </div>
    );
}

export default EnterPasscode;