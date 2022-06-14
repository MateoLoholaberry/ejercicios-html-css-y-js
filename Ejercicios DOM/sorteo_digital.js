const d = document

export default function sorteo(btn, participantes) {
    let lista = [];
    d.querySelectorAll(participantes).forEach(el => {
        lista.push(el)
    });

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {

            let ganador = (Math.floor(Math.random()*lista.length))
            alert(`El ganador del sorteo es ${lista[ganador].textContent}`);
        }

    })
}