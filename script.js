const gridItem = document.getElementsByClassName("grid-item");

// Creating Rows and Columns inside of the div container
function makeRows(rows, cols) {

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

makeRows(16, 16);