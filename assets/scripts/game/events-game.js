'use strict'
const api = require('./api-game')
const ui = require('./ui-game')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('./../store')

let currentPlayer = '✕'

const onGetGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.getGame(data)
    .then(ui.getSuccess)
    .catch(ui.getFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  console.log(event)

  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onShowGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.showGame(data)
    .then(ui.showSuccess)
    .catch(ui.showFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.updateGame(data)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

const onDeleteGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.deleteGame(data)
    .then(ui.deleteSuccess)
    .catch(ui.deleteFailure)
}

const onClick = function (event) {
  const board = $('.box')
  const index = event.target.dataset.index
  store.game.cells[index] = currentPlayer
  const box = $(event.target)
  if (box.text()) {
    $('#message').text('Space is taken')
  } else {
    box.css('background', 'transparent').text(currentPlayer)
    currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
  }
  checkWinner(board)
}

const checkWinner = function (board) {
  if (board[0].innerHTML === board[1].innerHTML && board[1].innerHTML === board[2].innerHTML) {
    console.log('Winner is ', board[0].innerHTML)
    $('#message').text('Game Over! Winner is: ' + board[0].innerHTML)
    store.game.over = true
  }
  if (board[0].innerHTML === board[3].innerHTML && board[3].innerHTML === board[6].innerHTML) {
    console.log('Winner is ', board[0].innerHTML)
    store.game.over = true
  }
}

module.exports = {
  onGetGame: onGetGame,
  onNewGame: onNewGame,
  onShowGame: onShowGame,
  onUpdateGame: onUpdateGame,
  onDeleteGame: onDeleteGame,
  onClick: onClick
}
