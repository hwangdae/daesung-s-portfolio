import { ProjectDetailType } from "@/types/ProjectType";
import React from "react";

interface PropsType {
  troubleShooting: ProjectDetailType["troubleShooting"];
}

const TroubleShootingSection = ({ troubleShooting }: PropsType) => {
  console.log(troubleShooting);
  return (
    <div>
      <div className="flex items-center gap-2 py-[20px]">
        <div className="w-[10px] h-[10px] bg-white rounded-[1px]" />
        <h1 className="title-24-bold">트러블 슈팅</h1>
      </div>
      <div>
        <h2 className="text-17-regular bg-[#333333] px-3 py-2 mb-[14px]">
          {troubleShooting[0]?.title}
        </h2>
      </div>
      <div>
        {troubleShooting?.map((troubleShooting) => (
          <div key={troubleShooting.id} className="mb-4">
            <div className="flex gap-2 items-center mb-2">
              <h2 className="text-17-regular whitespace-nowrap">
                {troubleShooting.trouble.title}
              </h2>
              <div className="w-full h-[1px] bg-[#555555]" />
            </div>
            <ul className="mb-3">
              {troubleShooting.trouble.contents.map((content, i) => {
                return <li key={i}>{content}</li>;
              })}
            </ul>
            <div className="flex gap-2 items-center mb-2">
              <h3 className="text-17-bold whitespace-nowrap">
                {troubleShooting.cause.title}
              </h3>
              <div className="w-full h-[1px] bg-[#555555]" />
            </div>
            <ul className="mb-3">
              {troubleShooting.cause.contents.map((content, i) => {
                return <li key={i}>{content}</li>;
              })}
            </ul>
            <div className="flex gap-2 items-center mb-2">
              <h3 className="text-17-bold whitespace-nowrap">
                {troubleShooting.solution.title}
              </h3>
              <div className="w-full h-[1px] bg-[#555555]" />
            </div>
            <ul className="mb-3">
              {troubleShooting.solution.contents.map((content, i) => {
                return <li key={i}>{content}</li>;
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TroubleShootingSection;
