import React from "react";

export const VideoCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 shadow-lg w-72">
      <img className="rounded-lg" alt="youtube" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        {/* <li>{statistics.viewCount} Views</li> */}
      </ul>
    </div>
  );
};
