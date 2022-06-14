const d = document,
n = navigator,
w = window;


export default function deteccionDeInternet() {

    const isOnLine = () => {
        const $div = d.createElement("div");

        if (n.onLine) {
            $div.textContent = "Conexión recuperada";
            $div.classList.add("online");
            $div.classList.remove("offline");
        } else {
            $div.textContent = "Conexión perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }

        d.body.insertAdjacentElement("afterbegin", $div);

        setTimeout(()=>{
            d.body.removeChild($div);
        }, 2000);
    }

    w.addEventListener("online", (e) => isOnLine());
    w.addEventListener("offline", (e) => isOnLine());

}