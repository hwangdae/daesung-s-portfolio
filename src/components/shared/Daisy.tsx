"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "motion/react";
import { Daisyyyy } from "@/assets";
import useAboutStore, {
  useEducationStore,
  useSkillStore,
} from "@/atoms/daisyState";

interface PropsType {
  currentSection:
    | "hero"
    | "about"
    | "skill"
    | "project"
    | "education"
    | "closing";
  refs: {
    aboutRef: React.RefObject<HTMLDivElement | null>;
    skillRef: React.RefObject<HTMLDivElement | null>;
    projectRef: React.RefObject<HTMLDivElement | null>;
    educationRef: React.RefObject<HTMLDivElement | null>;
    closingRef: React.RefObject<HTMLDivElement | null>;
  };
}

const Daisy = ({ currentSection, refs }: PropsType) => {
  const { aboutRef, skillRef, projectRef, educationRef, closingRef } = refs;

  const { setToggleAbout } = useAboutStore();
  const { setToggleEducation } = useEducationStore();
  const { setToggleSkill, setSkillFalse } = useSkillStore();

  const controls = useAnimationControls();
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 12,
        ease: "linear",
        delay: 3.3,
      },
    });
  }, []);


  const handleDaisy = () => {
    if (currentSection === "hero")
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    if (currentSection === "about") setToggleAbout();
    if (currentSection === "skill") setToggleSkill();
    if (currentSection === "education") setToggleEducation();
    if (currentSection !== "skill") setSkillFalse();
  };



  return (
    <div className="fixed right-[170px] top-[85vh] z-50">
      {/* 툴팁 */}
      <motion.div
        initial={{ opacity: 0, x: 2, y: 2 }}
        animate={
          isTooltipOpen
            ? { opacity: 1, x: 0, y: 0 }
            : { opacity: 0, x: 2, y: 2 }
        }
        transition={{ duration: 0.25 }}
        className={`absolute -left-[356px] -top-[112px] w-[350px] p-3 rounded-md
          bg-[#3D9D71] text-[#fff] text-15-regular !leading-6 shadow-md
          ${!isTooltipOpen ? "pointer-events-none" : ""}`}
      >
        데이지는 겸손의 아름다움이라는 꽃말을 지녔어요.
        <br />
        화려하지 않지만 재밌는 기능이 됐으면 해요.
        <br />
        섹션마다 클릭해 보세요 🌼
      </motion.div>

      {/* 점 */}
      <motion.span
        initial={{ opacity: 0, scale: 0.7, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 18,
          delay: 3.7,
        }}
        onMouseEnter={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
        className="absolute -left-[4px] -top-[4px] w-2.5 h-2.5 rounded-full bg-[#3D9D71] z-[30]"
      />

      {/* 데이지 버튼 */}
      <motion.button
        animate={controls}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() =>
          controls.start({
            rotate: 360,
            transition: { repeat: Infinity, duration: 12, ease: "linear" },
          })
        }
        onClick={handleDaisy}
        className="flex justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <Daisyyyy />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default Daisy;
