import { Ship } from "./ship";
import { Gameboard } from "./gameboard";

export class Player {
    constructor() {
        this.playerTurn = true;
        this.gameboard = new Gameboard;
    }

    switchTurn() {
        this.playerTurn = false;
    }

    attack(row, column, target) {
        target.receiveAttack([row, column]);
        this.switchTurn();
    }

    computerPlayerTurn(enemyBoard) {
        const target = this.generateRandomCoordinate(enemyBoard.board)
        this.attack(target[0], target[1], enemyBoard);
        return 'attacked' + target
    }

    generateRandomCoordinate(grid) {
        const gridSize = grid.length;
        let randomX, randomY;
      
        do {
          randomX = Math.floor(Math.random() * gridSize);
          randomY = Math.floor(Math.random() * gridSize);
        } while (grid[randomX][randomY] === "hit" || grid[randomX][randomY] === "miss");
      
        return [randomX, randomY];
      }

}
  