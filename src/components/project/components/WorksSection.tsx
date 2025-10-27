import { ProjectDetailType } from "@/types/ProjectType";
import React from "react";

interface PropsType {
  works: ProjectDetailType["works"] | undefined;
}
const WorksSection = ({ works }: PropsType) => {
  return (
    <div>
      <div className="flex items-center gap-2 py-[20px]">
        <div className="w-[10px] h-[10px] bg-white rounded-[1px]" />
        <h1 className="title-24-bold">마주한 고민과 해결 과정들</h1>
      </div>
      <ul>
        {works?.map((work) => (
          <li key={work.title} className="mb-4">
            <h1 className="text-17-regular bg-[#333333] px-3 py-2 mb-[14px]">
              {work.title}
            </h1>
            <div className="mb-3">
              <div className="flex gap-2 items-center mb-2">
                <h2 className="text-17-regular whitespace-nowrap text-[#777]">마주한 고민과</h2>
                <div className="w-full h-[1px] bg-[#555555]" />
              </div>
              <p className="text-17-light text-[#eeeeee] break-keep">
                {work.thinking}
              </p>
            </div>
            <div>
              <div className="flex gap-2 items-center mb-2">
                <h2 className="text-17-regular whitespace-nowrap text-[#777]">해결 과정들</h2>
                <div className="w-full h-[1px] bg-[#555555]" />
              </div>
              <p className="text-17-light text-[#eeeeee] break-keep" dangerouslySetInnerHTML={{ __html: work.description }}>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorksSection;
