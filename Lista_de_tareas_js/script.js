// Info date
const dateNumber = document.getElementById("dateNumber"),
dateText = document.getElementById("dateText"),
dateMonth = document.getElementById("dateMonth"),
dateYear = document.getElementById("dateYear");

// Task Container
const tasksContainer = document.getElementById("tasksContainer");


const setDate = () => {
    const date = new Date();

    dateNumber.textContent = date.toLocaleString("es", {day: "numeric"});
    dateText.textContent = date.toLocaleString("es", {weekday: "long"});
    dateMonth.textContent = date.toLocaleString("es", {month: "short"});
    dateYear.textContent = date.toLocaleString("es", {year: "numeric"});

};

const addNewTask = (event) => {
    event.preventDefault();

    const {value} = event.target.taskText;
    if (!value) return;
    const task = document.createElement("div");
    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.classList.add("btnBorrar", "roundBorder", "btnBorrarEstilos");
    btnBorrar.addEventListener("click", deleteElement);
    
    task.classList.add("task", "roundBorder");
    task.addEventListener("click", changeTaskState);
    task.innerHTML = `${value}`;
    task.appendChild(btnBorrar);
    tasksContainer.prepend(task);
    event.target.reset();
};

const deleteElement = (event) => {
    event.stopPropagation();
    pregunta = confirm("¿estás Seguro de que deseas eliminar esta nota?");

    if (pregunta) {
        tasksContainer.removeChild(event.target.parentNode);
    } else {
        return
    }
}

const changeTaskState = (event) => {
    // console.log(event.target);
    event.target.classList.toggle("done");
};

const order = () => {
    const done = [];
    const toDo = [];

    tasksContainer.childNodes.forEach(el => {
        el.classList.contains("done") ? done.push(el) : toDo.push(el)
    });

    return [...toDo, ...done];
}

const renderOrderedTask = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}

setDate();