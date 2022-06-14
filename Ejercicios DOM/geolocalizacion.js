const d = document,
n = navigator;

export default function getGeoLocation(id) {
    const $div = d.getElementById(id);

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    const succes = (position)=>{
        console.log(position);

        $div.innerHTML = `
        <p>Tu posición actual es:</p>
        <ul>
            <li>Latitud: ${position.coords.latitude}</li>
            <li>Longitud: ${position.coords.longitude}</li>
            <li>Precisión: ${Math.round(position.coords.accuracy)} metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${position.coords.latitude}, ${position.coords.longitude}, 10z" target="_blank" rel="noopener">Ver en Google maps</a>
        `

    };


    const error = (error)=>{
        $div.innerHTML = `Sucedió el siguiente error: código:${error.code}, mensaje: ${error.message}`
        console.log(`Sucedió el siguiente error: código:${error.code}, mensaje: ${error.message}`)
    };


    n.geolocation.getCurrentPosition(succes, error, options);
}