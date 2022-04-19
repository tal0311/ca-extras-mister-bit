import React, { Component } from 'react'
//COMPONENTS
import {MoveList} from './../../components/MoveList'

// REDUX
import { connect } from 'react-redux'
import { loadUser } from '../../store/actions/userActions'

export class _HomePage extends Component {
  componentDidMount = () => {
    this.loadUser()
  }

  loadUser = async () => {
    try {
      await this.props.loadUser()
    } catch (error) {
      this.props.history.push('/signup')
      console.log(this.props)
    }
  }

  render() {
    const { user } = this.props
    if (!user) return <div>loading...</div>
    return (
      <>
        <div className='user-container flex'>
          <h1>Hallo {user.name}</h1>
          <h4>coins: {user.coins}</h4>
          <h4>$ {(user.coins / 0.00002502).toFixed(0)} </h4>
        
          <section className='movement-container'>{user.movements && <MoveList movements={user.movements} contactId={null} />}</section>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userModule.loggedInUser,
  }
}

const mapDispatchToProps = {
  loadUser,
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)
