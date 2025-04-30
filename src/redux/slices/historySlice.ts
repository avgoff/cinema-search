import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HistoryItem } from "../../types/history";
import { RootState } from "../store";

type HistoryState = {
  items: HistoryItem[];
};

const initialState: HistoryState = {
  items: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<string>) => {
      state.items.unshift({
        query: action.payload,
        timestamp: Date.now(),
      });
      if (state.items.length > 10) {
        state.items.pop();
      }
    },
    clearHistory: (state) => {
      state.items = [];
    },
  },
});

export const { addToHistory, clearHistory } = historySlice.actions;
export const selectHistory = (state: RootState) => state.history.items;
export const historyReducer = historySlice.reducer;
