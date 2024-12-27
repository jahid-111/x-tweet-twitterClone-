import { useState, useEffect } from "react";

const useInfiniteScroll = (callback, options = {}) => {
  const [isFetching, setIsFetching] = useState(false);
  const { root = null, rootMargin = "100px", threshold = 0.1 } = options;
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFetching(true);
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    const sentinel = document.getElementById("infinite-scroll-sentinel");

    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => observer.disconnect();
  }, [root, rootMargin, threshold]);

  useEffect(() => {
    if (isFetching) {
      callback();
    }
  }, [isFetching, callback]);

  const resetFetching = () => setIsFetching(false);
  console.log("🟢🟢", isFetching);
  return { isFetching, resetFetching };
};

export default useInfiniteScroll;
