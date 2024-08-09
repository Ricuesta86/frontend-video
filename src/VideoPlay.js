
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer";
import VideoList from "./components/VideoList";

export const VideoPlay = () => {
  let { video } = useParams();
  const [currentVideo, setCurrentVideo] = useState(video);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/videos")
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return (
    <div className="flex h-screen p-4">
      <div className="w-2/3 p-4">
        <VideoPlayer video={currentVideo} />
      </div>
      <div className="w-1/3 p-4 border-l">
        <VideoList videos={videos} onSelect={setCurrentVideo} />
      </div>
    </div>
  );
};