//change of logic. instead of using forEach right away, I will simply querySelectorAll divs and add event listeners to them.

const container = document.querySelector(".container");

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

let currentPlayer;


const gameplay = (() => {

    const randomTurn = (p1, p2) => {
        if (p1.turn > p2.turn) {
            return p1.marker = "O",
            p2.marker = "X",
            currentPlayer = p1;
        } else if (p1.turn < p2.turn) {
            return p1.marker = "X",
            currentPlayer = p2,
            p2.marker = "O";
        };
    };

    const create = gameBoard.forEach(cell => {
        let cellDiv = document.createElement('div');
        cellDiv.textContent = cell;
        container.appendChild(cellDiv);
    });

    const cellEvent = () => {
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', function callback(e) {
                currentPlayer.takenCells.push(e.target.textContent);
                e.target.textContent = currentPlayer.marker;
                e.target.removeEventListener('click', callback);
                if (currentPlayer == p1) {
                    return currentPlayer = p2;
                } else if (currentPlayer == p2) {
                    return currentPlayer == p1;
                }
            });
        }
    };
    return {create, cellEvent, randomTurn};
})();

let cells = container.querySelectorAll('div');

gameplay.randomTurn(p1, p2);
gameplay.cellEvent();
