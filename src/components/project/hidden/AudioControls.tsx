import React from "react";
import { FaCirclePause } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import { BiSkipPrevious } from "react-icons/bi";
import { BiSkipNext } from "react-icons/bi";
interface PropsType {
  isPlaying: boolean;
  onPlayPauseClick: React.Dispatch<React.SetStateAction<boolean>>;
  onPrevClick: () => void;
  onNextClick: () => void;
  volume: number;
  onVolume: (value: number) => void;
}

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
  volume,
  onVolume,
}: PropsType) => {
  return (
    <div className="flex justify-center gap-1 mt-3 relative">
      <button onClick={onPrevClick} aria-label="prev">
        <BiSkipPrevious size={34} />
      </button>
      {isPlaying ? (
        <button onClick={() => onPlayPauseClick(false)} aria-label="Pause">
          <FaCirclePause size={34} />
        </button>
      ) : (
        <button onClick={() => onPlayPauseClick(true)} aria-label="Play">
          <FaCirclePlay size={34} />
        </button>
      )}
      <button onClick={onNextClick} aria-label="next">
        <BiSkipNext size={34} />
      </button>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => onVolume(Number(e.target.value))}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[50px] slider h-1"
        style={{
          background: `linear-gradient(to right, #ffffff ${
            volume ? volume * 100 : 0
          }%, #4a4a4a 0)`,
        }}
      />
    </div>
  );
};

export default AudioControls;
