/* export function cuentaRegresiva(elemento, fecha, mensaje) {
    const d = document;

    let fechaActualMls = new Date().getTime();
    const fechaFuturaMls = new Date(fecha).getTime();
    const diasMls = 1000*60*60*24;
    const horasMls = 1000*60*60;
    const minutosMls = 1000*60;
    const segundosMls = 1000;

    let diferenciaFechasMls = fechaFuturaMls - fechaActualMls;

    let diasHumanos = Math.floor(diferenciaFechasMls / diasMls);
    let restoDias = diferenciaFechasMls % diasMls

    let horasHumanas = Math.floor(restoDias / horasMls);
    let restoHoras = restoDias % horasMls;

    let minutosHumanos = Math.floor(restoHoras / minutosMls);
    let restoMinutos = restoHoras % minutosMls;

    let segundosHumanos = Math.floor(restoMinutos / segundosMls);

    let elemen = d.querySelector(elemento);
    elemen.innerHTML = "";

    const tiempo = setInterval(() => {
        fechaActualMls = new Date().getTime();

        diferenciaFechasMls = fechaFuturaMls - fechaActualMls;
        diasHumanos = Math.floor(diferenciaFechasMls / diasMls);
        restoDias = diferenciaFechasMls % diasMls;
        horasHumanas = Math.floor(restoDias / horasMls);
        restoHoras = restoDias % horasMls;
        minutosHumanos = Math.floor(restoHoras / minutosMls);
        restoMinutos = restoHoras % minutosMls;
        segundosHumanos = Math.floor(restoMinutos / segundosMls);

        elemen.innerHTML = `${diasHumanos} días ${horasHumanas} horas ${minutosHumanos} minutos ${segundosHumanos} segundos`;
    }, 1000);

    if (diferenciaFechasMls === 0) {
        clearInterval(tiempo);
        elemen.innerHTML = `${mensaje}`;
    }

} */



const d = document;
export default function countdown(id, limitDate, finalMessage) {
    const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(()=> {
        let now = new Date().getTime(),
        limitTime = countdownDate - now,
        days = Math.floor(limitTime / (1000*60*60*24)),
        hours = ("0" + Math.floor((limitTime % (1000*60*60*24)) / (1000*60*60))).slice(-2),
        minutes = ("0" + Math.floor((limitTime % (1000*60*60)) / (1000*60))).slice(-2),
        seconds = ("0" + Math.floor((limitTime % (1000*60)) / (1000))).slice(-2);

        $countdown.innerHTML = `<h3>Faltan ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;


        if (limitTime < 0) {
            clearInterval(countdown);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
        }
        // console.log(countdownDate);
    },1000)
}