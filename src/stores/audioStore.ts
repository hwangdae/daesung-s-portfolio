import { TRACKS } from "@/components/project/hidden/tracks";
import { create } from "zustand";

interface AudioState {
  audio: HTMLAudioElement | null;
  trackIndex: number;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;

  init: () => void;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  scrub: (time: number) => void;
  setVolume: (v: number) => void;
  next: () => void;
  prev: () => void;
}

export const useAudioStore = create<AudioState>((set, get) => ({
  audio: null,
  trackIndex: 0,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 0.5,

  init: () => {
    if (get().audio) return;

    const audio = new Audio(TRACKS[0].src);
    audio.volume = get().volume;

    audio.addEventListener("timeupdate", () =>
      set({ currentTime: audio.currentTime })
    );

    audio.addEventListener("loadedmetadata", () =>
      set({ duration: audio.duration })
    );

    audio.addEventListener("ended", () => get().next());

    set({ audio });
  },

  play: () => {
    const audio = get().audio;
    if (!audio) return;
    audio.play();
    set({ isPlaying: true });
  },

  pause: () => {
    const audio = get().audio;
    if (!audio) return;
    audio.pause();
    set({ isPlaying: false });
  },

  toggle: () => {
    get().isPlaying ? get().pause() : get().play();
  },

  scrub: (time) => {
    const audio = get().audio;
    if (!audio) return;
    audio.currentTime = time;
    set({ currentTime: time });
  },

  setVolume: (v) => {
    const audio = get().audio;
    if (!audio) return;
    audio.volume = v;
    set({ volume: v });
  },

  next: () => {
    const nextIndex = (get().trackIndex + 1) % TRACKS.length;
    const audio = get().audio;
    if (!audio) return;

    audio.src = TRACKS[nextIndex].src;
    audio.play();

    set({ trackIndex: nextIndex, isPlaying: true });
  },

  prev: () => {
    const prevIndex =
      get().trackIndex - 1 < 0 ? TRACKS.length - 1 : get().trackIndex - 1;

    const audio = get().audio;
    if (!audio) return;

    audio.src = TRACKS[prevIndex].src;
    audio.play();

    set({ trackIndex: prevIndex, isPlaying: true });
  },
}));
