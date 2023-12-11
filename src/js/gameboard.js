/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
import { Ship } from './ship'

export class Gameboard {
  constructor() {
    this.rows = 10
    this.columns = 10
    this.board = this.newBoard()
  }

  newBoard() {
    return Array.from({ length: this.rows }, () =>
      Array.from({ length: this.columns }, () => null),
    )
  }

  placeShip(start, length, direction) {
    const newShip = new Ship(length)
    let [row, column] = start
    const fitCheckResult = this.fitCheck(start, length, direction)
    if (fitCheckResult) {
      if (direction === 'horizontal') {
        for (let i = 0; i < length; i++) {
          this.board[row][column] = newShip
          column++
        }
      }
      if (direction === 'vertical') {
        for (let i = 0; i < length; i++) {
          this.board[row][column] = newShip
          row++
        }
      }

      return newShip
    }
    return "we're gonna need a smaller boat"
  }

  fitCheck(start, length, direction) {
    let [row, column] = start
    if (direction === 'horizontal') {
      const space = this.board.length - column
      if (length > space) {
        return false
      }
      for (let i = 0; i < length; i++) {
        if (this.board[row][column] instanceof Ship) {
          return false
        }
        column++
      }
      return true
    }
    if (direction === 'vertical') {
      const space = this.board.length - row
      if (length > space) {
        return false
      }
      for (let i = 0; i < length; i++) {
        if (this.board[row][column] instanceof Ship) {
          return false
        }
        row++
      }
      return true
    }
  }

  receiveAttack(target) {
    const [row, column] = target
    const targetValue = this.board[row][column]
    if (targetValue instanceof Ship) {
      targetValue.hit()
      this.board[row][column] = 'hit'
      return 'hit'
    }
    if (targetValue === 'hit' || targetValue === 'miss') {
      return 'not a valid attack'
    }
    this.board[row][column] = 'miss'
    return this.board[row][column]
  }

  allShipsSunk() {
    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        const cellValue = this.board[row][column]
        if (cellValue instanceof Ship && !cellValue.isSunk()) {
          return false
        }
      }
    }
    return true
  }

  getBoardState() {
    return this.board.map((row) => row.slice())
  }

  computerPlaceShip(length) {
    const gridSize = 10
    let randomX
    let randomY
    let direction

    do {
      randomX = Math.floor(Math.random() * gridSize)
      randomY = Math.floor(Math.random() * gridSize)
      direction = Math.random() < 0.5 ? 'horizontal' : 'vertical'
    } while (!this.fitCheck([randomX, randomY], length, direction))

    return this.placeShip([randomX, randomY], length, direction)
  }
}
