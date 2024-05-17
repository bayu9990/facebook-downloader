import React from "react";
import "../styles/component.css";
import clip from "../assets/images/clip.png";

const Input = () => {
  return (
    <>
      <div className="input">
        <div className="paste">
          <img src={clip} alt="" />
        </div>
        <input type="text" />
        <div className="unduh" onClick={anjay}>
          Unduh
        </div>
      </div>
    </>
  );
};

export default Input;
