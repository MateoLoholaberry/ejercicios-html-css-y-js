const d = document;
let x = 0,
    y = 0;

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);
    const limitsball = $ball.getBoundingClientRect();
    const limitstage = $stage.getBoundingClientRect();

    // console.log(limitsball, limitstage);

    switch (e.keyCode) {
        case 37:
            // move left
            e.preventDefault();
            if (limitsball.left > limitstage.left) x--;
            break;
        case 38:
            // move up
            e.preventDefault();
            if (limitsball.top > limitstage.top) y--;
            break;
        case 39:
            // move right
            e.preventDefault();
            if (limitsball.right < limitstage.right) x++;
            break;
        case 40:
            // move down
            e.preventDefault();
            if (limitsball.bottom < limitstage.bottom) y++;
            break;

        default:
            break;
    }
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}

export function shortcuts(e) {
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(`Control: ${e.ctrlKey}`);
    console.log(`Shift: ${e.shiftKey}`);
    console.log(`Alt: ${e.altKey}`);
    console.log(e);

    if (e.key === "a" && e.altKey) {
        alert("Haz lanzado una alerta con un shortcut de teclado.")
    }

    if (e.key === "c" && e.altKey) {
        confirm("Haz lanzado una confirmación con un shortcut de teclado.")
    }
    if (e.key === "p" && e.altKey) {
        alert("Haz lanzado un prompt con un shortcut de teclado.")
    }
}

