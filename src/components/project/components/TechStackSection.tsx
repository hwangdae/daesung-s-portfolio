import { ProjectDetailType } from "@/types/ProjectType";
import React from "react";

interface PropsType {
  techStacks: ProjectDetailType["techStacks"] | undefined;
}

const TechStackSection = ({ techStacks }: PropsType) => {
  return (
    <div>
      <div className="flex items-center gap-2 py-[20px]">
        <div className="w-[10px] h-[10px] bg-white rounded-[1px]" />
        <h1 className="title-24-bold">사용 기술 및 언어</h1>
      </div>
      <ul className="flex flex-wrap gap-2">
        {techStacks?.map((techStack) => (
          <li key={techStack.title}>
            <h1 className="text-16-regular bg-[#2b2b2b] px-3 py-2 mb-[4px]">
              {techStack.title}
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStackSection;
