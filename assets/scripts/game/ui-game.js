'use strict'
const store = require('./../store')

const getSuccess = function (data) {
  $('form').trigger('reset')
  $('#message').text('You have played ' + ' of games')
  $('#message').show().removeClass().addClass('success')
  console.log('getSuccess')
}
const getFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Game retrieval failed')
  $('#message').show().removeClass().addClass('failure')
  console.log('getFailure')
}

const newGameSuccess = function (data) {
  $('form').trigger('reset')
  $('#message').text('Starting new game')
  $('#message').show().removeClass().addClass('success')
  store.user = data.user
  console.log('newGameSuccess')
  $('.board').show()
  $('.hide').hide()
  $('#delete-game').show()
}
const newGameFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Could not start new game')
  $('#message').show().removeClass().addClass('failure')
  console.log('newGameFailure')
}

const showGameSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Here are your game results')
  $('#message').show().removeClass().addClass('success')
}

const showGameFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Failed to show your game results')
  $('#message').show().removeClass().addClass('failure')
}

const updateGameSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Updated game results')
  $('#message').show().removeClass().addClass('success')
}

const updateGameFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Failed to show your game results')
  $('#message').show().removeClass().addClass('failure')
}

const deleteGameSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Successful deleted game results')
  $('#message').show().removeClass().addClass('success')
}

const deleteGameFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Could not delete your game results')
  $('#message').show().removeClass().addClass('failure')
}

module.exports = {
  getSuccess: getSuccess,
  getFailure: getFailure,
  newGameSuccess: newGameSuccess,
  newGameFailure: newGameFailure,
  showGameSuccess: showGameSuccess,
  showGameFailure: showGameFailure,
  updateGameSuccess: updateGameSuccess,
  updateGameFailure: updateGameFailure,
  deleteGameSuccess: deleteGameSuccess,
  deleteGameFailure: deleteGameFailure
}