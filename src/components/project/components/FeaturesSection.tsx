import { ProjectDetailType } from "@/types/ProjectType";
import React from "react";

interface PropsType {
  features: ProjectDetailType["features"] | undefined;
}

const FeaturesSection = ({ features }: PropsType) => {
  return (
    <div>
      <div className="flex items-center gap-2 py-[20px]">
        <div className="w-[10px] h-[10px] bg-white rounded-[1px]" />
        <h1 className="title-24-bold">주요 기능 및 특징</h1>
      </div>
      <ul>
        {features?.map((feature) => (
          <li key={feature.title} className="mb-4">
            <h1 className="text-17-bold bg-[#2b2b2b] px-3 py-2 mb-[14px]">
              {feature.title}
            </h1>
            <ul className="ml-5 list-disc">
              {feature.items.map((item, index) => (
                <li key={index} className="text-17-regular mb-2 text-[#eeeeee]">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesSection;
