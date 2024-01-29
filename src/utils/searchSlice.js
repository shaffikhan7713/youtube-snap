import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    autoSuggestCacheData: {},
    searchVideos: [],
    globalSearchText: "",
  },
  reducers: {
    cacheResults: (state, action) => {
      state.autoSuggestCacheData = Object.assign(
        state.autoSuggestCacheData,
        action.payload
      );
    },
    addSearchVideos: (state, action) => {
      state.searchVideos = action.payload;
    },
    addGlobalSearchText: (state, action) => {
      state.globalSearchText = action.payload;
    },
  },
});

export const { cacheResults, addSearchVideos, addGlobalSearchText } =
  searchSlice.actions;
export default searchSlice.reducer;
