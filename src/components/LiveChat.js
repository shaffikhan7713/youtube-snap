import React from "react";
import ChatMessage from "./ChatMessage";

export const LiveChat = () => {
  return (
    <div className="ml-2 p-2 border border-black w-1/4 bg-slate-100 rounded-md">
      <ChatMessage name="Shaffi Khan" message="This is chat message!!" />
    </div>
  );
};
