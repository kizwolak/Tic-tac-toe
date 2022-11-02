const container = document.querySelector(".container");

const gameBoard = (() => {
    return ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
})();

const Player = (name) => {
    let playerName = name;
    let turn = Math.random();
    let cells = [];
    let marker;
    return {playerName, turn, cells, marker};
};

const p1 = Player("Mary");
const p2 = Player("Jane");

gameBoard.forEach(cell => {
    let cellDiv = document.createElement('div');
    cellDiv.textContent = cell;
    container.appendChild(cellDiv);

    //function that adds cell number to player array, turns

    const turnMarker = (p1, p2) => {
        if (p1.turn == 0) {

        }
       
    }
    const playerMove = (p1, p2) => {
        let currentPlayer = p1;
        currentPlayer.cells.push(cellDiv.textContent);
        if (currentPlayer == p1) {
            return currentPlayer = p2;
        } else if (currentPlayer == p2) {
            currentPlayer == p1
        }
    };

    cellDiv.addEventListener('click', playerMove(p1, p2));


});

(() => {
    return turn = 0;
})();


const randomTurn = (p1, p2) => {
    if (p1.turn > p2.turn) {
        p1.turn = 0;
        p1.marker = "X";
        p2.turn = 1;
        p2.marker = "O";
    } else if (p1.turn < p2.turn) {
        p1.turn = 1;
        p1.marker = "O";
        p2.turn = 0;
        p2.marker = "X";
    };
};

randomTurn(p1, p2);

const cellContent = () => {
    if (turn == 0) {
        cellDiv.textContent = "O",
        turn = 1;
        cellDiv.removeEventListener('click', turnMarker);
    } else if (turn == 1) {
        cellDiv.textContent = "X",
        turn = 0;
        cellDiv.removeEventListener('click', turnMarker);
    };
};