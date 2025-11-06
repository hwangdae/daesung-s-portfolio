import React, { useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import FadeInView from "../ui/FadeInView";

interface HeroProps {
  onScrollClick: () => void;
}

const ABOUTS = [
  "hwangdeveloper@naver.com",
  "+82 10 2406 8022",
  "devdaybook.tistory.com",
  "github.com/HwangDae",
];

const Hero = ({ onScrollClick }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const preventScroll = (e: Event) => e.preventDefault();

    const el = heroRef.current;
    if (el) {
      el.addEventListener("wheel", preventScroll, { passive: false });
      el.addEventListener("touchmove", preventScroll, { passive: false });
    }

    const timer = setTimeout(() => {
      if (el) {
        el.removeEventListener("wheel", preventScroll);
        el.removeEventListener("touchmove", preventScroll);
      }
    }, 2800);

    return () => {
      clearTimeout(timer);
      if (el) {
        el.removeEventListener("wheel", preventScroll);
        el.removeEventListener("touchmove", preventScroll);
      }
    };
  }, []);
  return (
    <section ref={heroRef} className="bg-[url(/images/hero-backgroundImage.webp)] w-full h-[100vh] relative right-0 top-0">
      <div className="max-w-[1300px] h-full mx-auto pt-[130px] pb-[80px] flex flex-col justify-between">
        <div>
          <ReactTyped
            strings={[`안녕하세요,<br>프론트엔드 개발자<br>황대성 입니다.`]}
            typeSpeed={80}
            showCursor={false}
            className="hero-64-regular text-white"
          ></ReactTyped>
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
        <button
          onClick={onScrollClick}
          className="absolute right-[200px] bottom-[80px] z-50 origin-top cursor-pointer block px-5"
        >
          <FadeInView delay={2.9}>
            <div className="h-[60vh] w-[1px] bg-[#444] relative right-0 bottom-0"></div>
            <div className="h-[20px] w-[1px] bg-[#444] relative right-[7px] bottom-[16px] -rotate-45" />
          </FadeInView>
        </button>
      </div>
    </section>
  );
};

export default Hero;
