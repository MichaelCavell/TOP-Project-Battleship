/* eslint-disable no-undef */
import { Ship } from './ship'

test('calling Ship returns a new object with length, number of times hit, and sunk status properties', () => {
  const result = new Ship(10)
  expect(result.length).toBe(10)
  expect(result.hits).toBe(0)
  expect(result.sunk).toBe(false)
})

test('hit() increases the ship hit count by 1', () => {
  const result = new Ship(4)
  result.hit()
  expect(result.hits).toBe(1)
})

test('isSunk returns true if hits equals length', () => {
  const newShip = new Ship(4, 4)
  expect(newShip.isSunk()).toBe(true)
})

test('hit() does not increase hit count if ship is sunk', () => {
  const result = new Ship(4, 4, true)
  result.hit()
  expect(result.hits).toBe(4)
})
