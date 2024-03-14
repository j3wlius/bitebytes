import { FaArrowUp } from "react-icons/fa6";
import { useState, useEffect } from "react";
function BackToTop() {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    setIsScroll(window.scrollY >= 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#top"
      className={`back-top-btn ${isScroll ? "active" : ""}`}
      aria-label="Back to top"
    >
      <FaArrowUp className="icon" />
    </a>
  );
}

export default BackToTop;
