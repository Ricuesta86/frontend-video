import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const VideoCard = (props) => {
  const {video}=props
  const aux={
    "img":"image-fill1.webp",
    "time":"15:00",
    "img-chanel":"img/canal1.jpeg",
    "title" : "Chat GPT vs Google Bard, La Guerra de las IA (Google vs Microsoft)",
    "name-chanel": "Coder",
    "visualizaciones":"122.000 visualizaciones",
    "emitido":"Emitido hace 3 días"
  }
  return (
    <div>
      {" "}
      <div class="container-item">
        <div class="item">
          <div class="img-container">
            <img src="img/image-fill1.webp" alt="" />
            <span class="time">15:00</span>
          </div>
          <div class="row">
            <div class="col">
              <div class="img-channel">
                <img src="img/canal1.jpeg" alt="" />
              </div>
            </div>
            <div class="col">
              <div class="info">
                <h3>
                  <Link to="#">
                    Chat GPT vs Google Bard, La Guerra de las IA (Google vs
                    Microsoft)
                  </Link>
                </h3>
                <Link to="#" class="name-channel">
                  Coder
                </Link>
                <div class="metadata">
                  <span>122.000 visualizaciones</span>
                  &#9679;
                  <span>Emitido hace 3 días</span>
                </div>
              </div>
            </div>
          </div>
          <div class="buttons-video" id="buttons-video">
            <button>
              <img src="img/icono-historial.png" alt="" />
              Ver mas tarde
            </button>
            <button>
              <img src="img/icono-add.png" alt="" />
              Añadir a la cola
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
    video: PropTypes.object,
  };