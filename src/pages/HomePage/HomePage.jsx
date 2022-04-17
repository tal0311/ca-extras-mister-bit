import React, { Component } from 'react'
// service
import { userService } from './../../service/userService'

export default class HomePage extends Component {
  state = {
    user: null,
  }

  componentDidMount() {
    this.loadUser()
  }

  loadUser = async () => {
    const user = await userService.getUser()
    this.setState({ user })
  }

  render() {
    const { user } = this.state
    if(!user) return <div>loading...</div>
    return (
      <>
        <div className='user-container flex'>
          <h1>Hallo {user.name}</h1>
          <h4>coins: {user.coins}</h4>
          <h4>$ {(user.coins / 0.00002502).toFixed(3)} </h4>
        </div>
      </>
    )
  }
}
