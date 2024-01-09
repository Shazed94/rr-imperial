"use client";

import { useEffect, useRef } from "react";

export default function ScrollToTop() {
  const scrollToTopButton = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        scrollToTopButton.current.style.opacity = "1";
      } else {
        scrollToTopButton.current.style.opacity = "0";
      }
    });
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div ref={scrollToTopButton} className="fixed p-4 text-white transition-opacity duration-500 bg-red-600 opacity-0 bottom-2 right-2" onClick={scrollToTop}>
      <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" fill="currentColor" />
      </svg>
    </div>
  );
}
