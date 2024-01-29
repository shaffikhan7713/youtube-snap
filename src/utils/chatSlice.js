import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_MSG_OFFSET } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      //   state.messages.push(action.payload);
      state.messages.splice(LIVE_CHAT_MSG_OFFSET, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
