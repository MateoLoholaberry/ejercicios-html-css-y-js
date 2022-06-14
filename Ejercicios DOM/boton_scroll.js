const d = document,
    w = window;

export default function scrollTopBtn(btn) {
    const $scrollBtn = d.querySelector(btn);

    w.addEventListener("scroll", e => {
        let scrollTop = w.scrollY;

        if (scrollTop > 400) {
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");
        }
    });

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            w.scrollTo({
                top:0,
                behavior:"smooth"
            })
        }
    });
}