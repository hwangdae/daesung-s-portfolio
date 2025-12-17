"use client";
import { useAudioUIStore } from "@/stores/daisyStore";
import { useEffect } from "react";
import FullAudioPlayer from "./FullAudioPlayer";
import MiniAudioPlayer from "./MiniAudioPlayer";
import { useAudioStore } from "@/stores/audioStore";

const AudioPlayer = () => {
  const { view } = useAudioUIStore();
  const { init } = useAudioStore();

  useEffect(() => {
    init();
  }, [init]);

  if (view === "hidden") return null;

  return (
    <>
      {view === "full" && <FullAudioPlayer />}
      {(view === "mini" || view === "halfHidden") && <MiniAudioPlayer />}
    </>
  );
};

export default AudioPlayer;
