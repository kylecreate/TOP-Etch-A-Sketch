const container = document.querySelector("#container");
const gridChangeBtn = document.querySelector("#changeGridBtn");
const refreshPageBtn = document.querySelector("#refreshPageBtn");

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

        // Creating the div of each item
        cell = document.createElement("div");
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";

        // Choosing random color
        let color = randomColor();

        // Giving random color when mouse moves around grid
        cell.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = color;
        })
    };
};

// Changing the grid from 16x16 to something else
gridChangeBtn.addEventListener("click", function onClick() {

    // Asking for a number between 1 and 100
    let gridSize = Number(prompt("Choose the size of your custom grid between 1 and 100"));

    // If the choice isn't a number
    if (isNaN(gridSize) === true) {
        window.alert("Pick a number, please!");
        return onClick();
    }

    // If choice is less than 100
    if (gridSize > 100) {
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

// Refreshing the page
refreshPageBtn.addEventListener("click", (e) => {
    location.reload();
})