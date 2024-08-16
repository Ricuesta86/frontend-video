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

  const handleSplit = (video) => {
    let partes = video.split(".");
    return partes[0];
  };

  return (
    <>
      <section className="videos" id="videos">
        <div className="container-item">
          {videos.map((video) => (
            // <div key={video} className="bg-white p-4 rounded shadow">
            <div key={video} className="item">
              <div className="img-container">
                <Link to={`/video-play/${video}`}>
                  <img
                    src={`/image/${handleSplit(video)}.png`}
                    alt={handleSplit(video)}
                    className="w-full block rounded-[20px] cursor-pointer"
                  />
                </Link>
                <span className="time">15:00</span>
                {/* <ReactPlayer
                    width={"100%"}
                    pip={true}
                    url={`http://localhost:5000/videos/${video}`}
                  /> */}
              </div>
              <div className="row">
                <div className="col">
                  <div className="img-channel">
                    <img
                      src={`/image/${handleSplit(video)}.png`}
                      alt={handleSplit(video)}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="info">
                    <h3>
                      <Link to={`/video-play/${video}`}>
                        {handleSplit(video)}
                      </Link>
                    </h3>
                    <Link to={`/video-play/${video}`} className="name-channel">
                      Coder
                    </Link>
                    <div className="metadata">
                      <span>122.000 visualizaciones</span>
                      &#9679;
                      <span>Emitido hace 3 días</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
