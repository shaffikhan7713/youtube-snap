import React, { useEffect, useState } from "react";
import { POPULAR_VIDEO_URL } from "../utils/constants";
import { VideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getPopularVideos();
  }, []);

  const getPopularVideos = async () => {
    const data = await fetch(POPULAR_VIDEO_URL);
    const jsonData = await data.json();
    setVideos(jsonData.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.length > 0 &&
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
