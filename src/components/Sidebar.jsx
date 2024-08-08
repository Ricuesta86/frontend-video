import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    // <!-- barras laterales -->
    <section class="bar-lateral" id="bar-lateral">
      {/* <!-- barra grande --> */}
      <div id="big-menu" class="">
        <ul class="options">
          <li>
            <Link to={'#'}>
              <img src="img/icono-home.png" alt="alt" />
              <span class="text">Inicio</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="img/icono-shorts.png" alt="alt" />
              <span class="text">Shorts</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="img/icono-subscriptions.png" alt="alt" />
              <span class="text">Subscripciones</span>
            </Link>
          </li>
          <hr />
        </ul>

        <ul class="options" id="library">
          <li>
            <Link to={'#'}>
              <img src="img/icono-library.png" alt="alt" />
              <span class="text">Mi Biblioteca</span>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img src="img/icono-historial.png" alt="alt" />
              <span class="text">Historial</span>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img src="img/icono-videos.png" alt="alt" />
              <span class="text">Mis Videos</span>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img src="img/icono-later.png" alt="alt" />
              <span class="text">Ver más tarde</span>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img src="img/icono-likes.png" alt="alt" />
              <span class="text">Videos que me gustan</span>
            </Link>
          </li>
          <hr />
        </ul>

        <ul class="options" id="subscriptions">
          <h3>Subscripciones</h3>
          <li>
            <Link to={"#"}>
              <img src="img/canal1.jpeg" alt="alt" />
              <span class="text">Coderhouse</span>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img src="img/canal2.jpeg" alt="alt" />
              <span class="text">Plazti</span>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img src="img/canal3.jpeg" alt="alt" />
              <span class="text">Chess24 en Español</span>
            </Link>
          </li>
          <li>
          <Link to={'#'}>
              <img src="img/canal4.jpeg" alt="alt" />
              <span class="text">CNN</span>
            </Link>
          </li>
          <li>
          <Link to={'#'}>
              <img src="img/canal5.jpeg" alt="alt" />
              <span class="text">National Geographic</span>
            </Link>
          </li>
          <li>
          <Link to={'#'}>
              <img src="img/canal6.jpeg" alt="alt" />
              <span class="text">FreeCodeCamp.org</span>
            </Link>
          </li>
          <hr />
        </ul>

        <ul class="options" id="explorer">
          <h3>Explorar</h3>
          <li>
          <Link to={'#'}>
              <img src="img/icono-explorer.png" alt="alt" />
              <span class="text">Explorar</span>
            </Link>
          </li>
          <li>
          <Link to={'#'}>
              <img src="img/icono-music.png" alt="alt" />
              <span class="text">Música</span>
            </Link>
          </li>
          <li>
          <Link to={'#'}>
              <img src="img/icono-movies.png" alt="alt" />
              <span class="text">Películas</span>
            </Link>
          </li>
          <li>
          <Link to={'#'}>
              <img src="img/icono-live.png" alt="alt" />
              <span class="text">En directo</span>
            </Link>
          </li>
          <li>
          <Link to={'#'}>
              <img src="img/icono-games.png" alt="alt" />
              <span class="text">Video Juegos</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="img/icono-news.png" alt="alt" />
              <span class="text">Noticias</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="img/icono-sports.png" alt="alt" />
              <span class="text">Deportes</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="img/icono-learn.png" alt="alt" />
              <span class="text">Aprendizaje</span>
            </Link>
          </li>
          <hr />
        </ul>

        <ul class="options" id="moreyoutube">
          <h3>Mas de YouTube</h3>
          <li>
            <Link to={'#'}>
              <img src="img/icono-premium.png" alt="alt" />
              <span class="text">YouTube Premium</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="img/icono-creator.png" alt="alt" />
              <span class="text">Creator Studio</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="img/icono-youtube-music.png" alt="alt" />
              <span class="text">YouTube Music</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="img/icono-kids.png" alt="alt" />
              <span class="text">YouTube Kids</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="img/icono-tv.png" alt="alt" />
              <span class="text">YouTube TV</span>
            </Link>
          </li>
          <hr />
        </ul>

        <ul class="options" id="config">
          <li>
            <Link to={'#'}>
              <img src="img/icono-settings.png" alt="alt" />
              <span class="text">Configuración</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="img/icono-complaints.png" alt="alt" />
              <span class="text">Historial de denuncias</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img src="img/icono-help.png" alt="alt" />
              <span class="text">Ayuda</span>
            </Link>
          </li>
          <hr />
        </ul>

        <div class="links">
          <Link to={'#'}>Información</Link>
          <Link to={'#'}>Prensa</Link>
          <Link to={'#'}>Derechos de autor</Link>
          <Link to={'#'}>Contactar</Link>
          <Link to={'#'}>Creadores</Link>
          <Link to={'#'}>Publicidad</Link>
          <Link to={'#'}>Desarrolladores</Link>
        </div>
        <div class="links">
          <Link to={'#'}>Términos</Link>
          <Link to={'#'}>Privacidad</Link>
          <Link to={'#'}>Pólitica y seguridad</Link>
          <Link to={'#'}>Cómo funciona YouTube</Link>
          <Link to={'#'}>Probar funciones nuevas</Link>
        </div>
        <span class="google">© 2023 Google LLC</span>
      </div>

      {/* <!-- barra pequeña --> */}
      <div id="little-menu" class="little-menu ocultar">
        <ul class="options">
          <li>
            <Link to={'#'}>
              <img
                src="https://img.icons8.com/ios-glyphs/60/null/home-page--v1.png"
                alt="alt"
              />
              <span class="text">Inicio</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img
                src="https://img.icons8.com/ios-glyphs/30/null/attach.png"
                alt="alt"
              />
              <span class="text">Shorts</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img
                src="https://img.icons8.com/ios/50/null/video-playlist.png"
                alt="alt"
              />
              <span class="text">Subscripciones</span>
            </Link>
          </li>
          <li>
            <Link to={'#'}>
              <img
                src="https://img.icons8.com/ios/50/null/personal-video-recorder-menu.png"
                alt="alt"
              />
              <span class="text">Mi Biblioteca</span>
            </Link>
          </li>
          <hr />
        </ul>
      </div>
    </section>
  );
};
