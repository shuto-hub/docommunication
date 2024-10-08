import { HistoryStore } from "@/types/HistoryStore";
import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware';

export const useHistoryStore = create(
  persist<HistoryStore>(
    (set) => ({
      histories: [],
      // 重複削除を挟む
      addHistory: (history) => set((state) => ({ histories: Array.from(new Set([...state.histories, history])) })),
      removeHistory: (history) => set((state) => ({ histories: state.histories.filter((t) => t !== history) })),
    }),
    { name: 'history-storage', storage: createJSONStorage(() => localStorage) }
  )
);