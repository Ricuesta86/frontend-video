// src/components/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ video, onVideoEnd }) => {
  return (
    <div className="video-player">
      {video ? (
        <div>
          <h2 className="text-xl font-bold">{video.title}</h2>
          <video controls className="w-full mt-4" onEnded={onVideoEnd}>
            <source src={video.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div>Select a video to play</div>
      )}
    </div>
  );
};

export default VideoPlayer;

