import { useEffect, useRef, useState } from "react";
import { TRACKS } from "./tracks";

export const useAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const { title, artist, src, cover } = TRACKS[trackIndex];

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(src);
    audio.volume = volume;
    audioRef.current = audio;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };
    const handleVolume = () => {
      setVolume(audio.volume);
    };
    const handleEnded = () => {
      toNextTrack();
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("volumechange", handleVolume);
    if (isPlaying) {
      audio.play();
    }

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [src]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const onScrub = (value: number) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const onVolume = (value: number) => {
    if (!audioRef.current) return;

    audioRef.current.volume = value;
    setVolume(value);
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  const toPrevTrack = () => {
    setCurrentTime(0);
    setDuration(0);

    setTrackIndex((prev) => (prev - 1 < 0 ? TRACKS.length - 1 : prev - 1));
  };

  const toNextTrack = () => {
    setCurrentTime(0);
    setDuration(0);

    setTrackIndex((prev) => (prev < TRACKS.length - 1 ? prev + 1 : 0));
  };

  return {
    audioRef,
    track: { title, artist, cover },
    isPlaying,
    currentTime,
    duration,
    volume,
    setIsPlaying,
    onScrub,
    onScrubEnd,
    onVolume,
    toPrevTrack,
    toNextTrack,
  };
};
