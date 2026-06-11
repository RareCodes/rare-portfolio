import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [width, setWidth] = useState(() => {
    if (typeof window !== "undefined") return window.innerWidth;
    return 1024;
  });

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width,
    isMobile: width < 768,
    isTablet: width < 1024,
  };
}