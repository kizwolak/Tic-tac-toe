const container = document.querySelector(".container");

const gameBoard = (() => {
return ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
})();

const Player = (name) => {
    let playerName = name;
    return {playerName};
};

gameBoard.forEach(cell => {
    let cellDiv = document.createElement('div');
    cellDiv.textContent = cell;
    container.appendChild(cellDiv);
});
