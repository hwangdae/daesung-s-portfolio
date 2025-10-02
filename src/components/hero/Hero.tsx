import React from "react";

const ABOUTS = [
  "hwangdeveloper@naver.com",
  "+82 10 2406 8022",
  "devdaybook.tistory.com",
  "github.com/HwangDae",
];

const Hero = () => {
  return (
    <section className="bg-[url(/images/hero-image2.png)] w-full h-[100vh] relative left-0 top-0 overflow-hidden">
      <div className="max-w-[1300px] h-full mx-auto pt-[130px] pb-[80px] flex flex-col justify-between">
        <div>
          <h1 className="hero-64-regular text-white">
            HELLO,
            <br />
            I'M
            <br />
            DAESUNG
          </h1>
          <div className="mt-[20px]">
            <p className="text-22-thin text-[#E0E0E0] mb-[20px]">WEB</p>
            <p className="text-22-thin text-[#E0E0E0]">PRONTEND DEVELOPER</p>
          </div>
        </div>
        <ul>
          <div className="w-[14px] h-[1px] bg-[#E0E0E0] mb-2" />
          {ABOUTS.map((about) => {
            return (
              <li key={about}>
                <p className="text-17-thin text-[#E0E0E0] mb-1">{about}</p>
              </li>
            );
          })}
        </ul>
        {/* <div className="w-full h-[1px] bg-[#919191] absolute left-0 top-[850px] z-50 origin-left animate-scale-in-x"></div>
        <div className="w-full h-[1px] bg-[#919191] absolute left-0 top-[850px] z-50 origin-left animate-scale-in-x"></div>
        <div className="w-full h-[1px] bg-[#919191] absolute left-0 top-[850px] z-50 origin-left animate-scale-in-x"></div> */}

        <div className="h-full w-[1px] bg-[#919191] absolute left-[1600px] top-0 z-50 origin-top animate-scale-in-y"></div>
        <div className="h-full w-[1px] bg-[#919191] absolute left-[1625px] top-0 z-50 origin-top animate-scale-in-y"></div>
        <div className="h-full w-[1px] bg-[#919191] absolute left-[1650px] top-0 z-50 origin-top animate-scale-in-y"></div>

        {/* <div className="absolute left-[1450px] top-0 z-40 w-[500px] h-[500px]">
          <img src="/images/hero-circle.png" alt="메인 페이지 꾸미기용 원" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
