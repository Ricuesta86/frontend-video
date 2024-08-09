
import { useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer";

export const VideoPlay = () => {
  let { video } = useParams();
  const [currentVideo, setCurrentVideo] = useState(video);
  return (
    <div className="flex h-screen p-4">
      <div className="w-2/3 p-4">
        <VideoPlayer video={currentVideo} />
      </div>
      <div className="w-1/3 p-4 border-l">
        {/* <VideoList videos={videos} onSelect={setCurrentVideo} /> */}
      </div>
    </div>
  );
};