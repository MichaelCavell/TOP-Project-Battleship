/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
export class Ship {
  constructor(length, hits = 0, sunk = false) {
    this.length = length
    this.hits = hits
    this.sunk = sunk
  }

  hit() {
    if (this.hits < this.length) {
      this.hits++
      this.isSunk()
    }
  }

  isSunk() {
    if (this.length <= this.hits) {
      this.sunk = true
      return true
    }
    return false
  }
}
