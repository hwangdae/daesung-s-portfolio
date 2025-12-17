"use client";
import FadeInView from "../ui/FadeInView";
import { AnimatePresence, motion } from "motion/react";
import { useAboutStore } from "@/stores/daisyStore";

const SUBTITLES = ["사용자 경험", "신뢰감", "편의"];
const HOBBIES = ["스노우보드", "게임"];

const AboutMe = () => {
  const { about } = useAboutStore();

  return (
    <section className={`relative left-0 top-0 w-full h-[100vh] bg-[#181818]`}>
      <div className="z-50 max-w-[1300px] h-full mx-auto py-[12vh] flex justify-between">
        <FadeInView delay={0.1} className="w-[39%]">
          <AnimatePresence mode="wait">
            {about ? (
              <motion.div
                key="about-true"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="title-40-black mb-[40px]">
                  <span className="text-[#f7aa47]">집</span>을 좋아하는
                  <br />
                  프론트엔드 개발자
                </h1>
                <div>
                  <div className="w-[16px] h-[1px] bg-[#ccc] mb-[12px]"></div>
                  <ul>
                    {HOBBIES.map((subTitle) => {
                      return (
                        <li key={subTitle}>
                          <p className="title-24-light mb-[14px] text-[#ccc]">
                            {subTitle}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="about-false"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="title-40-black mb-[40px]">
                  당연함을 당연하게
                  <br />
                  프론트엔드 개발자
                </h1>
                <div>
                  <div className="w-[16px] h-[1px] bg-[#ccc] mb-[12px]"></div>
                  <ul>
                    {SUBTITLES.map((subTitle) => {
                      return (
                        <li key={subTitle}>
                          <p className="title-24-light mb-[14px] text-[#ccc]">
                            {subTitle}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </FadeInView>
        <div className="w-[61%] flex justify-end items-end">
          <FadeInView
            className="text-20-light text-[rgba(255,255,255,0.9)] !leading-[40px] break-keep"
            delay={0.2}
          >
            <AnimatePresence mode="wait">
              {about ? (
                <motion.p
                  key="about-true"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  저는 소위 말하는 ‘집돌이’입니다. 집에만 있어도 전혀 지루하지
                  않을 정도로 혼자서 잘 노는 타입이에요. 주로 TV를 보거나 게임을
                  하면서 시간을 보내곤 합니다.
                  <br /> 겨울에는 보드를 타는 걸 좋아하지만, 가격이 만만치 않아
                  자주 즐기진 못합니다.
                  <br /> 예전에 보드를 타다가 어깨를 다친 이후로는 겁이 조금
                  생겨 더 조심하게 됐어요.
                  <br /> 그렇다고 제가 보드를 잘 탄다는 건 아니에요.
                  <br /> 그래도 겨울만 되면 다시 생각날 만큼 좋아하는
                  취미입니다.
                </motion.p>
              ) : (
                <motion.p
                  key="about-false"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  저는 당연함이 사소한 디테일에서 시작된다고 생각합니다. 특별함
                  보다 사용자가 당연하게 느낄 수 있는 경험을 위해 끊임없이
                  고민합니다. 사용자와 가장 가까이 맞닿아 있는 개발자로서,
                  화려한 기능보다는 불편함 없이 자연스럽게 사용할 수 있는 화면을
                  설계하는 것을 목표로 합니다. 사람마다 서비스를 바라보는 관점은
                  다를 수 있지만, UX의 불편함은 누구에게나 비슷하게 다가온다고
                  생각합니다. 서비스에서 ‘당연히 보여야 하는 화면과 흐름’을
                  고민하며, 사소한 디테일 속에서 당연함을 완성해가는 개발자가
                  되겠습니다.
                </motion.p>
              )}
            </AnimatePresence>
          </FadeInView>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
