import React, { useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import FadeInView from "../ui/FadeInView";
import { useScrollRef } from "@/hooks/scrollRef";
import LineFadeInView from "../ui/LineFadeInView";
import Link from "next/link";

interface AboutsType {
  link?: string;
  title: string;
}

const ABOUTS: AboutsType[] = [
  { title: "hwangdeveloper@naver.com" },
  { title: "+82 10 2406 8022" },
  { link: "https://devdaybook.tistory.com/", title: "devdaybook.tistory.com" },
  { link: "https://github.com/hwangdae", title: "github.com/HwangDae" },
];

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollRef, inView } = useScrollRef();

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
        el.style.overflow = "hidden";
      }
    }, 2800);

    return () => {
      clearTimeout(timer);
      if (el) {
        el.removeEventListener("wheel", preventScroll);
        el.removeEventListener("touchmove", preventScroll);
        el.style.overflow = "auto";
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="bg-[url(/images/background.png)] w-full h-[100vh] flex justify-center items-center relative right-0 top-0"
    >
      <div className="max-w-[1300px] h-full mx-auto flex justify-center items-center">
        <div className="flex flex-col items-start">
          <div
            ref={scrollRef}
            className="h-full flex justify-center items-center mb-4 min-w-[1054px]"
          >
            {inView && (
              <ReactTyped
                strings={[`안녕하세요, 프론트엔드 개발자 황대성 입니다.`]}
                typeSpeed={85}
                showCursor={false}
                className="hero-58-regular text-white text-center"
              />
            )}
          </div>
          <LineFadeInView
            delay={2.9}
            className="w-[770px] h-[1px] bg-[#848484] mb-3"
          ></LineFadeInView>
          <FadeInView delay={3.2}>
            <ul className="flex gap-4">
              {ABOUTS.map((about: AboutsType) => {
                return (
                  <li key={about.title}>
                    {about.link ? (
                      <Link href={about.link} target="_blank">
                        <p className="text-17-thin text-[#E0E0E0] mb-1">
                          {about.title}
                        </p>
                      </Link>
                    ) : (
                      <p className="text-17-thin text-[#E0E0E0] mb-1">
                        {about.title}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          </FadeInView>
        </div>
      </div>
    </section>
  );
};

export default Hero;
