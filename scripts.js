document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const cells = document.querySelectorAll('.cell');
    const statusMessage = document.getElementById('status-message');

    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const index = cell.dataset.index;

            if (gameBoard[index] === '' && gameActive) {
                gameBoard[index] = currentPlayer;
                cell.textContent = currentPlayer;
                
                if (checkWinner()) {
                    statusMessage.textContent = `Jogador ${currentPlayer} venceu!`;
                    gameActive = false;
                } else if (gameBoard.every(cell => cell !== '')) {
                    statusMessage.textContent = 'O jogo empatou!';
                    gameActive = false;
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    statusMessage.textContent = `É a vez do Jogador ${currentPlayer}`;
                }
            }
        });
    });

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
            [0, 4, 8], [2, 4, 6]             // Diagonais
        ];

        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
        });
    }
});