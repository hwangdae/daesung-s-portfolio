"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "motion/react";
import { Daisyyyy } from "@/assets";
import useAboutStore, {
  useEducationStore,
  useSkillStore,
} from "@/atoms/daisyState";

interface PropsType {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  percentage: number;
}

const Daisy = ({ aboutRef, percentage }: PropsType) => {
  const { setToggleAbout } = useAboutStore();
  const { setToggleEducation } = useEducationStore();
  const { skill, setToggleSkill,setSkillFalse } = useSkillStore();
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  useEffect(() => {
  // 스킬 영역(22~49)이 아닐 때 자동으로 스킬창 닫기
  if (!(percentage >= 22 && percentage <= 49)) {
    setSkillFalse();
  }
}, [percentage, setToggleSkill]);

  useEffect(() => {
    startRotate();
  }, []);
  const startRotate = () => {
    controls.start({
      rotate: 360,
      transition: { repeat: Infinity, duration: 12, ease: "linear" },
    });
  };
  const stopRotate = () => {
    controls.stop();
  };
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDaisy = () => {
    if (
      (percentage >= 0 && percentage <= 2) ||
      (percentage >= 86 && percentage <= 100)
    ) {
      scrollToAbout();
    } else if (percentage >= 3 && percentage <= 21) {
      setToggleAbout();
    } else if (percentage >= 22 && percentage <= 49) {
      setToggleSkill();
    } else if (percentage >= 63 && percentage <= 84) {
      setToggleEducation();
    }
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
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="absolute -left-[356px] -top-[112px] w-[350px] p-3 rounded-md bg-[#3D9D71] text-[#fff] text-15-regular !leading-6 shadow-md"
      >
        데이지는 겸손의 아름다움이라는 꽃말을 지녔어요.
        <br />
        화려하지 않지만 재밌는 기능이 됐으면 해요.
        <br />
        섹션마다 클릭해 보세요 🌼
      </motion.div>
      <motion.span
        onMouseEnter={() => {
          setIsTooltipOpen(true);
        }}
        onMouseLeave={() => {
          setIsTooltipOpen(false);
        }}
        className="absolute -left-[4px] -top-[4px] w-2.5 h-2.5 rounded-full bg-[#3D9D71] z-[45]"
      ></motion.span>

      <motion.button
        animate={controls}
        onMouseEnter={() => {
          stopRotate();
          setIsPaused(true);
        }}
        onMouseLeave={() => {
          setIsPaused(false);
          startRotate();
        }}
        className="flex justify-center items-center"
        onClick={handleDaisy}
      >
        <Daisyyyy />
      </motion.button>
      {skill && (
        <div className="w-[800px] absolute -left-[790px] -top-[390px] bg-[#d89135] p-12 rounded-md z-50 text-black">
          <h1 className="title-20-regular mb-4">
            🌼 사소하지만 나를 움직이게 하는 작은 스킬들
          </h1>
          <p className="text-17-light mb-3">
            저는 낯을 많이 가리는 편이에요. 그렇지만 살아가다 보면 낯선 사람에게
            말을 걸어야 하거나, 오히려 말을 걸고 싶은 순간이 생각보다 자주
            오더라구요.
            <br />
            그래서 이런 상황을 조금이라도 편하게 넘기기 위해 나만의 작은
            스킬들을 만들어 사용하고 있어요.
          </p>
          <h2 className="text-18-regular mb-2">첫 번째는 ‘자기 최면’입니다.</h2>
          <p className="text-17-light mb-3">
            “이건 별거 아니야. 말 걸고 나서도 아무 일도 일어나지 않아.” 이런
            식으로 스스로에게 가볍게 최면을 걸어요. 신기하게도 이 생각만 해도
            부담이 절반은 사라져요.
          </p>
          <h2 className="text-18-regular mb-2">
            두 번째는 ‘간식 나눔 스킬’입니다.
          </h2>
          <p className="text-17-light">
            진짜 작은 간식—예를 들면 마이쮸 하나 정도—를 건네며 자연스럽게
            대화를 시작하는 방법이에요. 돈도 거의 안 들고, 분위기도
            부드러워지고, 저도 마음이 한결 가벼워지는 효과가 있어서 자주 쓰는
            편이에요.
          </p>
        </div>
      )}
    </div>
  );
};

export default Daisy;
