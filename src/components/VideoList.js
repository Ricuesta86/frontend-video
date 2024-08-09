// src/components/VideoList.js
import VideoItem from './VideoItem';

const VideoList = ({ videos, onSelect }) => {
  
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">Video List</h2>
      {videos.map((video,index) => (
        <VideoItem key={index} video={video} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default VideoList;


