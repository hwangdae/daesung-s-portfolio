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
interface EducationStore {
  education: boolean;
  setToggleEducation: () => void;
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

export const useEducationStore = create<EducationStore>((set) => ({
  education: false,
  setToggleEducation: () => set((state) => ({ education: !state.education })),
}));
export default useAboutStore;
