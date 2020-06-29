const config = require('./../config')
const store = require('./../store')

const newGame = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const getGame = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const showGame = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateGame = function (index, value, over) {
  const board = $('.box')
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'index': store.game.cells[index],
        'value': board[index].innerHTML
      },
      'over': false
    }
  })
}

const deleteGame = function (data) {
  return $.ajax({
    url: config.apiurl + '/games/:id',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame: newGame,
  getGame: getGame,
  showGame: showGame,
  updateGame: updateGame,
  deleteGame: deleteGame
}
