import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={4}>
      <SwiperSlide className="w-full h-[500px] bg-red">
        <div className="w-full h-[500px] border border-[#2F4858]">
          <img src={"/images/mySelectshopImage2.png"}></img>
          <div className="p-4">
            <h1 className="font-nanum text-[23px]">마이셀렉트샵</h1>
            <h2 className="text-[18px]">
              내 주변의 쇼핑몰을 탐색하고 리뷰를 남길 수 있는 플랫폼입니다.
            </h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red">
          <div className="w-full h-[500px] bg-slate-900">
            <h1>편식</h1>
            <h2>편의점 음식을 조합하고 공유하는 커뮤니티 사이트입니다.</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red">Slide 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red">Slide 4</div>
      </SwiperSlide>
    </Swiper>
  );
};
