import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import TechStackSection from "./TechStackSection";
import FeaturesSection from "./FeaturesSection";
import WorksSection from "./WorksSection";
import { ProjectType } from "@/types/ProjectType";
import TroubleShootingSection from "./TroubleShootingSection";
import { useScrollRef } from "@/hooks/scrollRef";
import { animate } from "motion";
import Link from "next/link";

interface PropsType {
  project: ProjectType;
  isOpen: boolean;
  onToggle: (title: string) => void | undefined;
}

const ProjectCard = ({ project, isOpen, onToggle }: PropsType) => {
  const { scrollRef, inView } = useScrollRef();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation(); // 👈 이벤트 버블링 중단
    console.log("링크만 클릭됨");
  };
  return (
    <motion.li
      ref={scrollRef}
      initial={{ background: "transparent", x: 100, opacity: 0 }}
      animate={{
        x: inView ? 0 : 100,
        opacity: inView ? 1 : 0,
        width: isOpen ? "100%" : "auto",
      }}
      whileHover={{
        width: "100%",
        transition: { duration: 0.6, delay: 0 },
        transitionEnd: { delay: 0 },
      }}
      exit={{ width: "auto" }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* 타이틀 */}
      <motion.div
        onClick={() => onToggle(project.title)}
        animate={{
          width: isOpen ? "100%" : "auto",
        }}
        className={`border-b border-[#444444] px-8 py-8 cursor-pointer flex items-center ${
          isOpen ? "bg-[#111111]" : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-start">
          <div>
            <h2 className="title-26-light break-keep mb-1">{project.title}</h2>
            <h3 className="text-16-extraLight">{project.description}</h3>
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-start gap-1 "
            >
              <Link
                onClick={handleClick}
                target="_blank"
                href="https://github.com/GTable/NoWait_FE"
                className="text-16-extraLight"
              >
                GITHUB
              </Link>
              <span className="text-[#ccc] pb-[3px]">|</span>
              <Link
                onClick={handleClick}
                target="_blank"
                href="https://naver.com"
                className="text-16-extraLight"
              >
                SITE
              </Link>
            </motion.div>
          )}
        </div>
        <div className={`${isOpen ? "w-0" : "w-[80px]"}`} />
      </motion.div>
      {/* 내용 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mt-4">
              <p className="text-17-light text-[#eeeeee] break-keep">
                {project.subDescription}
              </p>
            </div>
            {/* 사용 기술 */}
            <TechStackSection techStacks={project.detail?.techStacks} />
            {/* 주요 기능 및 특징 */}
            <FeaturesSection features={project.detail?.features} />
            {/* 작업 기여도 */}
            <WorksSection works={project.detail?.works} />
            {/* 트러블슈팅 */}
            <TroubleShootingSection
              troubleShooting={project.detail!.troubleShooting}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default ProjectCard;
