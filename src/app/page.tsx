"use client";
import AboutMe from "@/components/aboutMe/AboutMe";
import Closing from "@/components/closing/Closing";
import Hero from "@/components/hero/Hero";
import Skill from "@/components/skill/Skill";
import Project from "@/components/project/Project";
import Education from "@/components/education/Education";
import { useRef } from "react";
import Flower from "@/assets/flower.svg"

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative top-0 right-0">
      <Hero onScrollClick={scrollToAbout} />
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <Skill />
      <Project />
      <Education />
      <Closing />
      {/* <span className="w-[50px] h-[50px] absolute right-0 top-0 z-50">
      <Flower width="50px" height="50px"/>
      </span> */}
    </div>
  );
}
