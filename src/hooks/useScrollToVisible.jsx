import { useEffect, useState } from "react";

const useScrollToVisible = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll === 0) {
        setIsVisible(true);
      } else if (currentScroll > lastScroll) {
        setIsVisible(false);
      } else if (currentScroll < lastScroll) {
        setIsVisible(true);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isVisible, setIsVisible };
};

export default useScrollToVisible;
