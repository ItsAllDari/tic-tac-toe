'use strict'
const config = require('./../config')
const store = require('./../store')

const newUser = function (formData) {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/sign-up/',
    method: 'POST',
    data: {
      credentials: {
        email: formData.credentials.email,
        password: formData.credentials.password,
        password_confirmation: formData.credentials.password_confirmation
      }
    }
  })
}

const userSignIn = function (data) {
  console.log(data)

  return $.ajax({
    url: config.apiUrl + '/sign-in/',
    method: 'POST',
    data: {
      credentials: {
        email: data.credentials.email,
        password: data.credentials.password
      }
    }
  })
}

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      passwords: {
        old: formData.passwords.oldpw,
        new: formData.passwords.newpw
      }
    }
  })
}

const userSignOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newUser: newUser,
  userSignIn: userSignIn,
  userSignOut: userSignOut,
  changePassword: changePassword
}
