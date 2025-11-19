import React, { useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import FadeInView from "../ui/FadeInView";
import { useScrollRef } from "@/hooks/scrollRef";
import { motion } from "motion/react";

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
      className="bg-[url(/images/hero-backgroundImage.webp)] w-full h-[100vh] relative right-0 top-0"
    >
      <div className="max-w-[1300px] h-full mx-auto pt-[130px] pb-[80px] flex justify-between">
        <div className="h-full flex flex-col justify-between">
          <div ref={scrollRef}>
            {inView && (
              <ReactTyped
                strings={[`안녕하세요,<br>프론트엔드 개발자<br>황대성 입니다.`]}
                typeSpeed={85}
                showCursor={false}
                className="hero-64-regular text-white text-center"
              />
            )}
          </div>
          <div>
            <FadeInView delay={2.9}>
              <div className="w-[14px] h-[1px] bg-[#848484] mb-2" />
              {ABOUTS.map((about) => {
                return (
                  <li key={about}>
                    <p className="text-17-thin text-[#E0E0E0] mb-1">{about}</p>
                  </li>
                );
              })}
            </FadeInView>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-[100px]">
        <motion.div
          initial={{ y: "-100%" }}
          animate={inView && { y: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <motion.div
            animate={{ scaleY: ["100%", "103%", "100%"] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.2,
            }}
          >
            <button
              onClick={onScrollClick}
              className="origin-top cursor-pointer w-[300px] h-[96vh] bg-[rgba(255,255,255,0.01)] [clip-path:polygon(0_0,100%_0,100%_96%,50%_100%,0_96%)]"
            ></button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
