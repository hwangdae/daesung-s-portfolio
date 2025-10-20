import React from "react";
import { motion } from "motion/react";
import { useScrollRef } from "@/hooks/scrollRef";

interface PropType {
  className: string;
  delay?: number;
  position?: "x" | "y";
}

const LineFadeInView = ({
  className,
  delay = 0.3,
  position = "x",
}: PropType) => {
  const { scrollRef, inView } = useScrollRef();

  const initial = position === "x" ? { scaleX: 0 } : { scaleY: 0 };
  const animate = inView
    ? position === "x"
      ? { scaleX: 1 }
      : { scaleY: 1 }
    : initial;

  const originClass = position === "x" ? "origin-left" : "origin-top";

  return (
    <motion.div
      ref={scrollRef}
      initial={initial}
      animate={animate}
      transition={{ duration: 1.2, delay }}
      className={`${className} ${originClass}`}
    />
  );
};

export default LineFadeInView;