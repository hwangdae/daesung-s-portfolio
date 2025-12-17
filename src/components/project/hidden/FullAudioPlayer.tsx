"use client";
import Image from "next/image";
import React, { useState } from "react";
import AudioControls from "./AudioControls";
import { motion } from "motion/react";
import { TRACKS } from "./tracks";
import { useAudioStore } from "@/stores/audioStore";
import AudioProgressBar from "./AudioProgressBar";

const FullAudioPlayer = () => {
  const [expanded, setExpanded] = useState(false);

  const {
    trackIndex,
    isPlaying,
    currentTime,
    duration,
    volume,
    toggle,
    scrub,
    setVolume,
    next,
    prev,
  } = useAudioStore();

  const track = TRACKS[trackIndex];

  return (
    <div className="fixed z-50">
      <motion.div
        className="fixed left-[15px] bottom-[25px] z-50 bg-[#22222b] rounded-md p-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h1 className="relative w-[230px] h-[230px]">
          <Image
            fill
            src={track.cover}
            alt="앨범 이미지"
            className="object-cover"
          />
        </h1>
        <div className="my-4">
          <h2 className="title-18-regular mb-1">{track.title}</h2>
          <p className="text-13-light">{track.artist}</p>
        </div>

        {/* 가사 */}
        <div
          className={`w-[220px] max-h-[240px] text-center mt-6 mb-3 overflow-y-scroll overscroll-contain [&::-webkit-scrollbar]:hidden`}
        >
          <div className="relative">
            <p
              className={`
              text-16-light text-[#e7e7e7] !leading-6 break-keep
              // ${expanded ? "" : "line-clamp-2"}
            `}
            >
              저는 프로젝트를 할 때 보통 음악을 들으면서 작업해요.
              <br />
              장르는 크게 가리지 않지만, 프로젝트를 진행 했을 때에는 잔잔한
              음악을 많이 들었던거 같아요. 음악을 들으면 집중이 더 잘 되는지는
              모르겠지만, 좋은 음악이 함께하면 작업 시간이 조금은 더 즐거워지는
              것 같아요. 여기에 넣은 곡들은 모두 저작권이 없는 음악들이고,
              평소에 자주 듣던 분위기의 곡들로 골라봤습니다. 생각보다 좋은 곡
              찾기가 쉽지 않더라고요. 가볍게 들어주세요 🌼
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full text-14-light bg-gradient-to-t from-[#22222b] to-transparent underline text-[rgb(107,132,243)]"
            >
              {expanded ? "가사 접기" : "가사 보기"}
            </button>
          </div>
        </div>
        {/* 프로그래스 바 */}
        <AudioProgressBar
          currentTime={currentTime}
          duration={duration}
          scrub={scrub}
        />
        {/* 오디오 컨트롤 */}
        <AudioControls
          isPlaying={isPlaying}
          onPlayPauseClick={toggle}
          onPrevClick={prev}
          onNextClick={next}
          volume={volume}
          onVolume={setVolume}
        />
      </motion.div>
    </div>
  );
};

export default React.memo(FullAudioPlayer);
