import { PROJECTS } from "@/constants/project";
import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import ProjectCard from "./components/ProjectCard";
import { ProjectType } from "@/types/ProjectType";
import FadeInView from "../ui/FadeInView";
import Image from "next/image";

const Project = () => {
  const [openProject, setOpenProject] = useState<string[]>([]);
  const toggleDetail = (title: string) => {
    setOpenProject((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };
  return (
    <section className="w-full min-h-[100vh] h-[100%]">
            <Image
              src={"/images/background2.png"}
              alt="프로젝트 백그라운드 이미지"
              fill
            />
      <div className="relative z-50 max-w-[1300px] h-full mx-auto py-[12vh] flex justify-between items-start gap-[85px]">
        <FadeInView className="w-[30%]">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[8px] h-[90px] bg-white"></div>
            <h1 className="title-40-black">
              그동안 경험했던
              <br />
              프로젝트
            </h1>
          </div>
          <p className="text-[#555555]">
            ＊프로젝트 클릭 시 세부내용을 확인할 수 있습니다.
          </p>
        </FadeInView>
        <ul className="w-[64%] h-full flex flex-col items-end">
          <AnimatePresence>
            {PROJECTS.map((project: ProjectType) => {
              return (
                <ProjectCard
                  key={project.title}
                  project={project}
                  isOpen={openProject.includes(project.title)}
                  onToggle={() => toggleDetail(project.title)}
                />
              );
            })}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
};

export default Project;
