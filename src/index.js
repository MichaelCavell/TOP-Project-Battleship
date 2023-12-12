/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import './styles.css'
import { Game } from './js/game'
import { Ship } from './js/ship'

const game = new Game()

// Pre Game:
function preGameSetup() {
  const playerOneGameState = game.playerOne.gameboard.getBoardState()
  const playerHeading = document.getElementById('player-heading')
  playerHeading.innerText = 'Player Board'
  const playerBoard = document.getElementById('player-board')
  updatePreGameBoard(playerBoard, playerOneGameState)
}

function updatePreGameBoard(boardElement, boardState) {
  boardElement.innerHTML = ''

  for (let row = 0; row < boardState.length; row++) {
    for (let col = 0; col < boardState[row].length; col++) {
      const cell = document.createElement('h2')
      cell.classList.add('cell')
      const cellState = boardState[row][col]
      cell.innerText = `${row}, ${col}`
      cell.setAttribute('data-row', row)
      cell.setAttribute('data-col', col)

      if (cellState === null) {
        cell.style.backgroundColor = 'lightblue'
      } else if (cellState === 'miss') {
        cell.style.backgroundColor = 'white'
      } else if (cellState === 'hit') {
        cell.style.backgroundColor = 'red'
      } else {
        cell.style.backgroundColor = 'grey'
        cell.innerText = ''
      }

      boardElement.appendChild(cell)
    }
  }
}

// Game Start Countdown
let count = 0

// Carrier Select
document.addEventListener('DOMContentLoaded', () => {
  const carrierRowSelect = document.getElementById('carrier-row')
  const carrierColSelect = document.getElementById('carrier-col')
  const placeCarrierButton = document.getElementById('placeCarrierButton')

  const boardSize = 10

  for (let i = 0; i < boardSize; i++) {
    const rowOption = document.createElement('option')
    rowOption.value = i
    rowOption.text = i
    carrierRowSelect.appendChild(rowOption)

    const colOption = document.createElement('option')
    colOption.value = i
    colOption.text = i
    carrierColSelect.appendChild(colOption)
  }

  placeCarrierButton.addEventListener('click', placeCarrier)
})

function placeCarrier() {
  const carrierRowSelect = document.getElementById('carrier-row')
  const carrierColSelect = document.getElementById('carrier-col')
  const carrierOrientation = document.getElementById(
    'carrier-orientation',
  ).value
  const carrierDiv = document.getElementById('carrier-div')

  const startRow = parseInt(carrierRowSelect.value, 10)
  const startCol = parseInt(carrierColSelect.value, 10)

  if (
    game.playerOne.gameboard.fitCheck(
      [startRow, startCol],
      5,
      carrierOrientation,
    )
  ) {
    game.playerOne.gameboard.placeShip(
      [startRow, startCol],
      5,
      carrierOrientation,
    )
    preGameSetup()
    count++
    carrierDiv.innerHTML = ''
    if (count >= 5) {
      updateBoards()
    }
  }
}

// Battleship Select
document.addEventListener('DOMContentLoaded', () => {
  const battleshipRowSelect = document.getElementById('battleship-row')
  const battleshipColSelect = document.getElementById('battleship-col')
  const placeBattleshipButton = document.getElementById('placeBattleshipButton')

  const boardSize = 10

  for (let i = 0; i < boardSize; i++) {
    const rowOption = document.createElement('option')
    rowOption.value = i
    rowOption.text = i
    battleshipRowSelect.appendChild(rowOption)

    const colOption = document.createElement('option')
    colOption.value = i
    colOption.text = i
    battleshipColSelect.appendChild(colOption)
  }

  placeBattleshipButton.addEventListener('click', placeBattleship)
})

function placeBattleship() {
  const battleshipRowSelect = document.getElementById('battleship-row')
  const battleshipColSelect = document.getElementById('battleship-col')
  const battleshipOrientation = document.getElementById(
    'battleship-orientation',
  ).value
  const battleshipDiv = document.getElementById('battleship-div')

  const startRow = parseInt(battleshipRowSelect.value, 10)
  const startCol = parseInt(battleshipColSelect.value, 10)

  if (
    game.playerOne.gameboard.fitCheck(
      [startRow, startCol],
      4,
      battleshipOrientation,
    )
  ) {
    game.playerOne.gameboard.placeShip(
      [startRow, startCol],
      4,
      battleshipOrientation,
    )
    preGameSetup()
    count++
    battleshipDiv.innerHTML = ''
    if (count >= 5) {
      updateBoards()
    }
  }
}

// Cruiser Select
document.addEventListener('DOMContentLoaded', () => {
  const cruiserRowSelect = document.getElementById('cruiser-row')
  const cruiserColSelect = document.getElementById('cruiser-col')
  const placeCruiserButton = document.getElementById('placeCruiserButton')

  const boardSize = 10

  for (let i = 0; i < boardSize; i++) {
    const rowOption = document.createElement('option')
    rowOption.value = i
    rowOption.text = i
    cruiserRowSelect.appendChild(rowOption)

    const colOption = document.createElement('option')
    colOption.value = i
    colOption.text = i
    cruiserColSelect.appendChild(colOption)
  }

  placeCruiserButton.addEventListener('click', placeCruiser)
})

function placeCruiser() {
  const cruiserRowSelect = document.getElementById('cruiser-row')
  const cruiserColSelect = document.getElementById('cruiser-col')
  const cruiserOrientation = document.getElementById(
    'cruiser-orientation',
  ).value
  const cruiserDiv = document.getElementById('cruiser-div')

  const startRow = parseInt(cruiserRowSelect.value, 10)
  const startCol = parseInt(cruiserColSelect.value, 10)

  if (
    game.playerOne.gameboard.fitCheck(
      [startRow, startCol],
      3,
      cruiserOrientation,
    )
  ) {
    game.playerOne.gameboard.placeShip(
      [startRow, startCol],
      3,
      cruiserOrientation,
    )
    preGameSetup()
    count++
    cruiserDiv.innerHTML = ''
    if (count >= 5) {
      updateBoards()
    }
  }
}

// Submarine Select (3)
document.addEventListener('DOMContentLoaded', () => {
  const submarineRowSelect = document.getElementById('submarine-row')
  const submarineColSelect = document.getElementById('submarine-col')
  const placeSubmarineButton = document.getElementById('placeSubmarineButton')

  const boardSize = 10

  for (let i = 0; i < boardSize; i++) {
    const rowOption = document.createElement('option')
    rowOption.value = i
    rowOption.text = i
    submarineRowSelect.appendChild(rowOption)

    const colOption = document.createElement('option')
    colOption.value = i
    colOption.text = i
    submarineColSelect.appendChild(colOption)
  }

  placeSubmarineButton.addEventListener('click', placeSubmarine)
})

function placeSubmarine() {
  const submarineRowSelect = document.getElementById('submarine-row')
  const submarineColSelect = document.getElementById('submarine-col')
  const submarineOrientation = document.getElementById(
    'submarine-orientation',
  ).value
  const submarineDiv = document.getElementById('submarine-div')

  const startRow = parseInt(submarineRowSelect.value, 10)
  const startCol = parseInt(submarineColSelect.value, 10)

  if (
    game.playerOne.gameboard.fitCheck(
      [startRow, startCol],
      3,
      submarineOrientation,
    )
  ) {
    game.playerOne.gameboard.placeShip(
      [startRow, startCol],
      3,
      submarineOrientation,
    )
    preGameSetup()
    count++
    submarineDiv.innerHTML = ''
    if (count >= 5) {
      updateBoards()
    }
  }
}

// Destroyer Select (2)
document.addEventListener('DOMContentLoaded', () => {
  const destroyerRowSelect = document.getElementById('destroyer-row')
  const destroyerColSelect = document.getElementById('destroyer-col')
  const placeDestroyerButton = document.getElementById('placeDestroyerButton')

  const boardSize = 10

  for (let i = 0; i < boardSize; i++) {
    const rowOption = document.createElement('option')
    rowOption.value = i
    rowOption.text = i
    destroyerRowSelect.appendChild(rowOption)

    const colOption = document.createElement('option')
    colOption.value = i
    colOption.text = i
    destroyerColSelect.appendChild(colOption)
  }

  placeDestroyerButton.addEventListener('click', placeDestroyer)
})

function placeDestroyer() {
  const destroyerRowSelect = document.getElementById('destroyer-row')
  const destroyerColSelect = document.getElementById('destroyer-col')
  const destroyerOrientation = document.getElementById(
    'destroyer-orientation',
  ).value
  const destroyerDiv = document.getElementById('destroyer-div')

  const startRow = parseInt(destroyerRowSelect.value, 10)
  const startCol = parseInt(destroyerColSelect.value, 10)

  if (
    game.playerOne.gameboard.fitCheck(
      [startRow, startCol],
      2,
      destroyerOrientation,
    )
  ) {
    game.playerOne.gameboard.placeShip(
      [startRow, startCol],
      2,
      destroyerOrientation,
    )
    preGameSetup()
    count++
    destroyerDiv.innerHTML = ''
    if (count >= 5) {
      updateBoards()
    }
  }
}

// In Game:
function updateBoard(boardElement, boardState) {
  boardElement.innerHTML = ''

  for (let row = 0; row < boardState.length; row++) {
    for (let col = 0; col < boardState[row].length; col++) {
      const cell = document.createElement('h2')
      cell.classList.add('cell')
      const cellState = boardState[row][col]
      cell.setAttribute('data-row', row)
      cell.setAttribute('data-col', col)

      if (cellState === null) {
        cell.style.backgroundColor = 'lightblue'
      } else if (cellState === 'miss') {
        cell.style.backgroundColor = 'white'
      } else if (cellState === 'hit') {
        cell.style.backgroundColor = 'red'
      } else {
        cell.style.backgroundColor = 'grey'
        cell.innerText = ''
      }

      boardElement.appendChild(cell)
    }
  }
}

function updateComputerBoard(boardElement, boardState) {
  boardElement.innerHTML = ''

  for (let row = 0; row < boardState.length; row++) {
    for (let col = 0; col < boardState[row].length; col++) {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      const cellState = boardState[row][col]
      cell.setAttribute('data-row', row)
      cell.setAttribute('data-col', col)

      if (cellState === null) {
        cell.style.backgroundColor = 'lightblue'
      } else if (cellState === 'miss') {
        cell.style.backgroundColor = 'white'
      } else if (cellState === 'hit') {
        cell.style.backgroundColor = 'red'
      } else {
        cell.style.backgroundColor = 'lightblue'
      }

      boardElement.appendChild(cell)
    }
  }
}

function updateBoards() {
  const playerOneGameState = game.playerOne.gameboard.getBoardState()
  const computerPlayerGameState = game.computerPlayer.gameboard.getBoardState()

  const playerBoard = document.getElementById('player-board')
  const playerHeading = document.getElementById('player-heading')
  playerHeading.innerText = 'Player Board'
  updateBoard(playerBoard, playerOneGameState)

  const computerBoard = document.getElementById('computer-board')
  const computerHeading = document.getElementById('computer-heading')
  computerHeading.innerText = 'Computer Board'
  updateComputerBoard(computerBoard, computerPlayerGameState)

  const scoreboard = document.getElementById('scoreboard')
  const carrier = document.getElementById('carrier')
  const battleship = document.getElementById('battleship')
  const cruiser = document.getElementById('cruiser')
  const submarine = document.getElementById('submarine')
  const destroyer = document.getElementById('destroyer')

  const carrierStatus = computerCarrier()
  const battleshipStatus = computerBattleship()
  const cruiserStatus = computerCruiser()
  const submarineStatus = computerSubmarine()
  const destroyerStatus = computerDestroyer()

  scoreboard.innerText = 'Computer Ships'
  carrier.innerText = `${carrierStatus}`
  battleship.innerText = `${battleshipStatus}`
  cruiser.innerText = `${cruiserStatus}`
  submarine.innerText = `${submarineStatus}`
  destroyer.innerText = `${destroyerStatus}`
}

function computerCarrier() {
  for (let row = 0; row < 10; row++) {
    for (let column = 0; column < 10; column++) {
      const cellValue = game.computerPlayer.gameboard.board[row][column]
      if (cellValue instanceof Ship && cellValue.length === 5) {
        return 'Carrier'
      }
    }
  }
  return 'Carrier SUNK'
}

function computerBattleship() {
  for (let row = 0; row < 10; row++) {
    for (let column = 0; column < 10; column++) {
      const cellValue = game.computerPlayer.gameboard.board[row][column]
      if (cellValue instanceof Ship && cellValue.length === 4) {
        return 'Battleship'
      }
    }
  }
  return 'Battleship SUNK'
}

function computerCruiser() {
  for (let row = 0; row < 10; row++) {
    for (let column = 0; column < 10; column++) {
      const cellValue = game.computerPlayer.gameboard.board[row][column]
      if (cellValue instanceof Ship && cellValue.length === 3) {
        cellValue.id = 'Cruiser'
        return 'Cruiser'
      }
    }
  }
  return 'Cruiser SUNK'
}

function computerSubmarine() {
  for (let row = 0; row < 10; row++) {
    for (let column = 0; column < 10; column++) {
      const cellValue = game.computerPlayer.gameboard.board[row][column]
      if (
        cellValue instanceof Ship &&
        cellValue.length === 3 &&
        cellValue.id !== 'Cruiser'
      ) {
        cellValue.id = 'Submarine'
        return 'Submarine'
      }
    }
  }
  return 'Submarine SUNK'
}

function computerDestroyer() {
  for (let row = 0; row < 10; row++) {
    for (let column = 0; column < 10; column++) {
      const cellValue = game.computerPlayer.gameboard.board[row][column]
      if (cellValue instanceof Ship && cellValue.length === 2) {
        return 'Destroyer'
      }
    }
  }
  return 'Destroyer SUNK'
}

console.log(computerCarrier())

function handleAttack(event) {
  if (
    game.playerOne.gameboard.allShipsSunk() ||
    game.computerPlayer.gameboard.allShipsSunk()
  ) {
    return
  }

  const clickedCell = event.target
  const row = clickedCell.getAttribute('data-row')
  const col = clickedCell.getAttribute('data-col')

  if (
    game.computerPlayer.gameboard.board[row][col] === 'miss' ||
    game.computerPlayer.gameboard.board[row][col] === 'hit'
  ) {
    return
  }

  game.playerOne.attack(row, col, game.computerPlayer.gameboard)
  updateBoards()

  if (game.computerPlayer.gameboard.allShipsSunk()) {
    alert('GAME OVER!')
    return
  }

  game.computerPlayer.computerPlayerTurn(game.playerOne.gameboard)
  updateBoards()

  if (game.playerOne.gameboard.allShipsSunk()) {
    alert('GAME OVER!')
  }
}

const computerBoard = document.getElementById('computer-board')
computerBoard.addEventListener('click', handleAttack)

preGameSetup()
