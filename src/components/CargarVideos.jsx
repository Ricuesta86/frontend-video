import React, { useState, useEffect } from "react";
// import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { VideoCard } from "./VideoCard";

export const CargarVideos = () => {
  const [videos, setVideos] = useState([]);
  // const [selectedVideo, setSelectedVideo] = useState(null);
  // const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/videos")
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);


  return (
    <>
      <section className="videos" id="videos">
        <div className="container-item grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {videos.map((video) => (
            // <div key={video} className="bg-white p-4 rounded shadow">
            <VideoCard key={video} video={video} />
          ))}
        </div>
      </section>
    </>
  );
};
