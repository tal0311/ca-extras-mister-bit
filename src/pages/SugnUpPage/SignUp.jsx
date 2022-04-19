import React, { Component } from 'react'
import { userService } from '../../service/userService'
export class SignUp extends Component {
  state = {
    user: null,
  }
  handleChange = ({ target }) => {
    const value = target.value
    const key = target.name
    this.setState((prevState) => ({
      user: { ...prevState.user, [key]: value },
    }))
  }

  setNewUser = () => {
    console.log('new user')
    console.log(this.state.user)
    userService.login(this.state.user)
    this.props.history.push('/')
  }

  render() {
    return (
      <>
        <section className='signup-container  flex'>
          <h2>Hallo user, please sign Up</h2>
          <div className='user-icon '>
            <i class='fa-solid fa-user'></i>
          </div>
          <input placeholder='Enter user name' onChange={this.handleChange} type='text' name='name' />
          <div className='action-container'>
            <button className='signup-btn' onClick={this.setNewUser}>
              Sign Up
            </button>
          </div>
        </section>
      </>
    )
  }
}
