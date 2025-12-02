import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { FaDesktop } from "react-icons/fa6";

interface PropsType {
  id: string;
  preview?: {
    id: number;
    src: StaticImageData;
    title: string;
  }[];
}

const PreviewSection = ({ id, preview }: PropsType) => {
  return (
    <div>
      {preview !== undefined && (
        <div className="flex items-center gap-2 py-[20px]">
          <FaDesktop
            size={"21px"}
            //  color="#FFD76A"
          />
          <h1 className="title-24-bold">프로젝트 미리보기</h1>
        </div>
      )}
      <Swiper
        spaceBetween={10}
        slidesPerView={id === "noWait" ? 4 : 1.5}
        loop={true} // 무한 루프
        autoplay={{ delay: 1, disableOnInteraction: false }}
        modules={[Autoplay, Pagination, Navigation]}
        speed={3000} // 이동 속도
      >
        {preview?.map((preview) => {
          return (
            <SwiperSlide key={preview.id}>
              <h1 className={`w-full h-full`}>
                <Image
                  // width={207}
                  // height={470}
                  src={preview.src || ""}
                  className="object-contain"
                  alt="프리뷰 이미지"
                />
              </h1>
              <p className="text-16-regular text-center mt-2">
                {preview.title}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PreviewSection;
