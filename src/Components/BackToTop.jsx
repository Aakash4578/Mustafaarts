import React, { useState, useEffect } from "react";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={handleClick}
      className={`back-to-top ${show ? "show" : ""}`}
    >
      ↑
    </button>
  );
}

export default BackToTop;
