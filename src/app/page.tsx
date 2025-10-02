"use client";
import AboutMe from "@/components/aboutMe/AboutMe";
import Closing from "@/components/closing/Closing";
import Hero from "@/components/hero/Hero";
import Skill from "@/components/skill/Skill";
import Project from "@/components/project/Project";
import Education from "@/components/education/Education";
import { useEffect, useState } from "react";

export default function Home() {
  // const sections = ["Hero", "AboutMe", "Skill", "Project", "Closing"]; // 순서대로 섹션 정의
  // const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const handleWheel = (e: WheelEvent) => {
  //     // 풀페이지 스크롤은 0번 섹션일 때만
  //     if (current === 0) {
  //       e.preventDefault(); // 브라우저 기본 스크롤 막기
  //       if (e.deltaY > 0) {
  //         // 아래로
  //         setCurrent(1);
  //       }
  //     }
  //   };

  //   window.addEventListener("wheel", handleWheel, { passive: false });
  //   return () => window.removeEventListener("wheel", handleWheel);
  // }, [current]);

  // useEffect(() => {
  //   const target = document.getElementById(`section-${current}`);
  //   if (target) {
  //     target.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [current]);

  return (
    <div>
      <Hero />
      <AboutMe />

      {/* <section
        id="section-0"
        className="h-screen w-screen flex items-center justify-center"
      >
        <Hero />
      </section>

      <section
        id="section-1"
        className="h-screen w-screen flex items-center justify-center"
      >
        <AboutMe />
      </section> */}
      <Skill />
      <Project />
      <Education />
      <Closing />
    </div>
  );
}
