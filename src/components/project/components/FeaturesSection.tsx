import { Arrow, Arrow2, ArrowDown } from "@/assets";
import { ProjectDetailType } from "@/types/ProjectType";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface PropsType {
  features: ProjectDetailType["features"] | undefined;
}

const FeaturesSection = ({ features }: PropsType) => {
  const [openFeatures, setOpenFeatures] = useState<number[]>([]);
  const handleclick = (i: number) => {
    if (openFeatures.includes(i)) {
      setOpenFeatures(openFeatures.filter((index) => index !== i));
    } else {
      setOpenFeatures([...openFeatures, i]);
    }
  };
  return (
    <div>
      <div className="flex items-center gap-2 py-[20px]">
        <div className="w-[10px] h-[10px] bg-white rounded-[1px]" />
        <h1 className="title-24-bold">주요 기능 및 특징</h1>
      </div>
      <ul>
        {features?.map((feature, i) => (
          <li
            key={i}
            className="mb-4 cursor-pointer"
            onClick={() => handleclick(i)}
          >
            <div className="flex justify-between bg-[#333333] mb-[14px] px-3 py-2">
              <h1 className="text-17-regular">{feature.title}</h1>
              {feature.items.length > 0 && (
                <button
                  className={`w-[24px] h-full transition-transform duration-300 ${
                    openFeatures.includes(i) ? "rotate-180" : ""
                  }`}
                >
                  <Arrow2 />
                </button>
              )}
            </div>
            <AnimatePresence>
              {openFeatures.includes(i) && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="ml-5 list-disc overflow-hidden"
                >
                  {feature.items.map((item, index) => (
                    <li
                      key={index}
                      className="text-17-light mb-2 text-[#eeeeee]"
                    >
                      {item}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesSection;
