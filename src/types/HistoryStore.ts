export type HistoryStore = {
  histories: string[];
  addHistory: (history: string) => void;
  removeHistory: (history: string) => void;
};