const container = document.querySelector(".container");
const namesDiv = document.querySelector(".names");
const nameButton = namesDiv.querySelector("#nameButton");
let cells;
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

    function create(gameBoard) {
        gameBoard.forEach(cell => {
        let cellDiv = document.createElement('div');
        cellDiv.className = "cellDiv";
        cellDiv.textContent = cell;
        container.appendChild(cellDiv);
    })};

    const cellEvent = () => {
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', function callback(e) {
                let img = document.createElement("img");
                if (currentPlayer.marker == "X") {
                    img.src = "./X.png";
                } else if (currentPlayer.marker == "O") {
                    img.src = "./O.png";
                };
                currentPlayer.takenCells.push(e.target.textContent);
                e.target.textContent = '';
                e.target.appendChild(img);
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

    const containerClear = (container) => {
        container.textContent = '';
        container.style.display = "flex";
        container.style.justifyContent = "center";
        container.style.alignItems = "center";
        container.style.flexDirection = "column";
        container.style.gap = "10em";
    }

    const newGame = () => {
        let question = document.createElement("div");
        question.textContent = "Another one?";
        container.appendChild(question);
        question.className = "question";
        let yes = document.createElement("button");
        yes.className = "answer";
        yes.textContent = "YES, PLEASE!";
        container.appendChild(yes);
        const generateNew = (p1, p2) => {
            containerClear(container);
            p1.takenCells = [];
            p2.takenCells = [];
            gameplay.create(gameBoard);
            cells = container.querySelectorAll('.cellDiv');
            gameplay.randomTurn(p1, p2);
            gameplay.cellEvent();
            container.style.display = "grid";
            container.style.justifyContent = "";
            container.style.alignItems = "";
            container.style.flexDirection = "";
            container.style.gap = "";
        };
        yes.addEventListener('click', function(){generateNew(p1, p2)});
    }

    const victory1 = (p1) => {
        containerClear(container);
        let victory1p = document.createElement('div');
        victory1p.textContent = `${p1.playerName} wins!`;
        victory1p.className = "victory1";
        container.appendChild(victory1p);
        newGame();
    };

    const victory2 = (p2) => {
        containerClear(container);
        let victory2p = document.createElement('div');
        victory2p.className = "victory2";
        victory2p.textContent = `${p2.playerName} wins!`;
        container.appendChild(victory2p);
        newGame();
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


nameButton.addEventListener('click', () => {
    p1 = Player(document.querySelector("#name1").value);
    p2 = Player(document.querySelector("#name2").value);
    document.querySelector("#name1").value = '';
    document.querySelector("#name2").value = '';
    document.querySelector(".names").remove();
    document.querySelector("#title").remove();
    gameplay.create(gameBoard);
    cells = container.querySelectorAll('.cellDiv');
    gameplay.randomTurn(p1, p2);
    gameplay.cellEvent();

});






