import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { useScrollRef } from "@/hooks/scrollRef";

interface PropType {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
const LeftFadeInView = ({
  as: Component = "div",
  children,
  className,
  delay = 0.2,
}: PropType) => {
  const { scrollRef, inView } = useScrollRef();

  return (
    <motion.div
      ref={scrollRef}
      style={{ display: "block" }}
      initial={{ opacity: 0, x: -80 }}
      animate={inView && { opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay }}
      exit={{ opacity: 0, x: -20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default LeftFadeInView;
