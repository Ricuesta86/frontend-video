import React from 'react'
import { Link } from 'react-router-dom'

export const Videos = () => {
  return (
    // <!-- sección de videos -->
    <section class="videos" id="videos">
        {/* <!-- items --> */}
        <div class="container-item">
            <div class="item">
                <div class="img-container">
                    <img src="img/image-fill1.webp" alt=""/>
                    <span class="time">15:00</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="img-channel">
                            <img src="img/canal1.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="info">
                            <h3><Link to="#">Chat GPT vs Google Bard, La Guerra de las IA (Google vs Microsoft)</Link></h3>
                            <Link to="#" class="name-channel">Coder</Link>
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
                        <img src="img/icono-historial.png" alt=''/>
                        Ver mas tarde
                    </button>
                    <button>
                        <img src="img/icono-add.png" alt=''/>
                        Añadir a la cola</button>
                </div>
            </div>
        </div>
        <div class="container-item">
            <div class="item">
                <div class="img-container">
                    <img src="img/img-video2.webp" alt=""/>
                    <span class="time">2:30</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="img-channel">
                            <img src="img/canal4.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="info">
                            <h3><Link to="#">Resumen del cometa verde, visible en el cielo nocturno por primera vez desde la Edad de Piedra</Link></h3>
                            <Link to="#" class="name-channel">CNN</Link>
                            <div class="metadata">
                                <span>35.000 visualizaciones</span>
                                &#9679;
                                <span>Emitido hace 2 meses</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttons-video" id="buttons-video">
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/clock--v1.png" alt=''/>
                        Ver mas tarde
                    </button>
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/video--v1.png" alt=''/>
                        Añadir a la cola</button>
                </div>
            </div>
        </div>
        <div class="container-item">
            <div class="item">
                <div class="img-container">
                    <img src="img/img-video3.webp" alt="" />
                    <span class="time">15:00</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="img-channel">
                            <img src="img/canal3.jpeg" alt="" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="info">
                            <h3><Link to="#">NAKAMURA a por la REVANCHA contra CARLSEN | Airthings Master Champions Chess Tour</Link></h3>
                            <Link to="#" class="name-channel">Chess 24</Link>
                            <div class="metadata">
                                <span>300.000 visualizaciones</span>
                                &#9679;
                                <span>Emitido hace 4 meses</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttons-video" id="buttons-video">
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/clock--v1.png" alt=''/>
                        Ver mas tarde
                    </button>
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/video--v1.png" alt=''/>
                        Añadir a la cola</button>
                </div>
            </div>
        </div>
        <div class="container-item">
            <div class="item">
                <div class="img-container">
                    <img src="img/img-video4.webp" alt="" />
                    <span class="time">2:00:00</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="img-channel">
                            <img src="img/canal6.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="info">
                            <h3><Link to="#">Java Programming for Beginners - Full Course</Link></h3>
                            <Link to="#" class="name-channel">Free Code Camp</Link>
                            <div class="metadata">
                                <span>150.000 visualizaciones</span>
                                &#9679;
                                <span>Emitido hace 2 días</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttons-video" id="buttons-video">
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/clock--v1.png" alt=''/>
                        Ver mas tarde
                    </button>
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/video--v1.png" alt=''/>
                        Añadir a la cola</button>
                </div>
            </div>
        </div>
        <div class="container-item">
            <div class="item">
                <div class="img-container">
                    <img src="img/img-video5.webp" alt=""/>
                    <span class="time">15:00</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="img-channel">
                            <img src="img/canal5.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="info">
                            <h3><Link to="#">MACHU PICCHU AL DESCUBIERTO - NATIONAL GEOGRAPHIC
                            </Link></h3>
                            <Link to="#" class="name-channel">National Geographic</Link>
                            <div class="metadata">
                                <span>200.000 visualizaciones</span>
                                &#9679;
                                <span>Emitido hace 8 años</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttons-video" id="buttons-video">
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/clock--v1.png" alt=''/>
                        Ver mas tarde
                    </button>
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/video--v1.png" alt=''/>
                        Añadir a la cola</button>
                </div>
            </div>
        </div>
        <div class="container-item">
            <div class="item">
                <div class="img-container">
                    <img src="img/img-video6.webp" alt=""/>
                    <span class="time">15:00</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="img-channel">
                            <img src="img/canal1.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="info">
                            <h3><Link to="#">Intro animada de página Web. Puro HTML & CSS. Animación con @keyframes.</Link></h3>
                            <Link to="#" class="name-channel">Coder</Link>
                            <div class="metadata">
                                <span>6000 visualizaciones</span>
                                &#9679;
                                <span>Emitido hace 5 días</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttons-video" id="buttons-video">
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/clock--v1.png" alt=''/>
                        Ver mas tarde
                    </button>
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/video--v1.png" alt=''/>
                        Añadir a la cola</button>
                </div>
            </div>
        </div>
        <div class="container-item">
            <div class="item">
                <div class="img-container">
                    <img src="img/img-video7.webp" alt=""/>
                    <span class="time">35:00</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="img-channel">
                            <img src="img/canal4.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="info">
                            <h3><Link to="#">Joel Osteen en Cala, de CNN en Español</Link></h3>
                            <Link to="#" class="name-channel">Coder</Link>
                            <div class="metadata">
                                <span>302.000 visualizaciones</span>
                                &#9679;
                                <span>Emitido hace 9 años</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttons-video" id="buttons-video">
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/clock--v1.png" alt=''/>
                        Ver mas tarde
                    </button>
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/video--v1.png" alt=''/>
                        Añadir a la cola</button>
                </div>
            </div>
        </div>
        <div class="container-item">
            <div class="item">
                <div class="img-container">
                    <img src="img/img-video8.webp" alt=""/>
                    <span class="time">2:00</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="img-channel">
                            <img src="img/canal3.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="info">
                            <h3><Link to="#">3 Rules That Will Change YOUR Chess Forever! [Expert SECRETS & TIPS]</Link></h3>
                            <Link to="#" class="name-channel">Coder</Link>
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
                        <img src="https://img.icons8.com/ios/50/null/clock--v1.png" alt=''/>
                        Ver mas tarde
                    </button>
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/video--v1.png" alt=''/>
                        Añadir a la cola</button>
                </div>
            </div>
        </div>
        <div class="container-item">
            <div class="item">
                <div class="img-container">
                    <img src="img/img-video9.webp" alt=""/>
                    <span class="time">15:00</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="img-channel">
                            <img src="img/canal1.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="info">
                            <h3><Link to="#">Lógica de Programación 👩- Aprende a programar en 10 minutos</Link></h3>
                            <Link to="#" class="name-channel">Coder</Link>
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
                        <img src="https://img.icons8.com/ios/50/null/clock--v1.png" alt=''/>
                        Ver mas tarde
                    </button>
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/video--v1.png" alt=''/>
                        Añadir a la cola</button>
                </div>
            </div>
        </div>
        <div class="container-item">
            <div class="item">
                <div class="img-container">
                    <img src="img/image-fill1.webp" alt=""/>
                    <span class="time">15:00</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="img-channel">
                            <img src="img/canal1.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="info">
                            <h3><Link to="#">Chat GPT vs Google Bard, La Guerra de las IA (Google vs Microsoft)</Link></h3>
                            <Link to="#" class="name-channel">Coder</Link>
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
                        <img src="img/icono-historial.png" alt=''/>
                        Ver mas tarde
                    </button>
                    <button>
                        <img src="img/icono-add.png" alt=''/>
                        Añadir a la cola</button>
                </div>
            </div>
        </div>
        <div class="container-item">
            <div class="item">
                <div class="img-container">
                    <img src="img/img-video2.webp" alt=""/>
                    <span class="time">2:30</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="img-channel">
                            <img src="img/canal4.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="info">
                            <h3><Link to="#">Resumen del cometa verde, visible en el cielo nocturno por primera vez desde la Edad de Piedra</Link></h3>
                            <Link to="#" class="name-channel">CNN</Link>
                            <div class="metadata">
                                <span>35.000 visualizaciones</span>
                                &#9679;
                                <span>Emitido hace 2 meses</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttons-video" id="buttons-video">
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/clock--v1.png" alt=''/>
                        Ver mas tarde
                    </button>
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/video--v1.png" alt=''/>
                        Añadir a la cola</button>
                </div>
            </div>
        </div>
        <div class="container-item">
            <div class="item">
                <div class="img-container">
                    <img src="img/img-video3.webp" alt=""/>
                    <span class="time">15:00</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="img-channel">
                            <img src="img/canal3.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="info">
                            <h3><Link to="#">NAKAMURA a por la REVANCHA contra CARLSEN | Airthings Master Champions Chess Tour</Link></h3>
                            <Link to="#" class="name-channel">Chess 24</Link>
                            <div class="metadata">
                                <span>300.000 visualizaciones</span>
                                &#9679;
                                <span>Emitido hace 4 meses</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttons-video" id="buttons-video">
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/clock--v1.png" alt=''/>
                        Ver mas tarde
                    </button>
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/video--v1.png" alt=''/>
                        Añadir a la cola</button>
                </div>
            </div>
        </div>
        <div class="container-item">
            <div class="item">
                <div class="img-container">
                    <img src="img/img-video4.webp" alt=""/>
                    <span class="time">2:00:00</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="img-channel">
                            <img src="img/canal6.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="info">
                            <h3><Link to="#">Java Programming for Beginners - Full Course</Link></h3>
                            <Link to="#" class="name-channel">Free Code Camp</Link>
                            <div class="metadata">
                                <span>150.000 visualizaciones</span>
                                &#9679;
                                <span>Emitido hace 2 días</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttons-video" id="buttons-video">
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/clock--v1.png" alt=''/>
                        Ver mas tarde
                    </button>
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/video--v1.png" alt=''/>
                        Añadir a la cola</button>
                </div>
            </div>
        </div>
        <div class="container-item">
            <div class="item">
                <div class="img-container">
                    <img src="img/img-video5.webp" alt=""/>
                    <span class="time">15:00</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="img-channel">
                            <img src="img/canal5.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="info">
                            <h3><Link to="#">MACHU PICCHU AL DESCUBIERTO - NATIONAL GEOGRAPHIC
                            </Link></h3>
                            <Link to="#" class="name-channel">National Geographic</Link>
                            <div class="metadata">
                                <span>200.000 visualizaciones</span>
                                &#9679;
                                <span>Emitido hace 8 años</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttons-video" id="buttons-video">
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/clock--v1.png" alt=''/>
                        Ver mas tarde
                    </button>
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/video--v1.png" alt=''/>
                        Añadir a la cola</button>
                </div>
            </div>
        </div>
        <div class="container-item">
            <div class="item">
                <div class="img-container">
                    <img src="img/img-video6.webp" alt=""/>
                    <span class="time">15:00</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="img-channel">
                            <img src="img/canal1.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="info">
                            <h3><Link to="#">Intro animada de página Web. Puro HTML & CSS. Animación con @keyframes.</Link></h3>
                            <Link to="#" class="name-channel">Coder</Link>
                            <div class="metadata">
                                <span>6000 visualizaciones</span>
                                &#9679;
                                <span>Emitido hace 5 días</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttons-video" id="buttons-video">
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/clock--v1.png" alt=''/>
                        Ver mas tarde
                    </button>
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/video--v1.png" alt=''/>
                        Añadir a la cola</button>
                </div>
            </div>
        </div>
        <div class="container-item">
            <div class="item">
                <div class="img-container">
                    <img src="img/img-video7.webp" alt=""/>
                    <span class="time">35:00</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="img-channel">
                            <img src="img/canal4.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="info">
                            <h3><Link to="#">Joel Osteen en Cala, de CNN en Español</Link></h3>
                            <Link to="#" class="name-channel">Coder</Link>
                            <div class="metadata">
                                <span>302.000 visualizaciones</span>
                                &#9679;
                                <span>Emitido hace 9 años</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttons-video" id="buttons-video">
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/clock--v1.png" alt=''/>
                        Ver mas tarde
                    </button>
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/video--v1.png" alt=''/>
                        Añadir a la cola</button>
                </div>
            </div>
        </div>
        <div class="container-item">
            <div class="item">
                <div class="img-container">
                    <img src="img/img-video8.webp" alt=""/>
                    <span class="time">2:00</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="img-channel">
                            <img src="img/canal3.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="info">
                            <h3><Link to="#">3 Rules That Will Change YOUR Chess Forever! [Expert SECRETS & TIPS]</Link></h3>
                            <Link to="#" class="name-channel">Coder</Link>
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
                        <img src="https://img.icons8.com/ios/50/null/clock--v1.png" alt=''/>
                        Ver mas tarde
                    </button>
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/video--v1.png" alt=''/>
                        Añadir a la cola</button>
                </div>
            </div>
        </div>
        <div class="container-item">
            <div class="item">
                <div class="img-container">
                    <img src="img/img-video9.webp" alt=""/>
                    <span class="time">15:00</span>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="img-channel">
                            <img src="img/canal1.jpeg" alt=""/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="info">
                            <h3><Link to="#">Lógica de Programación 👩- Aprende a programar en 10 minutos</Link></h3>
                            <Link to="#" class="name-channel">Coder</Link>
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
                        <img src="https://img.icons8.com/ios/50/null/clock--v1.png" alt=''/>
                        Ver mas tarde
                    </button>
                    <button>
                        <img src="https://img.icons8.com/ios/50/null/video--v1.png" alt=''/>
                        Añadir a la cola</button>
                </div>
            </div>
        </div>
    </section>
  )
}
