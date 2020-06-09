'use strict'
const store = require('./../store')

const newSuccess = function (data) {
  $('form').trigger('reset')
  $('#message').text('Sign up was successful!')
  $('#message').show().removeClass().addClass('success')
  console.log('newSuccess')
}
const newFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign up failed!')
  $('#message').show().removeClass().addClass('failure')
  console.log('newFailure')
}

const signInSuccess = function (data) {
  $('form').trigger('reset')
  $('#message').text("You've signed in! Click new game to begin.")
  $('#message').show().removeClass().addClass('success')
  store.user = data.user
  $('#new-game').show()
  $('.hide').show()
  $('.show').hide()
  $('.box').show()
}
const signInFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign in failed')
  $('#message').show().removeClass().addClass('failed')
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  $('#message').text("You've signed out! Sign in to play again.")
  $('#message').show().removeClass().addClass('success')
  console.log('Sign Out Successful!')
  store.user = null
  $('#new-game').hide()
  $('.hide').hide()
  $('.show').show()
  $('.box').hide()
}
const signOutFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign out failed')
  $('#message').show().removeClass().addClass('failed')
}

const changePasswordSuccess = function (data) {
  $('form').trigger('reset')
  $('#message').text('Password has been updated')
  $('#message').show().removeClass().addClass('success')
  console.log('Password has been updated')
  // store.user = data.user
}

const changePasswordFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Password change failed')
  $('#message').show().removeClass().addClass('failed')
}

module.exports = {
  newSuccess: newSuccess,
  newFailure: newFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure
}
