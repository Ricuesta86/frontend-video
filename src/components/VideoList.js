// src/components/VideoList.js
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelect }) => {
  return (
    // <div className="w-full">
    //   <h2 className="text-xl font-semibold mb-4">Video List</h2>
    //   {videos.map((video,index) => (
    //     <VideoItem key={index} video={video} onSelect={onSelect} />
    //   ))}
    // </div>
    <div class="pl-4">
      <div class="bg-white rounded-lg shadow p-4">
        <h3 class="text-lg font-bold mb-2 text-gray-700">Playlist</h3>
        <div class="overflow-y-scroll h-96">
          <ul id="video-list" class="space-y-4">
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
