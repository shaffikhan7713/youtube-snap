import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { LiveChat } from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [queryParams] = useSearchParams();
  const videoKey = queryParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="p-2 m-2 w-full">
      <div className="flex w-full">
        <iframe
          width="1150"
          height="400"
          src={"https://www.youtube.com/embed/" + videoKey}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <LiveChat />
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
