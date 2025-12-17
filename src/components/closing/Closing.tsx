"use client";
import FadeInView from "../ui/FadeInView";
import LineFadeInView from "../ui/LineFadeInView";
import { useClosingStore } from "@/stores/daisyStore";

import { AnimatePresence } from "motion/react";
import LinkFn from "./hidden/LinkFn";

const Closing = () => {
  const { closing } = useClosingStore();
  return (
    <section className="bg-[url(/images/background.png)] w-full h-[100vh] flex justify-center items-center relative right-0 top-0">
      <div className="max-w-[1300px] h-full mx-auto flex justify-center items-center">
        <div className="text-white h-full mx-auto flex justify-center">
          <div className="flex flex-col items-start">
            <div className="h-full flex flex-col justify-center mb-4 min-w-[1054px]">
              <FadeInView>
                <h1 className="hero-58-regular mb-4">
                  저의 포트폴리오를 봐주셔서 감사합니다.
                </h1>
              </FadeInView>
              <LineFadeInView
                delay={0.4}
                className="w-[1000px] h-[1px] bg-[#848484] mb-3"
              ></LineFadeInView>
              <FadeInView delay={1.5}>
                <h2 className="text-18-extraLight !leading-[26px]">
                  사용자 경험과 개발자 경험 모두를 고려한 개발을 위해 노력하고,
                  더 나은 UI/UX와 효율적인 코드 작성을 위해 꾸준히
                  공부하겠습니다.
                </h2>
              </FadeInView>
            </div>
            {/* 히든 */}
            <AnimatePresence mode="wait">
              {closing && <LinkFn />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Closing;
