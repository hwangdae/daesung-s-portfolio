import EducationCard from "./components/EducationCard";
import FadeInView from "../ui/FadeInView";
import LineFadeInView from "../ui/LineFadeInView";
import { useEducationStore } from "@/stores/daisyStore";
import RightFadeInView from "../ui/RightFadeInView";
import { AnimatePresence } from "motion/react";

const EDUCATIONS = [
  {
    id: "sparta",
    title: "스파르타코딩클럽 React 과정",
    period: "2023.05.15 - 2023.09.19",
    contents: [
      "JavaScript, React, Git 등 실무 필수 기술 집중 학습",
      "20주 동안의 프로그래밍 학습과 개인 프로젝트, 팀 프로젝트 진행",
      "원격 환경에서 실시간 커뮤니케이션 툴(Slack, Notion 등) 활용",
      "디자이너와의 협업을 통해 UI/UX 시안을 구현",
    ],
  },
  {
    id: "uiux",
    title: "UI/UX 반응형 웹디자인&웹퍼블리셔",
    period: "2021.12.06 - 2022.04.26",
    contents: [
      "HTML, CSS 활용해 웹 표준, 접근성을 고려한 웹 페이지 퍼블리싱",
      "Media Query를 활용한 반응형 웹 구현",
      "JavaScript 및 CSS를 활용한 인터랙티브 애니메이션 구현",
      "Photoshop, Illustrator을 활용해 간단한 디자인 편집 및 웹용 이미지, 아이콘 제작",
    ],
  },
  {
    id: "university",
    title: "경복대학교",
    period: "2016.02.03 - 2020.02.02",
    contents: [
      "컴퓨터정보과 전공",
      "빗물감지센서를 활용한 원격창문제어 앱 구현",
      "Photoshop을 활용해 간단한 디자인 편집 및 웹용 이미지 제작",
    ],
  },
];

const Education = () => {
  const { education } = useEducationStore();

  return (
    <section className="relative right-0 top-0 w-full bg-[#191919]">
      <div className="relative z-40 max-w-[1300px] h-full mx-auto flex justify-between items-start py-[12vh]">
        <FadeInView className="w-[30%] flex items-center gap-4">
          <div className="w-[8px] h-[46px] bg-white" />
          <h1 className="title-40-black">학습했던 과정들</h1>
        </FadeInView>
        <div className="relative right-0 top-0 flex flex-col justify-center w-[70%] h-full mt-[120px]">
          <ul className="h-full">
            {/* 히든 아이템 */}
            <AnimatePresence mode="wait">
              {education && (
                <RightFadeInView className="absolute right-0 top-[-130px]">
                  <div
                    className={`w-[14px] h-[3px] bg-[#444] rounded-full relative right-[32px] top-[360px]`}
                  />
                  <div className="flex justify-end">
                    <div className="relative right-0 top-[250px] bg-[#272727] px-[20px] py-[26px] min-w-[430px] max-w-[430px]">
                      <div className="mb-[36px]">
                        <h1 className="title-22-bold mb-2">
                          크로스디자인그룹주식회사
                        </h1>
                        <p className="text-14-light text-[#ccc]">
                          2022.07.25 - 2023.04.15
                        </p>
                      </div>
                      <ul className="ml-5 list-disc break-keep">
                        <li className="text-16-light last:mb-0 mb-2 text-[#ccc]">
                          워드프레스를 활용한 홈페이지 제작 및 유지보수
                        </li>
                        <li className="text-16-light last:mb-0 mb-2 text-[#ccc]">
                          Photoshop을 활용한 간단한 이미지 제작 및 편집
                        </li>
                        <li className="text-16-light last:mb-0 mb-2 text-[#ccc]">
                          Media Query를 활용한 반응형 웹 구현
                        </li>
                      </ul>
                    </div>
                  </div>
                </RightFadeInView>
              )}
            </AnimatePresence>
            {EDUCATIONS.map((education, i) => {
              return (
                <EducationCard
                  key={education.id}
                  title={education.title}
                  period={education.period}
                  contents={education.contents}
                  position={i % 2 === 0 ? "left" : "right"}
                  index={i}
                />
              );
            })}
          </ul>

          <LineFadeInView
            position="y"
            className="absolute right-[454px] top-0 w-[2px] h-[100%] bg-[#444]"
          ></LineFadeInView>
        </div>
      </div>
    </section>
  );
};

export default Education;
