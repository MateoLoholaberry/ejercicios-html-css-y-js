// import { cuentaRegresiva } from "./countdown.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import {relojDigital, alarma} from "./reloj.js";
import { moveBall, shortcuts } from "./tecaldo.js";
import countdown from "./countdown.js";
import scrollTopBtn from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import deteccionDeInternet from "./deteccion_internet.js";
import webCam from "./deteccion_webcam.js";
import getGeoLocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import sorteo from "./sorteo_digital.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidation from "./validaciones_form.js";
import speechReader from "./narrador.js";


const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    relojDigital("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarma("assets/alarma-morning.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "feb 24, 2022 10:34:00", "¡Feliz cumpleaños!");

    scrollTopBtn(".scroll-top-btn");
    responsiveMedia("youtube",
    "(min-width: 1024px)",
    `<a href="https://youtu.be/6IwUl-4pAzc" target="blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia("gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/nTe5PeNVTiET6KE19" target="blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13541.147597725416!2d-65.17886075!3d-31.95311255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sar!4v1646920532351!5m2!1sen!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );


    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeoLocation("geo");
    searchFilters(".card-filter", ".card");
    sorteo(".btn-sorteo", ".participante");
    scrollSpy();
    smartVideo();
    contactFormValidation();

})

darkTheme(".dark-theme-btn", "dark-mode", "dark-mode-2")

deteccionDeInternet();

d.addEventListener("keydown", e => {
    moveBall(e, ".ball", ".stage");
});

/* d.addEventListener("keydown", e => {
    shortcuts(e);
}); */

/* d.addEventListener("keyup", e => {
    shortcuts(e);
}); */

/* d.addEventListener("keypress", e => {
    shortcuts(e);
});  */


// cuentaRegresiva(".hora", "2023, 1, 1", "¡Feliz año nuevo!");

speechReader();