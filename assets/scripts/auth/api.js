'use strict'
const config = require('./../config')

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
    data: {
      passwords: {
        old: formData.passwords.oldpw,
        new: formData.passwords.newpw
      }
    }
  })
}

const userSignOut = function (data) {
  console.log(data)

  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'DELETE',
    data: {
      credentials: {
        email: data.credentials.email,
        password: data.credentials.password
      }
    }
  })
}

module.exports = {
  newUser: newUser,
  userSignIn: userSignIn,
  userSignOut: userSignOut,
  changePassword: changePassword
}
