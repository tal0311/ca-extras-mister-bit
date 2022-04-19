// USER SERVICE

export const userService = {
  getUser,
  login,
  addMove,
}
const KEY = 'loggedUser'
var gUser = null

function getUser() {
  const user = _loadFromLocalStorage(KEY)
  if (user) return user
  throw new Error('must log in')
}

function login(user) {
  gUser = _getEmptyUser(user)
  _saveToLocalStorage(KEY, gUser)
}

function _getEmptyUser({ name, coins = 100 }) {
  return {
    name,
    coins,
    movements: [],
  }
}

function addMove( amount, to) {
  gUser = getUser()
  
  const move = _createNewMove(to, amount)
  console.log('move:', move)
  gUser.movements = [...gUser.movements, move]
  _saveToLocalStorage(KEY, gUser)
}

function _createNewMove({ _id }, amount) {
  console.log('move')
  return {
    to: _id,
    amount,
    time: Date.now(),
  }
}


function _saveToLocalStorage(KEY, entity) {
  localStorage.setItem(KEY, JSON.stringify(entity))
}
function _loadFromLocalStorage(KEY) {
  return JSON.parse(localStorage.getItem(KEY))
}