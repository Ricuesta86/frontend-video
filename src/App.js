
import { Routes, Route } from "react-router-dom";
import "./index.css";
import { Inicio } from "./Inicio";
import { VideoPlay } from "./VideoPlay";

function App() {


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
    <div className="app">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/video-play/:video" element={<VideoPlay />} />
      </Routes>
    </div>
  );

}

export default App;
