import { PROJECTS } from "@/constants/project";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Project = () => {
  const [openProject, setOpenProject] = useState<string[]>([]);
  console.log(openProject);
  // const contentRef = useRef<any>(null);
  // const [contentHeight, setContentHeight] = useState(0);

  // // 컨텐츠의 높이 구하기
  // useEffect(() => {
  //   if (openProject && contentRef.current) {
  //     setContentHeight(contentRef?.current?.scrollHeight);
  //   }
  // }, [openProject]);

  const toggleDetail = (title: string) => {
    setOpenProject((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };
  return (
    <section className="w-full h-[100%] bg-[url(/images/background1.png)]">
      <div className="max-w-[1300px] h-full mx-auto py-[180px] flex justify-between items-start gap-[85px] relative left-0 top-0">
        <div className="w-[30%] flex items-center gap-4 pt-8">
          <div className="w-[8px] h-[90px] bg-white"></div>
          <h1 className="title-40-black">
            그동안 경험했던
            <br />
            프로젝트
          </h1>
        </div>
        <ul className="w-[60%] flex flex-col items-end mt-8">
          <AnimatePresence>
            {PROJECTS.map((project) => {
              const isOpen = openProject.includes(project.title);
              return (
                <motion.li
                  key={project.title}
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
                    onClick={() => toggleDetail(project.title)}
                    // whileHover={{
                    //   background: "#1b1b1b",
                    // }}
                    animate={{
                      width: isOpen ? "100%" : "auto",
                    }}
                    className={`border-b border-[#444444] p-8 cursor-pointer flex ${
                      isOpen ? "bg-[#1b1b1b]" : "bg-transparent"
                    }`}
                  >
                    <div>
                      <h2 className="title-26-extraLight break-keep mb-1">
                        {project.title}
                      </h2>
                      <h3 className="text-16-extraLight text-[#ccc] break-keep">
                        {project.description}
                      </h3>
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
                        // transition={{ duration: 0.4 }}
                        // className="bg-[url(/images/background1.png)]"
                      >
                        {/* 사용 기술 및 언어 */}
                        <div>
                          <div className="flex items-center gap-2 py-[20px]">
                            <div className="w-[10px] h-[10px] bg-white rounded-[1px]" />
                            <h1 className="title-24-bold">사용 기술 및 언어</h1>
                          </div>
                          <ul className="flex gap-2">
                            {project.techStack?.map((feature) => (
                              <li key={feature.title}>
                                <h1 className="text-16-bold bg-[#2b2b2b] px-3 py-2 mb-[14px]">
                                  {feature.title}
                                </h1>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* 주요 기능 및 특징 */}
                        <div>
                          <div className="flex items-center gap-2 py-[20px]">
                            <div className="w-[10px] h-[10px] bg-white rounded-[1px]" />
                            <h1 className="title-24-bold">주요 기능 및 특징</h1>
                          </div>
                          <ul>
                            {project.features?.map((feature) => (
                              <li key={feature.title} className="mb-4">
                                <h1 className="text-16-bold bg-[#2b2b2b] px-3 py-2 mb-[14px]">
                                  {feature.title}
                                </h1>
                                <ul className="ml-5 list-disc">
                                  {feature.items.map((item, index) => (
                                    <li
                                      key={index}
                                      className="text-16-regular mb-2"
                                    >
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 작업 기여도 */}
                        <div>
                          <div className="flex items-center gap-2 py-[20px]">
                            <div className="w-[10px] h-[10px] bg-white rounded-[1px]" />
                            <h1 className="title-24-bold">고민과 작업</h1>
                          </div>
                          <ul>
                            {project.work?.map((feature) => (
                              <li key={feature.title} className="mb-4">
                                <h1 className="text-16-bold bg-[#2b2b2b] px-3 py-2 mb-[14px]">
                                  {feature.title}
                                </h1>
                                {/* <ul className="ml-5 list-disc">
                              {feature.items.map((item, index) => (
                                <li key={index} className="text-16-regular mb-2">{item}</li>
                              ))}
                            </ul> */}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
};

export default Project;
