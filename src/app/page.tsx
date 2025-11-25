"use client";
import AboutMe from "@/components/aboutMe/AboutMe";
import Closing from "@/components/closing/Closing";
import Hero from "@/components/hero/Hero";
import Skill from "@/components/skill/Skill";
import Project from "@/components/project/Project";
import Education from "@/components/education/Education";
import { useEffect, useRef, useState } from "react";
import Flower from "@/assets/flower.svg";
import { motion } from "motion/react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [percentage, setPercentage] = useState(0);
  console.log(percentage)
  
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
      <Hero onScrollClick={scrollToAbout} />
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <Skill />
      <Project />
      <Education />
      <Closing />
      {/* <div className="fixed right-[170px] top-[85vh] z-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="flex justify-center items-start"
        >
          <Flower />
        </motion.div>
      </div> */}
    </div>
  );
}
