import React from "react";
import EducationCard from "./components/EducationCard";
import FadeInView from "../ui/FadeInView";
import LineFadeInView from "../ui/LineFadeInView";

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
  return (
    <section className="w-full bg-[url(/images/background2.png)]">
      <div className="max-w-[1300px] h-full mx-auto flex justify-between items-start py-[12vh]">
        <FadeInView className="w-[30%] flex items-center gap-4">
          <div className="w-[8px] h-[46px] bg-white" />
          <h1 className="title-40-black">학습했던 과정들</h1>
        </FadeInView>
        <div className="relative left-0 top-0 flex flex-col justify-center w-[70%] h-full mt-[120px]">
          <ul className="h-full">
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
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-[100%] bg-[#444]"
          ></LineFadeInView>
        </div>
      </div>
    </section>
  );
};

export default Education;
