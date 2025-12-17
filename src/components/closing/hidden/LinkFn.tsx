import React from "react";
import Link from "next/link";
import { Blog, Github } from "@/assets";
import RightFadeInView from "@/components/ui/RightFadeInView";

const LinkFn = () => {
  return (
    <div className="fixed right-[260px] bottom-[60px] z-50">
      <RightFadeInView className="flex gap-[10px]">
        <div>
          <Link href="https://github.com/hwangdae" target="_blank">
            <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-white mb-1.5">
              <div className="flex justify-center items-center border border-[#bbbbbb] rounded-full w-[46px] h-[46px]">
                <Github width={34} height={34} />
              </div>
            </div>
          </Link>
          <h2 className="text-14-light text-center">
            <Link href="https://github.com/hwangdae" target="_blank">
              GITHUB
            </Link>
          </h2>
        </div>
        <div>
          <Link href="https://devdaybook.tistory.com/" target="_blank">
            <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-white mb-1.5">
              <div className="flex justify-center items-center border border-[#bbbbbb] rounded-full w-[46px] h-[46px]">
                <Blog width={23} height={23} />
              </div>
            </div>
          </Link>
          <h2 className="text-14-light text-center">
            <Link href="https://devdaybook.tistory.com/" target="_blank">
              BLOG
            </Link>
          </h2>
        </div>
      </RightFadeInView>
    </div>
  );
};

export default LinkFn;
