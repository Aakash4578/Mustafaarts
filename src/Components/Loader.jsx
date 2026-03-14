import React from "react";
import "../assets/Css/MainStyle.css";


function Loader() {
  return (
    <div className="loader-screen">
      <div className="spinner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Loader;