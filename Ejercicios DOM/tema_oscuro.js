export default function darkTheme(btn, classDark, classDark2) {
    const $themeBtn = document.querySelector(btn);

    const $selectors = document.querySelectorAll("[data-dark]"),
        $selectors2 = document.querySelectorAll("[data-dark-2]");

    let moon = "🌑",
    sun = "☀️";

    const lightMode = () => {
        $selectors.forEach(el => {
            el.classList.remove(classDark);
        });
        $themeBtn.textContent = moon;

        $selectors2.forEach(el => {
            el.classList.remove(classDark2)
        });

        localStorage.setItem("theme", "light");
    }
    const darkMode = () => {
        $selectors.forEach(el => {
            el.classList.add(classDark);
        });
        $themeBtn.textContent = sun;

        $selectors2.forEach(el => {
            el.classList.add(classDark2)
        });

        localStorage.setItem("theme", "dark");
    }

    document.addEventListener("click", e => {
        if(e.target.matches(btn)) {
            if($themeBtn.textContent === moon) {
                darkMode();
            } else {
                lightMode();
            }
        }
    })

    document.addEventListener("DOMContentLoaded", e => {
        if (localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", "light")
        }

        if (localStorage.getItem("theme") === "light") {
            lightMode();
        }

        if (localStorage.getItem("theme") === "dark") {
            darkMode();
        }
    })
}