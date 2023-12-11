/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { Gameboard } from './gameboard'

export class Player {
  constructor() {
    this.playerTurn = true
    this.gameboard = new Gameboard()
  }

  switchTurn() {
    this.playerTurn = false
  }

  attack(row, column, target) {
    target.receiveAttack([row, column])
    this.switchTurn()
    if (target.board[row][column] === 'hit') {
      this.updateRecentHit(row, column)
    }
  }

  computerPlayerTurn(enemyBoard) {
    let target
    if (this.recentHit) {
      target = this.tryAdjacentSlots(this.recentHit, enemyBoard.board)
    } else {
      target = this.generateRandomCoordinate(enemyBoard.board)
    }
    this.attack(target[0], target[1], enemyBoard)

    return `attacked${target}`
  }

  tryAdjacentSlots(recentHit, grid) {
    const [row, column] = recentHit
    const adjacentSlots = [
      [row - 1, column],
      [row + 1, column],
      [row, column - 1],
      [row, column + 1],
    ]

    for (const [adjRow, adjCol] of adjacentSlots) {
      if (
        adjRow >= 0 &&
        adjRow < 10 &&
        adjCol >= 0 &&
        adjCol < 10 &&
        grid[adjRow][adjCol] !== 'hit' &&
        grid[adjRow][adjCol] !== 'miss'
      ) {
        return [adjRow, adjCol]
      }
    }

    // If no valid adjacent slot found, return null or handle accordingly
    return this.generateRandomCoordinate(grid)
  }

  generateRandomCoordinate(grid) {
    const gridSize = grid.length
    let randomX
    let randomY

    do {
      randomX = Math.floor(Math.random() * gridSize)
      randomY = Math.floor(Math.random() * gridSize)
    } while (
      grid[randomX][randomY] === 'hit' ||
      grid[randomX][randomY] === 'miss'
    )

    return [randomX, randomY]
  }

  updateRecentHit(row, col) {
    this.recentHit = [row, col]
  }
}
