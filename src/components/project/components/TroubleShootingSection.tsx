import { ProjectDetailType } from "@/types/ProjectType";
import React from "react";

interface PropsType {
  troubleShooting: ProjectDetailType["troubleShooting"] | undefined;
}

const TroubleShootingSection = ({ troubleShooting }: PropsType) => {
  return (
    <div>
      <div className="flex items-center gap-2 py-[20px]">
        <div className="w-[10px] h-[10px] bg-white rounded-[1px]" />
        <h1 className="title-24-bold">고민과 작업</h1>
      </div>
      <ul>
        {troubleShooting?.map((trouble) => (
          <li key={trouble.title} className="mb-4">
            <h1 className="text-17-bold bg-[#2b2b2b] px-3 py-2 mb-[14px]">
              {trouble.title}
            </h1>
            <div className="mb-2">
              <h2 className="underline mb-1 decoration-[#898989]">Why</h2>
              <p className="text-17-regular text-[#eeeeee] break-keep">
                {trouble.trouble.title}
              </p>
            </div>
            <div>
              <h2 className="underline mb-1 decoration-[#898989]">
                What i did?
              </h2>
              <p className="text-17-regular text-[#eeeeee] break-keep">
                {trouble.trouble.content}
              </p>
            </div>

            {/* <ul className="ml-5 list-disc">
                              {feature.items.map((item, index) => (
                                <li key={index} className="text-16-regular mb-2">{item}</li>
                              ))}
                            </ul> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TroubleShootingSection;
