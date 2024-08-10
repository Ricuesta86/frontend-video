import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

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
        {videos.map((video) => (
          <div key={video} className="bg-white p-4 rounded shadow">
            {/* <video controls className="w-full">
              <source
                src={`http://localhost:5000/videos/${video}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video> */}
            <Link to={`/video-play/${video}`}>
              <ReactPlayer
                width={"100%"}
                pip={`http://localhost:5000/videos/${video}`}
                url={`http://localhost:5000/videos/${video}`}
              />
              <p className="mt-2 text-center">{video}</p>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};
