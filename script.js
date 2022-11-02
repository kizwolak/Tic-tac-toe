//change of logic. instead of using forEach right away, I will simply querySelectorAll divs and add event listeners to them.

const container = document.querySelector(".container");
let cells = container.querySelectorAll('div');

const gameBoard = (() => {
    return ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
})();


const Player = (name) => {
    let playerName = name;
    let turn = Math.random();
    let takenCells = [];
    let marker;
    return {playerName, turn, takenCells, marker};
};


const p1 = Player("Mary");
const p2 = Player("Jane");

const randomTurn = (p1, p2) => {
    if (p1.turn > p2.turn) {
        return p1.turn = 0,
        p1.marker = "O",
        p2.turn = 1,
        p2.marker = "X";
    } else if (p1.turn < p2.turn) {
        return p1.turn = 1,
        p1.marker = "X",
        p2.turn = 0,
        p2.marker = "O";
    };
};

randomTurn(p1, p2);

const playerMove = (p1, p2) => {
    let currentPlayer;
    if (p1.turn == 0) {
        currentPlayer = p1;
    } else if (p2.turn == 0) {
        currentPlayer = p2;
    }
    currentPlayer.takenCells.push(cellDiv.textContent);
    cellDiv.textContent = currentPlayer.marker;
    if (currentPlayer == p1) {
        currentPlayer = p2;
    } else if (currentPlayer == p2) {
        currentPlayer == p1
    }
    cellDiv.removeEventListener('click', playerMove);
};


const gameplay = (() => {
    const create = gameBoard.forEach(cell => {
        let cellDiv = document.createElement('div');
        cellDiv.textContent = cell;
        container.appendChild(cellDiv);
    });
    return {create};
})();

