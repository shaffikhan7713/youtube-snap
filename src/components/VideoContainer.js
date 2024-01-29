import React, { useEffect } from "react";
import { POPULAR_VIDEO_URL } from "../utils/constants";
import { VideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSearchVideos } from "../utils/searchSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.search.searchVideos);

  useEffect(() => {
    if (videos.length === 0) getPopularVideos();
  }, []);

  const getPopularVideos = async () => {
    const data = await fetch(POPULAR_VIDEO_URL);
    const jsonData = await data.json();
    dispatch(addSearchVideos(jsonData.items));
  };

  const getVideoBlock = (video) => {
    const videoId =
      typeof video.id === "object" && video.id !== null
        ? video.id.videoId
        : video.id;
    return (
      <Link key={videoId} to={"/watch?v=" + videoId}>
        <VideoCard info={video} />
      </Link>
    );
  };

  return (
    <div className="flex flex-wrap">
      {videos.length > 0 && videos.map((video) => getVideoBlock(video))}
    </div>
  );
};

export default VideoContainer;
