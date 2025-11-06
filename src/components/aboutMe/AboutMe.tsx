import React from "react";
import FadeInView from "../ui/FadeInView";
import Image from "next/image";

const SUBTITLES = ["사용자 경험", "신뢰감", "편의"];

const AboutMe = () => {
  return (
    <section className="relative left-0 top-0 w-full h-[100vh]">
      <Image
      className="relative left-0 top-0 -z-20"
        src={"/images/background2.png"}
        alt="소개 백그라운드 이미지"
        fill
      />

      <div className="z-50 max-w-[1300px] h-full mx-auto py-[12vh] flex justify-between">
        <FadeInView className="w-[40%]">
          <h1 className="title-40-black mb-[40px]">
            당연함을 당연하게
            <br />
            프론트엔드 개발자
          </h1>
          <div>
            <div className="w-[10px] h-[1px] bg-[#ccc] mb-[12px]"></div>
            <ul>
              {SUBTITLES.map((subTitle) => {
                return (
                  <li key={subTitle}>
                    <p className="title-20-regular mb-[10px] text-[#ccc]">
                      {subTitle}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </FadeInView>
        <div className="w-[60%] flex justify-end items-end">
          <FadeInView
            className="text-20-light text-[#EEEEEE] !leading-[36px] break-keep"
            delay={0.4}
          >
            저는 당연함이 사소한 디테일에서 시작된다고 생각합니다. 특별함 보다
            사용자가 당연하게 느낄 수 있는 경험을 위해 끊임없이 고민합니다.
            사용자와 가장 가까이 맞닿아 있는 개발자로서, 화려한 기능보다는
            불편함 없이 자연스럽게 사용할 수 있는 화면을 설계하는 것을 목표로
            합니다. 사람마다 서비스를 바라보는 관점은 다를 수 있지만, UX의
            불편함은 누구에게나 비슷하게 다가온다고 생각합니다. 그래서 저는
            서비스에서 ‘당연히 보여야 하는 화면과 흐름’을 고민하며, 누구나
            직관적으로 사용할 수 있는 인터페이스를 만들고자 합니다.
          </FadeInView>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
