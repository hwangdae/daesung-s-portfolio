"use client";
import AboutMe from "@/components/aboutMe/AboutMe";
import Closing from "@/components/closing/Closing";
import Hero from "@/components/hero/Hero";
import Skill from "@/components/skill/Skill";
import Project from "@/components/project/Project";
import Education from "@/components/education/Education";
import Daisy from "@/components/shared/Daisy";
import { useEffect, useRef, useState } from "react";

type SectionId =
  | "hero"
  | "about"
  | "skill"
  | "project"
  | "education"
  | "closing";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);

  const [currentSection, setCurrentSection] = useState<SectionId>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200; // 상단 오차 보정(optional)

      const sections = [
        heroRef.current,
        aboutRef.current,
        skillRef.current,
        projectRef.current,
        educationRef.current,
        closingRef.current,
      ];
      let activeSection = "hero";

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        //스크롤 Y(0)부터 섹션 맨위 까지 값
        const top = rect.top + window.scrollY;
        //스크롤 Y(0)부터 섹션 맨 아래 까지 값
        const bottom = top + rect.height;

        // 스크롤이 섹션 범위 안에 있으면 active
        if (scrollY >= top && scrollY < bottom) {
          activeSection = section.id;
        }
      });

      setCurrentSection(activeSection as SectionId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 처음 실행

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative top-0 right-0">
      <div id="hero" ref={heroRef}>
        <Hero />
      </div>

      <div id="about" ref={aboutRef}>
        <AboutMe />
      </div>

      <div id="skill" ref={skillRef}>
        <Skill />
      </div>

      <div id="project" ref={projectRef}>
        <Project />
      </div>

      <div id="education" ref={educationRef}>
        <Education />
      </div>

      <div id="closing" ref={closingRef}>
        <Closing />
      </div>

      <Daisy
        refs={{ aboutRef, skillRef, projectRef, educationRef, closingRef }}
        currentSection={currentSection}
      />
    </div>
  );
}
