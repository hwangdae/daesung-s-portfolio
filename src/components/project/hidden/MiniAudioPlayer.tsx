import { motion } from "motion/react";
import Image from "next/image";
import AudioControls from "./AudioControls";
import { formatTime } from "@/utils/formatTime";
import { useAudioUIStore } from "@/stores/daisyStore";
import { TRACKS } from "./tracks";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useAudioStore } from "@/stores/audioStore";

const MiniAudioPlayer = () => {
  const { view, switchToMini, halfHide } = useAudioUIStore();
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
    <motion.div
      className="fixed left-[25px] bottom-[25px] z-50"
      initial={{ x: -100 }}
      animate={{ x: view === "halfHidden" ? -290 : 0 }}
      exit={{ x: -100 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex gap-1">
        <div className="min-w-[270px] bg-[#22222b] p-4 rounded-md">
          {/* 곡 정보 */}
          <div className="flex items-center gap-2 mb-2">
            <h1 className="relative w-[50px] h-[50px]">
              <Image
                fill
                src={track.cover}
                alt="앨범 이미지"
                className="object-cover"
              />
            </h1>
            <div>
              <h2 className="title-18-regular mb-1">{track.title}</h2>
              <p className="text-13-light">{track.artist}</p>
            </div>
          </div>
          {/* 플레이 바 */}
          <div className="flex items-center gap-1.5">
            <p className="text-11-light !tracking-[0.01em]">
              {formatTime(currentTime)}
            </p>
            <input
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              onChange={(e) => scrub(Number(e.target.value))}
              disabled={duration === 0}
              className="w-full appearance-none h-1.5 rounded-full slider"
              style={{
                background: `linear-gradient(to right, #ffffff ${
                  duration ? (currentTime / duration) * 100 : 0
                }%, #4a4a4a 0)`,
              }}
            />
            <p className="text-11-light !tracking-[0.01em]">
              {formatTime(duration)}
            </p>
          </div>
          {/* 오디오 컨트롤 */}
          <AudioControls
            isPlaying={isPlaying}
            onPlayPauseClick={toggle}
            onPrevClick={prev}
            onNextClick={next}
            volume={volume}
            onVolume={setVolume}
          />
        </div>
        <button
          onClick={() => {
            if (view === "mini") {
              halfHide();
            } else switchToMini();
          }}
          className="flex items-center justify-center bg-[#22222b] rounded-md"
        >
          <MdKeyboardArrowLeft
            size={18}
            color="#414141"
            className={`transition-transform ${
              view === "halfHidden" ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </motion.div>
  );
};

export default MiniAudioPlayer;
