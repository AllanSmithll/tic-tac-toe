// Interface class - 01/11/2023
export class Interface {
    private cells: NodeListOf<Element>;
    private currentPlayer: string;

    constructor() {
        this.cells = document.querySelectorAll(".cell");
        this.addClickHandlers();
    }

    private addClickHandlers() {
        this.cells.forEach(cell => {
            cell.addEventListener("click", () => {
                this.handlePlayerMove(cell);
            });
        });
    }

    public renderBoard(boardState: string[][]) {
        // Atualizar a exibição do tabuleiro com base no estado atual
    }

    private handlePlayerMove(cell: Element) {
        if (!cell.textContent) {
            cell.textContent = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
        }
    }

    public displayMessage(message: string) {
        // Exibir mensagens de status no elemento HTML apropriado
    }

    public resetGame() {
        // Reiniciar o jogo, redefinindo o tabuleiro e as pontuações
    }
}
