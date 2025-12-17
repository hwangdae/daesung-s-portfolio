import { create } from "zustand";

interface AboutStore {
  about: boolean;
  setToggleAbout: () => void;
}
interface SkillStore {
  skill: boolean;
  setToggleSkill: () => void;
  setSkillFalse: () => void;
}
interface ProjectStore {
  project: boolean;
  setToggleProject: () => void;
  setProjectFalse: () => void;
}

type AudioView = "hidden" | "halfHidden" | "full" | "mini";
interface AudioUIStore {
  view: AudioView;
  openFull: () => void;
  switchToMini: () => void;
  hide: () => void;
  halfHide: () => void;
}
interface EducationStore {
  education: boolean;
  setToggleEducation: () => void;
}

interface ClosingStore {
  closing: boolean;
  setToggleClosing: () => void;
  setClosingFalse: () => void;
}

export const useAboutStore = create<AboutStore>((set) => ({
  about: false,
  setToggleAbout: () => set((state) => ({ about: !state.about })),
}));

export const useSkillStore = create<SkillStore>((set) => ({
  skill: false,
  setToggleSkill: () => set((state) => ({ skill: !state.skill })),
  setSkillFalse: () => set({ skill: false }),
}));

export const useProjectStore = create<ProjectStore>((set) => ({
  project: false,
  setToggleProject: () => set((state) => ({ project: !state.project })),
  setProjectFalse: () => set({ project: false }),
}));

export const useAudioUIStore = create<AudioUIStore>((set) => ({
  view: "hidden",
  openFull: () => set({ view: "full" }),
  switchToMini: () => set({ view: "mini" }),
  hide: () => set({ view: "hidden" }),
  halfHide: () => set({ view: "halfHidden" }),
}));

export const useEducationStore = create<EducationStore>((set) => ({
  education: false,
  setToggleEducation: () => set((state) => ({ education: !state.education })),
}));

export const useClosingStore = create<ClosingStore>((set) => ({
  closing: false,
  setToggleClosing: () => set((state) => ({ closing: !state.closing })),
  setClosingFalse: () => set({ closing: false }),
}));
