// src/components/VideoList.js
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelect }) => {
  return (

    <div className="pl-4">
      <div className="bg-white rounded-lg shadow p-4">
        <div className="overflow-y-scroll h-96">
          <ul id="video-list" className="space-y-4">
            {videos.map((video, index) => (
              <VideoItem key={index} video={video} onSelect={onSelect} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoList;
