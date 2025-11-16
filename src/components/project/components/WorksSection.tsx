import { ProjectDetailType } from "@/types/ProjectType";
import Link from "next/link";
import React from "react";
import { AiFillAlert } from "react-icons/ai";

interface PropsType {
  works: ProjectDetailType["works"] | undefined;
}
const WorksSection = ({ works }: PropsType) => {
  return (
    <div>
      <div className="flex items-center gap-2 py-[20px]">
        <AiFillAlert size={"23px"} />
        <h1 className="title-24-bold">마주한 고민과 해결 과정들</h1>
      </div>
      <ul>
        {works?.map((work) => (
          <li key={work.title} className="mb-4">
            <div className="flex justify-between items-center bg-[#333333] px-3 py-2 mb-[14px]">
              <h1 className="text-17-regular">{work.title}</h1>
              {work.blog && (
                <Link className="text-16-extraLight" target="_blank" href={work.blog || ""}>
                  BLOG
                </Link>
              )}
            </div>
            <div className="mb-3">
              <div className="flex gap-2 items-center mb-2">
                <h2 className="text-17-regular whitespace-nowrap text-[#777]">
                  마주한 고민과
                </h2>
                <div className="w-full h-[1px] bg-[#555555]" />
              </div>
              <p className="text-17-light text-[#eeeeee] break-keep">
                {work.thinking}
              </p>
            </div>
            <div>
              <div className="flex gap-2 items-center mb-2">
                <h2 className="text-17-regular whitespace-nowrap text-[#777]">
                  해결 과정들
                </h2>
                <div className="w-full h-[1px] bg-[#555555]" />
              </div>
              <p
                className="text-17-light text-[#eeeeee] break-keep"
                dangerouslySetInnerHTML={{ __html: work.description }}
              ></p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorksSection;
