import { create } from "zustand";

export const useStore = create((set) => ({
  index: 0,
  plusIndex: () => set((state) => ({ index: state.index + 1 })),
  minusIndex: () => set((state) => ({ index: state.index - 1 })),
  isHero: true,
  setIsHero: () => set((state) => ({ isHero: !state.isHero })),
}));