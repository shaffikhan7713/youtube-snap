import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMsg, generateRandomName } from "../utils/utilities";

export const LiveChat = () => {
  const dispatch = useDispatch();
  const [chatMsg, setChatMsg] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMsg(5),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="flex flex-col w-1/4">
      <div className="ml-2 p-2 border border-black w-full h-[400px] bg-slate-100 rounded-md overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chatMsg, ind) => (
          <ChatMessage
            key={ind}
            name={chatMsg.name}
            message={chatMsg.message}
          />
        ))}
      </div>
      <form className="flex">
        <input
          type="text"
          className="w-full border border-black p-2 m-2 rounded-lg"
          value={chatMsg}
          onChange={(e) => setChatMsg(e.target.value)}
        />
        <button
          className="p-2 m-2 bg-cyan-300 rounded-lg w-24"
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Shaffi Khan",
                message: chatMsg,
              })
            );
            setChatMsg("");
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};
