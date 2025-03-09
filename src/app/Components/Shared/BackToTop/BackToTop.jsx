"use client"

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
  onClick={scrollToTop}
  className={`fixed bottom-5 right-1/2 translate-x-1/2 z-50 px-4 py-3 rounded-xl bg-black bg-opacity-60 text-white shadow-lg backdrop-blur-md transition-all duration-300 ${
    isVisible ? "opacity-60" : "opacity-0"
  }`}
>
   <div className="flex items-center gap-3">
   <span>Back to Top</span>
   <FaArrowUp size={20} />
   </div>
</button>

  );
};

export default BackToTop;
