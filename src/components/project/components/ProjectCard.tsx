import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import TechStackSection from "./TechStackSection";
import FeaturesSection from "./FeaturesSection";
import WorksSection from "./WorksSection";
import { ProjectType } from "@/types/ProjectType";
import TroubleShootingSection from "./TroubleShootingSection";
import { useScrollRef } from "@/hooks/scrollRef";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaDesktop } from "react-icons/fa6";
import { MdDesktopMac } from "react-icons/md";
import { LuNotebookText } from "react-icons/lu";
interface PropsType {
  project: ProjectType;
  isOpen: boolean;
  onToggle: (title: string) => void | undefined;
}

const ProjectCard = ({ project, isOpen, onToggle }: PropsType) => {
  const { scrollRef, inView } = useScrollRef();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <motion.li
      ref={scrollRef}
      initial={{ background: "transparent", opacity: 0 }}
      animate={{
        width: isOpen ? "100%" : "auto",
      }}
      whileHover={{
        width: "100%",
        transition: { duration: 0.6 },
      }}
      exit={{ width: "auto" }}
      transition={{ duration: 0.6 }}
      style={{ animationDelay: `${inView && "0.6s"}` }}
      className={`${inView && "animate-fade-slide-left"}`}
    >
      {/* 타이틀 */}
      <motion.div
        onClick={() => onToggle(project.title)}
        animate={{
          width: isOpen ? "100%" : "auto",
        }}
        className={`border-b border-[#444444] px-8 py-8 cursor-pointer flex items-center ${
          isOpen ? "bg-[#161616]" : "bg-transparent"
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
                href={project.github}
                className="text-16-extraLight"
              >
                GITHUB
              </Link>
              <span className="text-[#ccc] pb-[3px]">|</span>
              {project.site ? 
              <Link
                onClick={handleClick}
                target="_blank"
                href={project.site || ""}
                className="text-16-extraLight"
              >
                SITE
              </Link> : <p className="text-16-extraLight">운영종료</p>}
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
            {/* 프로젝트 설명 */}
            <div>
              <div className="flex items-center gap-2 py-[20px]">
                <LuNotebookText
                  size={"23px"}
                  //  color="#FFD76A"
                />
                <h1 className="title-24-bold">프로젝트에 대하여</h1>
              </div>
              <p className="text-17-light text-[#eeeeee] break-keep">
                {project.subDescription}
              </p>
            </div>
            {/* 프로젝트 프리뷰 */}
            <div>
              <div className="flex items-center gap-2 py-[20px]">
                <FaDesktop
                  size={"21px"}
                  //  color="#FFD76A"
                />
                <h1 className="title-24-bold">프로젝트 미리보기</h1>
              </div>
              <Swiper
                spaceBetween={10}
                slidesPerView={4}
                loop={true} // 무한 루프
                autoplay={{ delay: 1, disableOnInteraction: false }}
                modules={[Autoplay, Pagination, Navigation]}
                speed={3000} // 이동 속도
              >
                {project.preview?.map((preview) => {
                  return (
                    <SwiperSlide key={preview.id}>
                      <p className="text-16-regular text-center mb-2">{preview.title}</p>
                      <Image
                        width={207}
                        height={470}
                        src={preview.src || ""}
                        className="object-contain"
                        alt="프리뷰 이미지"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            {/* 사용 기술 */}
            <TechStackSection techStacks={project.detail.techStacks} />
            {/* 주요 기능 및 특징 */}
            <FeaturesSection features={project.detail.features} />
            {/* 작업 기여도 */}
            <WorksSection works={project.detail.works} />
            {/* 트러블슈팅 */}
            <TroubleShootingSection
              troubleShooting={project.detail.troubleShooting}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default ProjectCard;
