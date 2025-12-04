"use client";
import AboutMe from "@/components/aboutMe/AboutMe";
import Closing from "@/components/closing/Closing";
import Hero from "@/components/hero/Hero";
import Skill from "@/components/skill/Skill";
import Project from "@/components/project/Project";
import Education from "@/components/education/Education";
import { useEffect, useRef, useState } from "react";
import Daisy from "@/components/shared/Daisy";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);

  // const scrollToAbout = () => {
  //   aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  const [percentage, setPercentage] = useState(0);
  console.log(percentage);
  const getScrollPercentage = () => {
    const scroll = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const viewport = scrollHeight - clientHeight;
    const percentage = (scroll / viewport) * 100;

    return setPercentage(Math.floor(percentage));
  };

  useEffect(() => {
    window.addEventListener("scroll", getScrollPercentage);

    return () => window.removeEventListener("scroll", getScrollPercentage);
  }, []);

  return (
    <div className="relative top-0 right-0">
      <Hero />
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <Skill />
      <Project />
      <Education />
      <Closing />
      <Daisy aboutRef={aboutRef} percentage={percentage} />
    </div>
  );
}
