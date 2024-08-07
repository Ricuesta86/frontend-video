// src/components/VideoList.js
import React from 'react';

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className="video-list">
      <h2 className="text-xl font-bold">Playlist</h2>
      <ul>
        {videos.map((video, index) => (
          <li
            key={index}
            className="cursor-pointer hover:bg-gray-200 p-2"
            onClick={() => onVideoSelect(video, index)}
          >
            {video.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;


