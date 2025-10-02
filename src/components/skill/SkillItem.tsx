import React from "react";

interface PropsType {
  icon: React.FC<React.SVGProps<SVGElement>>;
  iconTitle: string;
}
const SkillItem = ({ icon: Icon, iconTitle }: PropsType) => {
  return (
    <div className="flex items-center gap-2">
      <h1 className="inline-block bg-white rounded-md p-0.5">
        {/* <Icon width={"28px"} height={"28px"} /> */}
      </h1>
      <h1 className="text-white">{iconTitle}</h1>
    </div>
  );
};

export default SkillItem;
