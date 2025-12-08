import React from "react";
import FadeInView from "../ui/FadeInView";
import LineFadeInView from "../ui/LineFadeInView";
import Image from "next/image";
import { SKILLITEMS, TOOLITEMS } from "@/constants/skill";
import { useSkillStore } from "@/atoms/daisyState";
import SkillModal from "./SkillModal";

const Skill = () => {
  const { skill } = useSkillStore();

  return (
    <section className="relative w-full z-50">
      <Image
        className="relative"
        quality={100}
        src={"/images/contentsBackground.webp"}
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
            <FadeInView className="grid grid-cols-2 gap-5">
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
      <SkillModal open={skill} />
    </section>
  );
};

export default Skill;
