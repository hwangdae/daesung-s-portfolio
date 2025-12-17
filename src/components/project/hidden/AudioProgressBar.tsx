import { formatTime } from "@/utils/formatTime";
import React from "react";

interface PropsType {
  currentTime: number;
  duration: number;
  scrub: (time: number) => void;
}
const AudioProgressBar = ({ currentTime, duration, scrub }: PropsType) => {
  return (
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
      <p className="text-11-light !tracking-[0.01em]">{formatTime(duration)}</p>
    </div>
  );
};

export default AudioProgressBar;
