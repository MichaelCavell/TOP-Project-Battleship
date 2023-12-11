/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import { Player } from "./player";
import { Game } from "./game";
// The game loop should set up a new game by creating
// Players and Gameboards. For now just populate each
// Gameboard with predetermined coordinates. You are going
// to implement a system for allowing players to place
// their ships later.

test("creating new Game() initializes game with two players and boards and initial ship coordinates", () => {
  const newGame = new Game();

  const playerOne = new Player();
  playerOne.gameboard.placeShip([0, 0], 4, "horizontal");

  const computerPlayer = new Player();
  computerPlayer.gameboard.placeShip([2, 3], 3, "vertical");

  expect(newGame.playerOne).toEqual(playerOne);
  expect(newGame.computerPlayer).toEqual(computerPlayer);
  expect(newGame.playerOne.gameboard).toEqual(playerOne.gameboard);
  expect(newGame.computerPlayer.gameboard).toEqual(computerPlayer.gameboard);
});
