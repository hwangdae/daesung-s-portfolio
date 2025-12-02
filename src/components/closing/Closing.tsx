import Link from "next/link";
import React from "react";
import FadeInView from "../ui/FadeInView";
import Image from "next/image";

const Closing = () => {
  return (
    <section className="w-full h-[100vh] relative right-0 top-0">
      <Image
        quality={100}
        src="/images/hero-backgroundImage.webp"
        alt="클로즈 백그라운드 이미지"
        fill
      />
      <div className="relative z-40 max-w-[1300px] h-full mx-auto py-[14vh]">
        <div className="text-white h-full flex flex-col items-center justify-center text-center">
          <FadeInView className=" mb-16">
            <h1 className="close-42-regular mb-4">봐주셔서 감사합니다.</h1>
            <h2 className="text-18-extraLight !leading-[26px]">
              사용자 경험과 개발자 경험 모두를 고려한 개발을 위해 노력하고,
              <br />더 나은 UI/UX와 효율적인 코드 작성을 위해 꾸준히
              공부하겠습니다.
            </h2>
          </FadeInView>
          <FadeInView className="flex gap-[26px]">
            <div>
              <h2 className="text-18-extraLight pb-1">
                <Link href="https://github.com/hwangdae" target="_blank">
                  GITHUB
                </Link>
              </h2>
              <div className="w-[100%] h-[1px] bg-[#ccc]" />
            </div>
            <div>
              <h2 className="text-18-extraLight pb-1">
                <Link href="https://reactprac.tistory.com" target="_blank">
                  BLOG
                </Link>
              </h2>
              <div className="w-[100%] h-[1px] bg-[#ccc]" />
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
};

export default Closing;
