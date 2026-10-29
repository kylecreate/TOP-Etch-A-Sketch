const container = document.querySelector("#container");
const gridChangeBtn = document.querySelector("#changeGridBtn");

// Randomize colors
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Creating Rows and Columns inside of the div container
function makeGrid(rows, cols) {

    // Finding the container and giving it properties
    const container = document.getElementById("container");
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    let cell;

    // Creating the grid
    for (let c = 0; c < (rows * cols); c++) {
        cell = document.createElement("div");
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};

// Changing the grid from 16x16 to something else
gridChangeBtn.addEventListener("click", function onClick() {

    // Asking for a number between 1 and 40
    let gridSize = Number(prompt("Choose the size of your custom grid between 1 and 40"));

    // If the choice isn't a number
    if (isNaN(gridSize) === true) {
        window.alert("Pick a number, please!");
        return onClick();
    }

    // If choice is less than 40
    if (gridSize > 40) {
        window.alert("Please pick a number lower than 40");
        return onClick();
    }

    // If choice is less than 0
    if (gridSize < 0) {
        window.alert("Please choose a larger or positive number");
        return onClick();
    }

    return makeGrid(gridSize, gridSize);
});