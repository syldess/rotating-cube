import React from "react";

const Button = ({ text, fn }) => {
  return (
    <>
      <button
        onClick={fn}
        style={{
          width: "80px",
          height: "40px",
          fontSize: "20px",
          borderRadius: "10px",
          backgroundColor: "brown",
          color: "white",
        }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
