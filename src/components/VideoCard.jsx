import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const VideoCard = ({video}) => {

  const handleSplit = (aux) => {
    let partes = aux.split(".");
    return partes[0];
  };

  return (
    <div className="item">
              <div className="img-container">
                <Link to={`/video-play/${video}`}>
                  <img
                    src={`/image/${handleSplit(video)}.png`}
                    alt={handleSplit(video)}
                    className="w-full block rounded-[20px] cursor-pointer"
                  />
                </Link>
                <span className="time">15:00</span>
              </div>
              <div className="row flex gap-3 items-center justify-start">
                <div className="col ">
                  <div className="img-channel">
                    <img
                      src={`/image/${handleSplit(video)}.png`}
                      alt={handleSplit(video)}
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="info">
                    <h3 className="line-clamp-2 font-bold">
                      <Link to={`/video-play/${video}`}>
                        {handleSplit(video)}
                      </Link>
                    </h3>
                    {/* <Link to={`/video-play/${video}`} className="name-channel">
                      Coder
                    </Link>
                    <div className="metadata">
                      <span>122.000 visualizaciones</span>
                      &#9679;
                      <span>Emitido hace 3 días</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
  )
};

VideoCard.propTypes = {
    video: PropTypes.object,
  };