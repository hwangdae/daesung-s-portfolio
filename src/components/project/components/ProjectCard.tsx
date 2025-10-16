import React from "react";
import { AnimatePresence, motion } from "motion/react";
import TechStackSection from "./TechStackSection";
import FeaturesSection from "./FeaturesSection";
import WorksSection from "./WorksSection";
import { ProjectType } from "@/types/ProjectType";
import TroubleShootingSection from "./TroubleShootingSection";

interface PropsType {
  project: ProjectType;
  isOpen: boolean;
  onToggle: (title: string) => void | undefined;
}

const ProjectCard = ({ project, isOpen, onToggle }: PropsType) => {
  return (
    <motion.li
      initial={{ background: "transparent" }}
      animate={{
        width: isOpen ? "100%" : "auto",
      }}
      whileHover={{
        width: "100%",
      }}
      exit={{ width: "auto" }}
      transition={{ duration: 0.6 }}
    >
      {/* 타이틀 */}
      <motion.div
        onClick={() => onToggle(project.title)}
        animate={{
          width: isOpen ? "100%" : "auto",
        }}
        className={`border-b border-[#444444] px-8 py-8 cursor-pointer flex items-center ${
          isOpen ? "bg-[#1b1b1b]" : "bg-transparent"
        }`}
      >
        <div>
          <h2 className="title-26-light break-keep mb-1">
            {project.title}
          </h2>

          <motion.h3
            key={isOpen ? "sub" : "main"}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-16-extraLight text-[#ccc] break-keep"
          >
            {isOpen ? project.subDescription : project.description}
          </motion.h3>
        </div>
        <div className="w-[80px]" />
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
            <p>{project.detail?.description}</p>
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
