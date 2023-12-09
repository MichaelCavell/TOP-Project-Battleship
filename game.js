import { Player } from "./player";
import { Ship } from "./ship";
import { Gameboard } from "./gameboard";

export class Game {
    constructor() {
        this.playerOne = new Player;
        this.computerPlayer = new Player;

        this.playerOne.gameboard.placeShip([0, 0], 4, 'horizontal');
        this.computerPlayer.gameboard.placeShip([2, 3], 3, 'vertical');
    }
} 