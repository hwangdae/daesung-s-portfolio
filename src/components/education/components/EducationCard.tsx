import FadeInView from "@/components/ui/FadeInView";
import React from "react";

interface PropsType {
  title: string;
  period: string;
  contents: string[];
  position: "left" | "right";
  index: number;
}

const EducationCard = ({
  title,
  period,
  contents,
  position,
  index,
}: PropsType) => {
  return (
    <FadeInView
      className={`flex flex-1 gap-[24px] ${
        position === "left" ? "justify-start" : "justify-end"
      }`}
    >
      {position === "right" && (
        <div className="relative left-0 top-0">
          <div
            className={`w-[14px] h-[3px] bg-[#444] rounded-full absolute left-1/2  ${
              index === 0 && "top-[120px]"
            } ${index === 1 && "top-[230px]"} -translate-x-1/2`}
          ></div>
        </div>
      )}
      {/* 카드 */}
      <div
        className={`relative bg-[#272727] px-[20px] py-[26px] min-w-[430px] max-w-[430px] ${
          index === 0 && "top-[60px]"
        } ${index === 1 && "top-[100px]"} ${index === 2 && "top-[-50px]"}`}
      >
        <div className="mb-[36px]">
          <h1 className="title-22-bold mb-2">{title}</h1>
          <p className="text-14-light text-[#ccc]">{period}</p>
        </div>
        <ul className="ml-5 list-disc break-keep">
          {contents.map((content, i) => {
            return (
              <li key={i} className="text-16-light last:mb-0 mb-2 text-[#ccc]">
                {content}
              </li>
            );
          })}
        </ul>
      </div>
      {position === "left" && (
        <div className="relative left-0 top-0">
          <div
            className={`w-[14px] h-[3px] bg-[#444] rounded-full absolute left-1/2 ${
              index === 0 && "top-[160px]"
            } ${index === 2 && "top-[60px]"} -translate-x-1/2`}
          ></div>
        </div>
      )}
    </FadeInView>
  );
};

export default EducationCard;
