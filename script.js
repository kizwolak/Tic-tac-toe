const container = document.querySelector(".container");

const gameBoard = (() => {
    return ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
})();

const Player = (name) => {
    let playerName = name;
    let turn = Math.random();
    return {playerName, turn};
};

gameBoard.forEach(cell => {
    let cellDiv = document.createElement('div');
    cellDiv.textContent = cell;
    container.appendChild(cellDiv);

    const turnMarker = () => {
        if (turn == 0) {
            cellDiv.textContent = "O",
            turn = 1;
            cellDiv.removeEventListener('click', turnMarker);
        } else if (turn == 1) {
            cellDiv.textContent = "X",
            turn = 0;
            cellDiv.removeEventListener('click', turnMarker);
        };
    }

    cellDiv.addEventListener('click', turnMarker);
});

(() => {
    return turn = 0;
})();

const randomTurn = (p1, p2) => {
    if (p1.turn > p2.turn) {
        p1.turn = 0;
        p2.turn = 1;
    }
    if (p1.turn < p2.turn) {
        p1.turn = 1;
        p2.turn = 0;
    }
};
