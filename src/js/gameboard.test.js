/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Gameboard } from './gameboard'

test('calling Gameboard returns a new object with 10 x 10 gameboard', () => {
  const result = new Gameboard()
  expect(result.board).toEqual([
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ])
})

// 'Gameboards should be able to place ships at specific coordinates by calling the ship factory function.'

test('placeShip can place a ship with a length of 1', () => {
  const newBoard = new Gameboard()
  const placedShip = newBoard.placeShip([3, 3], 1, 'horizontal')
  expect(newBoard.board[3][3]).toEqual(placedShip)
})

test('placeShip can place a ship with a length of 2', () => {
  const newBoard = new Gameboard()
  const placedShip = newBoard.placeShip([3, 3], 2, 'horizontal')
  expect(newBoard.board[3][3]).toEqual(placedShip)
  expect(newBoard.board[3][4]).toEqual(placedShip)
  expect(newBoard.board[3][5]).toEqual(null)
})

test('placeShip can place a ship with a length of 10', () => {
  const newBoard = new Gameboard()
  const placedShip = newBoard.placeShip([0, 0], 10, 'horizontal')
  expect(newBoard.board[0][0]).toEqual(placedShip)
  expect(newBoard.board[0][9]).toEqual(placedShip)
  expect(newBoard.board[1][9]).toEqual(null)
})

test('placeShip can place ship vertically', () => {
  const newBoard = new Gameboard()
  const placedShip = newBoard.placeShip([3, 3], 2, 'vertical')
  expect(newBoard.board[4][3]).toEqual(placedShip)
  expect(newBoard.board[3][4]).toEqual(null)
})

test('placeShip will not place ship if no room', () => {
  const newBoard = new Gameboard()
  const placedShip = newBoard.placeShip([9, 3], 2, 'vertical')
  expect(placedShip).toBe("we're gonna need a smaller boat")
})

// Gameboards should have a receiveAttack function that takes a pair of coordinates,
// determines whether or not the attack hit a ship and then sends the 'hit’ function to
// the correct ship, or records the coordinates of the missed shot.

test('receiveAttack can take a pair of coordinates and determine if attack hit ship ', () => {
  const newBoard = new Gameboard()
  const placedShip = newBoard.placeShip([3, 3], 4, 'horizontal')
  const boardTest = newBoard.receiveAttack([3, 3])
  expect(boardTest).toEqual('hit')
})

test('receiveAttack can take a pair of coordinates and sends the hit function to the correct ship', () => {
  const newBoard = new Gameboard()
  const placedShip = newBoard.placeShip([3, 3], 4, 'horizontal')
  const boardTest = newBoard.receiveAttack([3, 3])
  newBoard.receiveAttack([3, 4])
  expect(boardTest).toEqual('hit')
  expect(placedShip.hits).toBe(2)
})

test('receiveAttack records the coordinates of missed shot.', () => {
  const newBoard = new Gameboard()
  const placedShip = newBoard.placeShip([3, 3], 4, 'horizontal')
  const boardTest = newBoard.receiveAttack([4, 3])
  expect(boardTest).toEqual(newBoard.board[4][3])
})

// Gameboards should keep track of missed attacks so they can display them properly.
test('calling receiveAttack results in missed attack being tracked', () => {
  const newBoard = new Gameboard()
  const placedShip = newBoard.placeShip([3, 3], 4, 'horizontal')
  const boardTest = newBoard.receiveAttack([4, 3])
  expect(newBoard.board[4][3]).toEqual('miss')
})

// Gameboards should be able to report whether or not all of their ships have been sunk.
test('calling allShipsSunk reports whether or not all ships are sunk', () => {
  const newBoard = new Gameboard()
  const placedShip = newBoard.placeShip([3, 3], 4, 'horizontal')
  newBoard.receiveAttack([3, 3])
  newBoard.receiveAttack([3, 4])
  newBoard.receiveAttack([3, 5])
  newBoard.receiveAttack([3, 6])
  expect(newBoard.allShipsSunk()).toBe(true)
})

test('calling allShipsSunk reports whether or not all ships are sunk', () => {
  const newBoard = new Gameboard()
  const placedShip = newBoard.placeShip([3, 3], 4, 'horizontal')
  newBoard.receiveAttack([3, 3])
  newBoard.receiveAttack([3, 5])
  newBoard.receiveAttack([3, 6])
  console.log(newBoard.board)

  expect(newBoard.allShipsSunk()).toBe(false)
})

test('getBoardState returns a valid copy of the board', () => {
  const gameboard = new Gameboard()

  gameboard.board[0][0] = 'hit'

  const boardState = gameboard.getBoardState()

  expect(gameboard.board[0][0]).toBe('hit')
  expect(boardState[0][0]).toBe('hit')

  boardState[0][1] = 'miss'

  expect(gameboard.board[0][1]).toBeNull()
  expect(boardState[0][1]).toBe('miss')
})
