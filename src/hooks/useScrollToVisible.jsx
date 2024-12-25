import { useEffect, useState } from "react";

const useScrollToVisible = () => {
  const [isVisible2, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;
    // console.log("LAST", lastScroll);

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      // console.log(currentScroll);
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

  return isVisible2;
};

export default useScrollToVisible;
