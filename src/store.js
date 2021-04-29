import create from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      notes: "",
      setNotes: (notes) => set({ notes }),
    }),
    {
      name: "simplenotes-storage",
    }
  )
);
