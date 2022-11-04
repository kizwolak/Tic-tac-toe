const container = document.querySelector(".container");
const namesDiv = document.querySelector(".names");
const nameButton = namesDiv.querySelector("#nameButton");
let p1;
let p2;

const gameBoard = (() => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9];
})();

const Player = (name) => {
    let playerName = name;
    let turn = Math.random();
    let takenCells = [];
    let marker;
    return {playerName, turn, takenCells, marker};
};

nameButton.addEventListener('click', () => {
    p1 = Player(document.querySelector("#name1").value);
    p2 = Player(document.querySelector("#name2").value);
})

const init = (() => {
    const namesDiv = document.querySelector(".names");
    const buttons = namesDiv.querySelectorAll("button");
});

const gameplay = (() => {

    let currentPlayer;

    const randomTurn = (p1, p2) => {
        if (p1.turn > p2.turn) {
            return p1.marker = "O",
            p2.marker = "X",
            currentPlayer = p1;
        } else if (p1.turn < p2.turn) {
            return p1.marker = "X",
            p2.marker = "O",
            currentPlayer = p2;
        };
    };

    function create(gameBoard) {gameBoard.forEach(cell => {
        let cellDiv = document.createElement('div');
        cellDiv.textContent = cell;
        container.appendChild(cellDiv);
    })};

    const cellEvent = () => {
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', function callback(e) {
                currentPlayer.takenCells.push(e.target.textContent);
                e.target.textContent = currentPlayer.marker;
                e.target.removeEventListener('click', callback);
                if (currentPlayer == p1) {
                    currentPlayer = p2;
                } else if (currentPlayer == p2) {
                    currentPlayer = p1;
                };
                winCheck(p1, p2);
            });
        }
    };

    const victory1 = (p1) => {
        console.log(`Congratulations! ${p1.playerName} wins!`);
    };

    const victory2 = (p2) => {
        console.log(`Congratulations! ${p2.playerName} wins!`);
    };

    const winCheck = (p1, p2) => {
        const winArrays = {
            1: [1, 2, 3],
            2: [4, 5, 6],
            3: [7, 8, 9],
            4: [1, 5, 9],
            5: [1, 4, 7],
            6: [2, 5, 8],
            7: [3, 6, 9],
            8: [3, 5, 7],
        };
        let p1Cells = p1.takenCells.map(Number);
        let p2Cells = p2.takenCells.map(Number);

        const isTruth1 = (i) => {
            return winArrays[i].every(cell => {
                return (p1Cells.includes(cell));
            });
        }

        const truthLoop1 = () => {for (let i = 1; i <= 8; i++) {
            if (isTruth1(i) == true) {
                victory1(p1);
            }
        }};

        truthLoop1();

        const isTruth2 = (i) => {
            return winArrays[i].every(cell => {
                return (p2Cells.includes(cell));
            });
        }

        const truthLoop2 = () => {for (let i = 1; i <= 8; i++) {
            if (isTruth2(i) == true) {
                victory2(p2);
            }
        }};

        truthLoop2();
        
    };



    return {create, cellEvent, randomTurn};
})();


// gameplay.create(gameBoard);

// let cells = container.querySelectorAll('div');

// gameplay.randomTurn(p1, p2);
// gameplay.cellEvent();



