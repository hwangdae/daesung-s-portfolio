import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Footer from "../footer/Footer";

const Closing = () => {
  const scrollRef = useRef(null);
  const [inView, setInView] = useState(false);
  let a = "aasddd";
  console.log(a.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        threshold: 0.8,
      }
    );
    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }
    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={scrollRef}
      className="bg-[url(/images/hero-image2.png)] w-full h-[100vh] relative right-0 top-0"
    >
      <div
        style={{ animationDelay: "2s" }}
        className="max-w-[1300px] h-full mx-auto py-[14vh]"
      >
        <div
          className={`${
            inView
              ? "animate-fade-slide-bottom opacity-1"
              : "animate-fade-slide-top-out opacity-0"
          } text-white h-full flex flex-col items-stretch justify-between`}
        >
          <div>
            <h1 className="title-40-bold mb-4">봐주셔서 감사합니다</h1>
            <h2 className="text-18-extraLight !leading-[26px] mb-12">
              사용자 경험과 개발자 경험 모두를 고려한 개발을 위해 노력하고,
              <br />더 나은 UI/UX와 효율적인 코드 작성을 위해 꾸준히
              공부하겠습니다.
            </h2>
          </div>
          <div
            className={`${
              inView
                ? "animate-fade-slide-bottom opacity-1"
                : "animate-fade-slide-top-out opacity-0"
            }`}
          >
            <div className="w-[10px] h-[1px] bg-[#ccc] mb-[12px]"></div>
            <h2 className="text-18-extraLight mb-2">
              <Link href="https://github.com/hwangdae" target="_blank">
                GITHUB
              </Link>
            </h2>
            <h2 className="text-18-extraLight mb-2">
              <Link href="https://reactprac.tistory.com" target="_blank">
                BLOG
              </Link>
            </h2>
          </div>
        </div>
        {/* <Footer /> */}
      </div>

      {/* <div
        className={`${
          inView ? "animate-scale-in-x" : "animate-scale-out-x"
        } w-full border border-primaryWhite absolute left-0 top-[50px] z-50 origin-left opacity-0`}
      />
      <div
        className={`${
          inView ? "animate-scale-in-x" : "animate-scale-out-x"
        } w-full border border-primaryWhite absolute left-0 bottom-[50px] z-50 origin-left opacity-0`}
      />
      <div
        className={`${
          inView ? "animate-scale-in-y" : "animate-scale-out-y"
        } h-full border border-primaryWhite absolute left-[50px] top-0 z-50 origin-top opacity-0`}
      />
      <div
        className={`${
          inView ? "animate-scale-in-y" : "animate-scale-out-y"
        } h-full border border-primaryWhite absolute right-[50px] top-0 z-50 origin-top opacity-0`}
      /> */}
      <div className="h-full w-[1px] bg-[#444] absolute right-[150px] top-0 z-50 origin-top animate-scale-in-y"></div>
      <div className="h-full w-[1px] bg-[#444] absolute right-[175px] top-0 z-50 origin-top animate-scale-in-y"></div>
      <div className="h-full w-[1px] bg-[#444] absolute right-[200px] top-0 z-50 origin-top animate-scale-in-y"></div>
    </section>
  );
};

export default Closing;
