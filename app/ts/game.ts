// Game's logic - 01/11/2023

export class Game {
    private _pontuationA: number;
    private _pontuationB: number;
    constructor(pontuationA: number, pontuationB: number) {
        this._pontuationA = pontuationA;
        this._pontuationB = pontuationB;
    }

    winner(): void  {
        if () {
            // o jogador A fizer o alinhamento
        } else if () {
            // o jogador B fizer o alinhamento
        } else () {
            // então empatou
        }
    }

    get pontuationA(): number {
        return this._pontuationA;
    }

    get pontuationB(): number {
        return this._pontuationB;
    }
}