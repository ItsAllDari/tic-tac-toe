'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

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

  api.newGame(data)
    .then(ui.newSuccess)
    .catch(ui.newFailure)
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

module.exports = {
  onGetGame: onGetGame,
  onNewGame: onNewGame,
  onShowGame: onShowGame,
  onUpdateGame: onUpdateGame,
  onDeleteGame: onDeleteGame
}
