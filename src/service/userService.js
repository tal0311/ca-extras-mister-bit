// USER SERVICE

export const userService = {
  getUser,
}

var gUser = {
  name: 'Ochoa Hyde',
  coins: 100,
  moves: [],
}

function getUser() {
  return gUser
}
