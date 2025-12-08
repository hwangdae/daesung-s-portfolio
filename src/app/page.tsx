"use client";

import AboutMe from "@/components/aboutMe/AboutMe";
import Closing from "@/components/closing/Closing";
import Hero from "@/components/hero/Hero";
import Skill from "@/components/skill/Skill";
import Project from "@/components/project/Project";
import Education from "@/components/education/Education";
import Daisy from "@/components/shared/Daisy";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);

  const [currentSection, setCurrentSection] = useState<
    "hero" | "about" | "skill" | "project" | "education" | "closing"
  >("hero");
  console.log(currentSection);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id as
            | "hero"
            | "about"
            | "skill"
            | "project"
            | "education"
            | "closing";

          setCurrentSection(id);
        });
      },
      { threshold: 0.3 } // 30% 이상 보이면 현재 섹션으로 판단
    );

    const sections = document.querySelectorAll(".observe-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative top-0 right-0">
      <div id="hero" ref={heroRef} className="observe-section">
        <Hero />
      </div>

      <div id="about" ref={aboutRef} className="observe-section">
        <AboutMe />
      </div>

      <div id="skill" ref={skillRef} className="observe-section">
        <Skill />
      </div>

      <div id="project" ref={projectRef} className="observe-section">
        <Project />
      </div>

      <div id="education" ref={educationRef} className="observe-section">
        <Education />
      </div>

      <div id="closing" ref={closingRef} className="observe-section">
        <Closing />
      </div>

      <Daisy
        refs={{ aboutRef, skillRef, projectRef, educationRef, closingRef }}
        currentSection={currentSection}
      />
    </div>
  );
}
