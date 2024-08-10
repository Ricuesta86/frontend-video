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

  const HandleOnEnded = async () => {
    const position = await videos.indexOf(currentVideo);
    // position === videos.length - 1 ? navigate(`/video-play/${videos[0]}`): navigate(`/video-play/${videos[position+1]}`)
    console.log(position)
    if (position === videos.length - 1)  setCurrentVideo(videos[0])
    else setCurrentVideo(videos[position+1])
  console.log(position+1)
  };
  return (
    <section className="videos" id="videos">
      <div className="flex h-screen p-4">
        <div className="p-4">
          <VideoPlayer video={currentVideo} onEnded={() => HandleOnEnded()} />
        </div>
        <div className="w-1/3 p-4 border-l">
          <VideoList videos={videos} onSelect={setCurrentVideo} />
        </div>
      </div>
    </section>
  );
};
