import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    // <!-- barras laterales -->
    <section className="bar-lateral" id="bar-lateral">
      {/* <!-- barra grande --> */}
      <div id="big-menu" className="">
        <ul className="options">
          <li>
            <Link to={'#'}>
              <img src="/img/icono-home.png" alt="alt" />
              <span className="text">Inicio</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="/img/icono-shorts.png" alt="alt" />
              <span className="text">Shorts</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="/img/icono-subscriptions.png" alt="alt" />
              <span className="text">Subscripciones</span>
            </Link>
          </li>
          <hr />
        </ul>

        <ul className="options" id="library">
          <li>
            <Link to={'#'}>
              <img src="/img/icono-library.png" alt="alt" />
              <span className="text">Mi Biblioteca</span>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img src="/img/icono-historial.png" alt="alt" />
              <span className="text">Historial</span>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img src="/img/icono-videos.png" alt="alt" />
              <span className="text">Mis Videos</span>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img src="/img/icono-later.png" alt="alt" />
              <span className="text">Ver más tarde</span>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img src="/img/icono-likes.png" alt="alt" />
              <span className="text">Videos que me gustan</span>
            </Link>
          </li>
          <hr />
        </ul>

        <ul className="options" id="subscriptions">
          <h3>Subscripciones</h3>
          <li>
            <Link to={"#"}>
              <img src="/img/canal1.jpeg" alt="alt" />
              <span className="text">Coderhouse</span>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img src="/img/canal2.jpeg" alt="alt" />
              <span className="text">Plazti</span>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img src="/img/canal3.jpeg" alt="alt" />
              <span className="text">Chess24 en Español</span>
            </Link>
          </li>
          <li>
          <Link to={'#'}>
              <img src="/img/canal4.jpeg" alt="alt" />
              <span className="text">CNN</span>
            </Link>
          </li>
          <li>
          <Link to={'#'}>
              <img src="/img/canal5.jpeg" alt="alt" />
              <span className="text">National Geographic</span>
            </Link>
          </li>
          <li>
          <Link to={'#'}>
              <img src="/img/canal6.jpeg" alt="alt" />
              <span className="text">FreeCodeCamp.org</span>
            </Link>
          </li>
          <hr />
        </ul>

        <ul className="options" id="explorer">
          <h3>Explorar</h3>
          <li>
          <Link to={'#'}>
              <img src="/img/icono-explorer.png" alt="alt" />
              <span className="text">Explorar</span>
            </Link>
          </li>
          <li>
          <Link to={'#'}>
              <img src="/img/icono-music.png" alt="alt" />
              <span className="text">Música</span>
            </Link>
          </li>
          <li>
          <Link to={'#'}>
              <img src="/img/icono-movies.png" alt="alt" />
              <span className="text">Películas</span>
            </Link>
          </li>
          <li>
          <Link to={'#'}>
              <img src="/img/icono-live.png" alt="alt" />
              <span className="text">En directo</span>
            </Link>
          </li>
          <li>
          <Link to={'#'}>
              <img src="/img/icono-games.png" alt="alt" />
              <span className="text">Video Juegos</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="/img/icono-news.png" alt="alt" />
              <span className="text">Noticias</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="/img/icono-sports.png" alt="alt" />
              <span className="text">Deportes</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="/img/icono-learn.png" alt="alt" />
              <span className="text">Aprendizaje</span>
            </Link>
          </li>
          <hr />
        </ul>

        <ul className="options" id="moreyoutube">
          <h3>Mas de YouTube</h3>
          <li>
            <Link to={'#'}>
              <img src="/img/icono-premium.png" alt="alt" />
              <span className="text">YouTube Premium</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="/img/icono-creator.png" alt="alt" />
              <span className="text">Creator Studio</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="/img/icono-youtube-music.png" alt="alt" />
              <span className="text">YouTube Music</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="/img/icono-kids.png" alt="alt" />
              <span className="text">YouTube Kids</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="/img/icono-tv.png" alt="alt" />
              <span className="text">YouTube TV</span>
            </Link>
          </li>
          <hr />
        </ul>

        <ul className="options" id="config">
          <li>
            <Link to={'#'}>
              <img src="/img/icono-settings.png" alt="alt" />
              <span className="text">Configuración</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="/img/icono-complaints.png" alt="alt" />
              <span className="text">Historial de denuncias</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="/img/icono-help.png" alt="alt" />
              <span className="text">Ayuda</span>
            </Link>
          </li>
          <hr />
        </ul>

        <div className="links">
          <Link to={'#'}>Información</Link>
          <Link to={'#'}>Prensa</Link>
          <Link to={'#'}>Derechos de autor</Link>
          <Link to={'#'}>Contactar</Link>
          <Link to={'#'}>Creadores</Link>
          <Link to={'#'}>Publicidad</Link>
          <Link to={'#'}>Desarrolladores</Link>
        </div>
        <div className="links">
          <Link to={'#'}>Términos</Link>
          <Link to={'#'}>Privacidad</Link>
          <Link to={'#'}>Pólitica y seguridad</Link>
          <Link to={'#'}>Cómo funciona YouTube</Link>
          <Link to={'#'}>Probar funciones nuevas</Link>
        </div>
        <span className="google">© 2023 Google LLC</span>
      </div>

      {/* <!-- barra pequeña --> */}
      <div id="little-menu" className="little-menu ocultar">
        <ul className="options">
          <li>
            <Link to={'#'}>
              <img
                src="/img/home-page--v1.png"
                alt="alt"
              />
              <span className="text">Inicio</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img
                src="/img/attach.png"
                alt="alt"
              />
              <span className="text">Shorts</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img
                src="/img/video-playlist.png"
                alt="alt"
              />
              <span className="text">Subscripciones</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img
                src="/img/personal-video-recorder-menu.png"
                alt="alt"
              />
              <span className="text">Mi Biblioteca</span>
            </Link>
          </li>
          <hr />
        </ul>
      </div>
    </section>
  );
};
