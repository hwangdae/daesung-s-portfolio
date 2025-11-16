"use client";
import AboutMe from "@/components/aboutMe/AboutMe";
import Closing from "@/components/closing/Closing";
import Hero from "@/components/hero/Hero";
import Skill from "@/components/skill/Skill";
import Project from "@/components/project/Project";
import Education from "@/components/education/Education";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Hero onScrollClick={scrollToAbout} />
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <Skill />
      <Project />
      <Education />
      <Closing />
    </div>
  );
}
