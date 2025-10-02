import React from "react";

// const EDUCATIONS = [
//   {title:}
// ]

const Education = () => {
  return (
    <section className="w-full h-[100vh] bg-[url(/images/background2.png)]">
      <div className="max-w-[1300px] h-full mx-auto  flex justify-between items-start">
        <div className="w-[30%] flex items-center gap-4 py-[12vh]">
          <div className="w-[8px] h-[46px] bg-white" />
          <h1 className="title-40-black">학습했던 과정들</h1>
        </div>
        <div className="flex flex-col justify-center w-[70%] h-full">
          {/* <div className="flex flex-grow h-[10%] justify-center">
            <div className="w-[2px] bg-white"></div>
          </div> */}
          {/* 스파르타 코딩클럽 */}
          <div className="flex gap-[24px]">
            <div className="relative top-[110px] bg-[#272727] px-[20px] py-[26px] max-w-[430px]">
              <div className="mb-[36px]">
                <h1 className="title-22-bold mb-2">스파르타코딩클럽 React 과정</h1>
                <p className="text-14-light text-[#ccc]">2023.05.15 - 2023.09.19</p>
              </div>
              <ul className="ml-5 list-disc break-keep">
                <li className="text-16-light mb-2 text-[#ccc]">
                  JavaScript, React, Git 등 실무 필수 기술 집중 학습
                </li>
                <li className="text-16-light mb-2 text-[#ccc]">
                  20주 동안의 프로그래밍 학습과 개인 프로젝트, 팀 프로젝트 진행
                </li>
                <li className="text-16-light mb-2 text-[#ccc]">
                  원격 환경에서 실시간 커뮤니케이션 툴(Slack, Notion 등) 활용
                </li>
                <li className="text-16-light text-[#ccc]">
                  디자이너와의 협업을 통해 UI/UX 시안을 구현
                </li>
              </ul>
            </div>
            <div className="relative left-0 top-0">
              <div className="w-[2px] h-[100%] bg-[#888888]"></div>
              {/* <div className="w-[10px] h-[2px] bg-[#888888] absolute -left-[1px] top-[2px] rotate-45"></div> */}
              {/* <div className="w-[10px] h-[2px] bg-[#888888] absolute -left-[7px] top-[3px] -rotate-45"></div> */}

              <div className="w-[11px] h-[2px] bg-[#888888] rounded-full absolute left-1/2 top-[260px] -translate-x-1/2"></div>
            </div>
          </div>
          {/* UIUX */}
          <div className="flex justify-end gap-[24px]">
            <div className="relative left-0 top-0">
              <div className="w-[2px] h-[100%] bg-[#888888]"></div>
              <div className="w-[11px] h-[2px] bg-[#888888] rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className=" bg-[#272727] px-[20px] py-[26px] max-w-[430px]">
              <div className="mb-[36px]">
                <h1 className="title-22-bold mb-2">
                  UI/UX 반응형 웹디자인&웹퍼블리셔
                </h1>
                <p className="text-14-light text-[#ccc]">2021.12.06 - 2022.04.26</p>
              </div>
              <ul className="ml-5 list-disc break-keep">
                <li className="text-16-light mb-2 text-[#ccc]">
                  HTML, CSS 활용해 웹 표준, 접근성을 고려한 웹 페이지 퍼블리싱
                </li>
                <li className="text-16-light mb-2 text-[#ccc]">
                  Media Query를 활용한 반응형 웹 구현
                </li>
                <li className="text-16-light mb-2 text-[#ccc]">
                  JavaScript 및 CSS를 활용한 인터랙티브 애니메이션 구현
                </li>
                <li className="text-16-light text-[#ccc]">
                  Photoshop, Illustrator을 활용해 간단한 디자인 편집 및 웹용
                  이미지, 아이콘 제작
                </li>
              </ul>
            </div>
          </div>
          {/* 학교 */}
          <div className="flex gap-[24px]">
            <div className="relative top-[-70px] bg-[#272727] px-[20px] py-[26px] max-w-[430px]">
              <div className="mb-[36px]">
                <h1 className="title-22-bold mb-2">경복대학교</h1>
                <p className="text-14-light text-[#ccc]">2016.02.03 - 2020.02.02</p>
              </div>
              <ul className="ml-5 list-disc break-keep">
                <li className="text-16-light mb-2 text-[#ccc]">컴퓨터정보과 전공</li>
                <li className="text-16-light mb-2 text-[#ccc]">
                  빗물감지센서를 활용한 원격창문제어 앱 구현
                </li>
                <li className="text-16-light text-[#ccc]">
                  Photoshop을 활용해 간단한 디자인 편집 및 웹용 이미지 제작
                </li>
              </ul>
            </div>
            <div className="relative left-0 top-0">
              <div className="w-[2px] h-[100%] bg-[#888888]"></div>
              <div className="w-[11px] h-[2px] bg-[#888888] absolute left-1/2 top-[80px] -translate-x-1/2"></div>
            </div>
          </div>
          {/* <div className="flex flex-grow h-[10%] justify-center">
            <div className="w-[2px] bg-[#999]"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Education;
