import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Footer from "../footer/Footer";
import { useScrollRef } from "@/hooks/scrollRef";

const Closing = () => {
  const { scrollRef, inView } = useScrollRef();

  return (
    <section
      ref={scrollRef}
      className="bg-[url(/images/hero-image2.png)] w-full h-[100vh] relative right-0 top-0"
    >
      <div className="max-w-[1300px] h-full mx-auto py-[14vh]">
        <div className="text-white h-full flex flex-col items-center justify-center text-center">
          <div className="">
            <h1 className="title-40-bold mb-4">봐주셔서 감사합니다</h1>
            <h2 className="text-18-extraLight !leading-[26px] mb-12">
              사용자 경험과 개발자 경험 모두를 고려한 개발을 위해 노력하고,
              <br />더 나은 UI/UX와 효율적인 코드 작성을 위해 꾸준히
              공부하겠습니다.
            </h2>
          </div>
          <div className="flex gap-[20px]">
            {/* <div className="w-[10px] h-[1px] bg-[#ccc] mb-[12px]"></div> */}
            <h2 className="text-18-extraLight mb-2">
              <Link href="https://github.com/hwangdae" target="_blank">
                GITHUB
              </Link>
            </h2>
            <h2 className="text-18-extraLight mb-2">
              <Link href="https://reactprac.tistory.com" target="_blank">
                BLOG
              </Link>
            </h2>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </section>
  );
};

export default Closing;
