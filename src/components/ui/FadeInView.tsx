import React from "react";
import { motion } from "motion/react";
import { useScrollRef } from "@/hooks/scrollRef";

interface PropType {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FadeInView = ({ children, className, delay = 0.2 }: PropType) => {
  const { scrollRef, inView } = useScrollRef();

  return (
    <motion.div
      ref={scrollRef}
      initial={{ opacity: 0, y: -20 }}
      animate={inView && { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className={`${className} list-none`}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;
