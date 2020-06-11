'use strict'
const api = require('./api-game')
const ui = require('./ui-game')
const getFormFields = require('../../../lib/get-form-fields.js')

let player = 'X'
let opponent = 'O'

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

  // $('.board').empty()
  // $('#result').empty()
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
  if (event.target.box === '') {
    console.log()
  }
}
module.exports = {
  onGetGame: onGetGame,
  onNewGame: onNewGame,
  onShowGame: onShowGame,
  onUpdateGame: onUpdateGame,
  onDeleteGame: onDeleteGame
}
