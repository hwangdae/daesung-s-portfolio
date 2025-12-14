"use client";
import Link from "next/link";
import FadeInView from "../ui/FadeInView";
import LineFadeInView from "../ui/LineFadeInView";
import { useClosingStore } from "@/atoms/daisyState";
import { Blog, Github } from "@/assets";
import RightFadeInView from "../ui/RightFadeInView";
import { AnimatePresence } from "motion/react";

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
              {closing && (
                <div className="fixed right-[260px] bottom-[60px]">
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
                        <Link
                          href="https://github.com/hwangdae"
                          target="_blank"
                        >
                          GITHUB
                        </Link>
                      </h2>
                    </div>
                    <div>
                      <Link
                        href="https://devdaybook.tistory.com/"
                        target="_blank"
                      >
                        <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-white mb-1.5">
                          <div className="flex justify-center items-center border border-[#bbbbbb] rounded-full w-[46px] h-[46px]">
                            <Blog width={23} height={23} />
                          </div>
                        </div>
                      </Link>
                      <h2 className="text-14-light text-center">
                        <Link
                          href="https://devdaybook.tistory.com/"
                          target="_blank"
                        >
                          BLOG
                        </Link>
                      </h2>
                    </div>
                  </RightFadeInView>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Closing;
