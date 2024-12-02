const cells = document.querySelectorAll('.cell');
const statusElement = document.getElementById('status');
const restartBtn = document.getElementById('restartBtn');
const scoreXElement = document.getElementById('scoreX');
const scoreOElement = document.getElementById('scoreO');

let currentPlayer = 'X';  // Jogador inicial
let gameBoard = ['', '', '', '', '', '', '', '', ''];  // Representação do tabuleiro
let gameOver = false;
let scoreX = 0;
let scoreO = 0;

const winningCombinations = [
    [0, 1, 2], // Linha superior
    [3, 4, 5], // Linha do meio
    [6, 7, 8], // Linha inferior
    [0, 3, 6], // Coluna esquerda
    [1, 4, 7], // Coluna do meio
    [2, 5, 8], // Coluna direita
    [0, 4, 8], // Diagonal principal
    [2, 4, 6], // Diagonal secundária
];

// Função para verificar vitória
function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a];
        }
    }
    return gameBoard.includes('') ? null : 'Empate';
}

// Função para fazer a jogada
function handleCellClick(e) {
    const index = e.target.getAttribute('data-index');
    if (gameBoard[index] || gameOver) return; // Não faz nada se a célula já foi marcada ou o jogo acabou

    gameBoard[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    const winner = checkWinner();

    if (winner) {
        if (winner === 'Empate') {
            statusElement.textContent = 'Empate!';
        } else {
            statusElement.textContent = `Jogador ${winner} venceu!`;
            if (winner === 'X') {
                scoreX++;
                scoreXElement.textContent = scoreX;
            } else {
                scoreO++;
                scoreOElement.textContent = scoreO;
            }
        }
        gameOver = true;
        restartBtn.style.display = 'block'; // Exibe o botão de reiniciar
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Alterna o jogador
        statusElement.textContent = `Jogador ${currentPlayer}, é a sua vez!`;
    }
}

// Função para reiniciar o jogo
function restartGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.disabled = false;
    });
    statusElement.textContent = 'Jogador X, é a sua vez!';
    restartBtn.style.display = 'none';
}

// Adicionando eventos de clique nas células
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

// Evento para reiniciar o jogo
restartBtn.addEventListener('click', restartGame);
