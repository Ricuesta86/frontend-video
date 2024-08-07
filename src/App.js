import React, { useState, useEffect } from "react";
// import VideoPlayer from "./components/VideoPlayer";
// import VideoList from "./components/VideoList";
import "./index.css";

function App() {
  const [videos, setVideos] = useState([]);
  // const [selectedVideo, setSelectedVideo] = useState(null);
  // const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/videos")
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  // const handleVideoSelect = (video, index) => {
  //   setSelectedVideo(video);
  //   setCurrentVideoIndex(index);
  // };

  // const handleVideoEnd = () => {
  //   const nextIndex = (currentVideoIndex + 1) % videos.length;
  //   setSelectedVideo(videos[nextIndex]);
  //   setCurrentVideoIndex(nextIndex);
  // };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Videos para mi Niño</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video} className="bg-white p-4 rounded shadow">
            <video controls className="w-full">
              <source
                src={`http://localhost:5000/videos/${video}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <p className="mt-2 text-center">{video}</p>
          </div>
        ))}
      </div>
    </div>
  );
  // return (
  //     <div className="container mx-auto p-4">
  //       <h1 className="text-3xl font-bold mb-4">Video Playlist</h1>
  //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  //         <div className="md:col-span-1">
  //           <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
  //         </div>
  //         <div className="md:col-span-2">
  //           <VideoPlayer video={selectedVideo} onVideoEnd={handleVideoEnd} />
  //         </div>
  //       </div>
  //     </div>
  //   );
}

export default App;
