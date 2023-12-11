/* eslint-disable import/prefer-default-export */
import { Player } from './player'

export class Game {
  constructor() {
    this.playerOne = new Player()
    this.computerPlayer = new Player()

    this.computerCarrier = this.computerPlayer.gameboard.computerPlaceShip(5)
    this.computerBattleship = this.computerPlayer.gameboard.computerPlaceShip(4)
    this.computerCruiser = this.computerPlayer.gameboard.computerPlaceShip(3)
    this.computerSubmarine = this.computerPlayer.gameboard.computerPlaceShip(3)
    this.computerDestroyer = this.computerPlayer.gameboard.computerPlaceShip(2)
  }
}
