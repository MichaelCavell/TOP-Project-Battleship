/* eslint-disable no-undef */
import { Player } from './player'

const enemyPlayer = new Player()
const enemyBoard = enemyPlayer.gameboard
enemyBoard.placeShip([3, 3], 4, 'vertical')
enemyBoard.placeShip([0, 0], 7, 'horizontal')

test('calling playerAttack() attacks the enemy GameBoard', () => {
  const newPlayer = new Player()
  newPlayer.attack(4, 3, enemyBoard)
  newPlayer.attack(5, 3, enemyBoard)
  newPlayer.attack(6, 3, enemyBoard)
  newPlayer.attack(2, 6, enemyBoard)
  newPlayer.attack(0, 0, enemyBoard)

  const targetShip = enemyBoard.board[3][3]
  const otherTargetShip = enemyBoard.board[0][1]
  expect(targetShip.hits).toEqual(3)
  expect(targetShip.sunk).toBe(false)
  expect(otherTargetShip.hits).toEqual(1)
  expect(otherTargetShip.sunk).toBe(false)
})

test('calling switchTurn() toggles turn status', () => {
  const newPlayer = new Player()
  expect(newPlayer.playerTurn).toBe(true)
  newPlayer.switchTurn()
  expect(newPlayer.playerTurn).toBe(false)
})

test('calling attack() toggles turn status', () => {
  const newPlayer = new Player()
  expect(newPlayer.playerTurn).toBe(true)
  newPlayer.attack(3, 3, enemyBoard)
  expect(newPlayer.playerTurn).toBe(false)
})

// The game is played against the computer, so make the ‘computer’
// capable of making random plays. The AI does not have to be smart,
// but it should know whether or not a given move is legal (i.e. it
// shouldn’t shoot the same coordinate twice).

test('generateRandomNumber returns a random number', () => {
  const computerPlayer = new Player()
  const didItAttack = computerPlayer.computerPlayerTurn(enemyBoard)
  expect(didItAttack).toMatch(/^attacked\d,\d$/)
})
