import { create } from "zustand";

interface ThemeStore {
  mode: "dark" | "light";
  toggle: (state: any) => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  mode: "light",
  toggle: (state) => {
    const newMode = state.mode === "light" ? "dark" : "light";
    set(() => ({ mode: newMode }));
  },
}));

export default useThemeStore;

// import { create } from 'zustand'

// type Store = {
//   count: number
//   inc: () => void
// }

// const useStore = create<Store>((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ })),
// }))
