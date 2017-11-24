import React from "react";

const bigText = {
    marginTop: "3rem",
    fontSize: "7rem",
    textAlign: "center"
}

const BigText = ({ children }) => {
    return (
        <div style={ bigText }>
            { children }
        </div>
    );
}

export default BigText;