const PalleteContainer = document.getElementById("palleteContainer"),
    colorValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "f"],
    PALLETE_SIZE = 5;



const createPallete = () => {
    for (let i = 0; i < PALLETE_SIZE; i++) {
        const palleteElement = document.createElement("div");
        palleteElement.classList.add("palleteItem");
        PalleteContainer.appendChild(palleteElement);
    }

    updatePallete();
}


const updatePallete = () => {
    for (let i=0; i < PalleteContainer.children.length; i++) {
        colorize(PalleteContainer.children[i])
    }
}


const colorize = (element) => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        const randomElement = colorValues[Math.floor(Math.random()*colorValues.length)];
        color += randomElement;
    }

    element.style.backgroundColor = color;
    element.innerHTML = `<span class="colorHex">${color}</span>`;
}

createPallete();