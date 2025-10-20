import { useEffect, useRef, useState } from "react";

export const useScrollRef = () => {
  const scrollRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.8,
      }
    );
    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }
    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);
  return { scrollRef, inView };
};
