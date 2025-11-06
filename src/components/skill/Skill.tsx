import React from "react";
import {
  Axios,
  PostgresQL,
  ReactIcon,
  ReactQuery,
  StyledComponents,
  Supabase,
  Typescript,
  Zustand,
} from "@/assets";
import SkillItem from "./SkillItem";
import { motion } from "motion/react";
import FadeInView from "../ui/FadeInView";
import LineFadeInView from "../ui/LineFadeInView";
import Image from "next/image";

const SKILLITEMS = [
  {
    id: 1,
    category: "tech stack",
    name: "React / TypeScript",
    description:
      "주요 프로젝트의 프론트엔드 개발에 사용 했습니다. 컴포넌트 기반 아키텍처와 타입 안정성을 바탕으로 유지보수성과 확장성을 고려한 UI를 구현한 경험이 있습니다.",
  },
  {
    id: 2,
    category: "tech stack",
    name: "ReactQuery",
    description:
      "캐싱 및 비동기 데이터 요청을 최적화하고, 서버와의 통신 시 반복되는 패턴은 공통 커스텀 훅으로 분리하여 재사용성과 유지보수성을 높였습니다.",
  },
  {
    id: 3,
    category: "tech stack",
    name: "Axios",
    description:
      "주요 프로젝트의 프론트엔드 개발에 사용 했습니다. 컴포넌트 기반 아키텍처와 타입 안정성을 바탕으로 유지보수성과 확장성을 고려한 UI를 구현한 경험이 있습니다.",
  },
  {
    id: 4,
    category: "tech stack",
    name: "StyledComponents",
    description:
      "공통된 디자인 요소를 기반으로 스타일을 재사용하여 유지보수성과 확장성을 높였습니다. 조건부 스타일링을 통해 상태 변화에 따른 UI 를 구현한 경험이 있습니다.",
  },
  // {
  //   id: 5,
  //   category: "tech stack",
  //   name: "Tailwind",
  //   description:
  //     "캐싱 및 비동기 데이터 요청을 최적화하고, 서버와의 통신 시 반복되는 패턴은 공통 커스텀 훅으로 분리하여 재사용성과 유지보수성을 높였습니다.",
  // },
  {
    id: 6,
    category: "tech stack",
    name: "Zustand",
    description:
      "간단하고 직관적인 전역 상태 관리 도구로 사용 했습니다. 사용자 정보, UI 토글 상태 등 가벼운 상태 관리에 적합하게 활용한 경험이 있습니다.",
  },
  {
    id: 7,
    category: "tech stack",
    name: "Supabase / PostgresQL",
    description:
      "Supabase를 활용한 인증, 데이터베이스 연동, 파일 스토리지를 구현한 경험이 있습니다. PostgreSQL 기반 데이터 모델 설계 및 Prisma ORM을 활용하여 관계형 쿼리를 작성한 경험이 있습니다.",
  },
];

const TOOLITEMS = [
  {
    id: 1,
    name: "Github",
    description:
      "코드 버전 관리 및 협업 경험이 있으며, 브랜치 전략을 활용해 프로젝트를 관리했습니다.",
  },
  {
    id: 2,
    name: "Swagger",
    description:
      "백엔드에서 제공한 API 문서를 확인하고 테스트하며, 프론트엔드 개발에 활용한 경험이 있습니다.",
  },
  {
    id: 3,
    name: "Figma",
    description:
      "디자이너와 협업하며 UI/UX 시안을 기반으로 작업을 진행했고, Comment 기능을 활용해 의견을 공유·반영한 경험이 있습니다.",
  },
  {
    id: 4,
    name: "Discord",
    description:
      "팀 프로젝트를 진행하면서 실시간 소통과 피드백을 주고받으며 협업에 활용한 경험이 있습니다.",
  },
];

const Skill = () => {
  return (
    <section className="relative w-full">
      <Image
      className="relative -z-1"
        src={"/images/background2.png"}
        alt="사용 기술 백그라운드 이미지"
        fill
      />
      <div className="z-50 max-w-[1300px] h-full mx-auto py-[12vh] flex justify-between flex-col items-start gap-[85px] relative left-0 top-0">
        <FadeInView className="w-[30%] flex items-center gap-4">
          <div className="w-[8px] h-[90px] bg-white"></div>
          <h1 className="title-40-black">
            사용하는 기술
            <br />
            그리고 툴
          </h1>
        </FadeInView>
        <div className="w-[100%] mt-[70px]">
          <div className="mb-[80px]">
            <FadeInView className="flex items-center gap-4  mb-6">
              <h2 className="title-28-regular">기술</h2>
              <LineFadeInView className="flex flex-1 h-[1px] bg-[#444444]" />
            </FadeInView>
            <FadeInView as="ul" className="grid grid-cols-2 gap-5">
              {SKILLITEMS.map((skillItem) => {
                return (
                  <li key={skillItem.id} className="relative">
                    <div className="rounded-md">
                      <div className="bg-[#111111] flex items-center gap-2 border-b border-[#444444] w-full p-4">
                        <h1 className="text-18-light">{skillItem.name}</h1>
                      </div>
                      <h4 className="text-17-extraLight !leading-[26px] px-2 py-4 break-keep">
                        {skillItem.description}
                      </h4>
                    </div>
                  </li>
                );
              })}
            </FadeInView>
          </div>
          <div>
            <div className="flex items-center gap-4  mb-6">
              <h2 className="title-28-regular">툴</h2>
              <LineFadeInView className="flex flex-1 h-[1px] bg-[#444444]" />
            </div>
            <FadeInView className="grid grid-cols-2 gap-5">
              {TOOLITEMS.map((tollItem) => {
                return (
                  <li key={tollItem.id} className="relative">
                    <div className="rounded-md">
                      <div className="bg-[#111111] flex items-center gap-2 border-b border-[#444444] w-full p-4">
                        <h1 className="text-18-light">{tollItem.name}</h1>
                      </div>
                      <h4 className="text-18-extraLight !leading-[26px] px-2 py-4 break-keep">
                        {tollItem.description}
                      </h4>
                    </div>
                  </li>
                );
              })}
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
