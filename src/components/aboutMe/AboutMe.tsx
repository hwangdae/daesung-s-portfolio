import React from "react";

const SUBTITLES = ["사용자 경험", "신뢰감", "편의"];

const AboutMe = () => {
  return (
    <section className="w-full h-[100vh] bg-[url(/images/background1.png)]">
      <div className="max-w-[1300px] h-full mx-auto py-[12vh] flex justify-between">
        <div className="w-[40%]">
          <h1 className="title-40-black mb-[40px]">
            당연함을 당연하게
            <br />
            프론트엔드 개발자
          </h1>
          <div>
            <div className="w-[10px] h-[1px] bg-[#ccc] mb-[12px]"></div>
            <ul>
              {SUBTITLES.map((subTitle) => {
                return (
                  <li key={subTitle}>
                    <p className="title-22-regular mb-[10px] text-[#ccc]">{subTitle}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="w-[60%] flex justify-end items-end">
          <p className="text-20-extraLight !leading-[36px] break-keep">
            저는 당연함이 사소한 디테일에서 시작된다고 생각합니다. 특별함 보다
            사용자가 당연하게 느낄 수 있는 경험을 위해 끊임없이
            고민합니다. 사용자와 가장 가까이 맞닿아 있는 개발자로서, 화려한
            기능보다는 불편함 없이 자연스럽게 사용할 수 있는 화면을 설계하는
            것을 목표로 합니다. 사람마다 서비스를 바라보는 관점은 다를 수
            있지만, UX의 불편함은 누구에게나 비슷하게 다가온다고 생각합니다.
            그래서 저는 당연히 보여야 할 화면과 흐름을 고민하며, 직관적인
            인터페이스를 지향하려고 노력하고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
