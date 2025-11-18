import React from "react";
import { motion } from "motion/react";
import { useScrollRef } from "@/hooks/scrollRef";

interface PropType {
  children: React.ReactNode;
  initialY?: number;
  animateY?: number;
  className?: string;
  delay?: number;
}

const FadeInView = ({
  children,
  initialY = -20,
  animateY = 0,
  className,
  delay = 0.2,
}: PropType) => {
  const { scrollRef, inView } = useScrollRef();

  return (
    <motion.div
      ref={scrollRef}
      initial={{ opacity: 0, y: initialY }}
      animate={inView && { opacity: 1, y: animateY }}
      transition={{ duration: 0.7, delay }}
      className={`${className} list-none`}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;
