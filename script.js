const container = document.querySelector(".container");

const gameBoard = (() => {
    return ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
})();

const Player = (name, turn) => {
    let playerName = name;
    return {playerName};
};

gameBoard.forEach(cell => {
    let cellDiv = document.createElement('div');
    cellDiv.textContent = cell;
    container.appendChild(cellDiv);

    cellDiv.addEventListener('click', () => {
        if (turn == 0) {
            cellDiv.textContent = "O",
            turn = 1;
        } else if (turn == 1) {
            cellDiv.textContent = "X",
            turn = 0;
        };
    });

});

(() => {
    return turn = 0;
    ;
})();