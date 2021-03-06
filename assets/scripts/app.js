'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events-game')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('.hide').hide()
  $('#sign-out').hide()
  $('#new-game').hide()
  $('.box').hide()
  $('#new-game').on('submit', gameEvents.onNewGame)
  $('.box').on('click', gameEvents.onClick)
  $('#get-game').hide()
  $('#get-game').on('submit', gameEvents.onGetGame)
})
