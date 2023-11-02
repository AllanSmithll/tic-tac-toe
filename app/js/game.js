// Game's logic - 01/11/2023
export class Game {
    _pontuationA;
    _pontuationB;
    constructor(pontuationA, pontuationB) {
        this._pontuationA = pontuationA;
        this._pontuationB = pontuationB;
    }
    winner() {
        if (this._pontuationA > this._pontuationB) {
            // o
        }
        else {
            return console.log("Jogador B venceu!");
        }
    }
    get pontuationA() {
        return this._pontuationA;
    }
    get pontuationB() {
        return this._pontuationB;
    }
}
