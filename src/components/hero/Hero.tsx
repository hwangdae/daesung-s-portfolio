import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import FadeInView from "../ui/FadeInView";

const ABOUTS = [
  "hwangdeveloper@naver.com",
  "+82 10 2406 8022",
  "devdaybook.tistory.com",
  "github.com/HwangDae",
];

const Hero = () => {
  const [fontReady, setFontReady] = useState(false);

  // useEffect(() => {
  //   // 폰트가 모두 로드될 때까지 기다림
  //   document.fonts.ready.then(() => {
  //     setFontReady(true);
  //   });
  // }, []);

  // if (!fontReady) {
  //   // 폰트 로딩 중에는 전체 숨기거나, 로딩 플레이스홀더 보여주기
  //   return <div style={{ height: "200px" }} />; // 공간 유지용
  // }
  return (
    <section className="bg-[url(/images/hero-backgroundImage.webp)] w-full h-[100vh] relative right-0 top-0 overflow-hidden">
      <div className="max-w-[1300px] h-full mx-auto pt-[130px] pb-[80px] flex flex-col justify-between">
        <div>
          <ReactTyped
            strings={[`안녕하세요,<br>프론트엔드 개발자<br>황대성 입니다.`]}
            typeSpeed={80}
            showCursor={false}
            className="hero-64-regular text-white"
          ></ReactTyped>
          {/* <div className="mt-[20px]">
            <p className="text-22-thin text-[#E0E0E0] mb-[20px]">WEB</p>
            <p className="text-22-thin text-[#E0E0E0]">PRONTEND DEVELOPER</p>
          </div> */}
        </div>
        <FadeInView delay={2.7}>
          <div className="w-[14px] h-[1px] bg-[#848484] mb-2" />
          {ABOUTS.map((about) => {
            return (
              <li key={about}>
                <p className="text-17-thin text-[#E0E0E0] mb-1">{about}</p>
              </li>
            );
          })}
        </FadeInView>

        <FadeInView
          delay={2.9}
          className="absolute right-[200px] bottom-[80px] z-50 origin-top cursor-pointer block px-5"
        >
          <div className="h-[730px] w-[1px] bg-[#444] relative right-0 bottom-0"></div>
          <div className="h-[20px] w-[1px] bg-[#444] relative right-[7px] bottom-[16px] -rotate-45" />
        </FadeInView>
      </div>
    </section>
  );
};

export default Hero;
