const board = document.getElementById("board");

function createBoard() {
    for (let i = 0; i < 64; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");

        const row = Math.floor(i / 8);
        const col = i % 8;

        if ((row + col) % 2 === 0) {
            tile.classList.add("white");
        } else {
            tile.classList.add("black");
        }

        board.appendChild(tile);
    }
}

createBoard();
