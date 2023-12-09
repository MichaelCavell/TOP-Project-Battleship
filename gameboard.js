import { Ship } from "./ship";

export class Gameboard {
    constructor() {
        this.rows = 10;
        this.columns = 10;
        this.board = this.newBoard();
    }
    
    newBoard() {
        return Array.from({ length: this.rows }, () =>
        Array.from({ length: this.columns }, () => null));
    }

    placeShip(start, length, direction) {
        const newShip = new Ship(length);
        let [row, column] = start;
        const fitCheckResult = this.fitCheck(start, length, direction);
        if (fitCheckResult) {
            if (direction === 'horizontal') {
                for (let i = 0; i < length; i++) {
                    this.board[row][column] = newShip;
                    column++
                }
            }
            if (direction === 'vertical') {
                for (let i = 0; i < length; i++) {
                    this.board[row][column] = newShip;
                    row++
                }
            }

            return newShip
        } else {
            return "we're gonna need a smaller boat";
        }
    }

    fitCheck(start, length, direction) {
        const [row, column] = start;
        if (direction === 'horizontal') {
            const space = this.board.length - column;
            if (length > space) {
                return false;
            } else {
                return true;
            }
        }
        if (direction === 'vertical') {
            const space = this.board.length - (row);
            if (length > space) {
                return false;
            } else {
                return true;
            }
        }
    }

    receiveAttack(target) {
        let [row, column] = target;
        let targetValue = this.board[row][column] 
        if (targetValue instanceof Ship) {
            targetValue.hit();
            this.board[row][column] = 'hit'
            return 'hit';
        } else if (targetValue === 'hit' || targetValue === 'miss') {
            return 'not a valid attack';
        } else {
            this.board[row][column] = 'miss';
            return this.board[row][column];
        }
    }

    allShipsSunk() {
        for (let row = 0; row < this.rows.length; row++) {
            for (let column = 0; i < this.column.length; column++) {
                const cellValue = board[row][column]
                if (cellValue instanceof Ship && !cellValue.allShipsSunk()) {
                    return false;
                }
            }
        }
        return true;
    }
}
    