import React, { Component } from 'react'
import './assets/scss/global.scss'
// COMPONENTS
import {HomePage} from './pages/HomePage/HomePage'
import AppNav from './components/AppNav'
import {ContactDetails} from './pages/ContactDetailsPage/ContactDetails'
import EditAddContact from './pages/EditAddContact'
import { SignUp } from './pages/SugnUpPage/SignUp'
// ROUTER
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import  {ContactList} from './components/ContactList'

export default class App extends Component {
  render() {
    return (
      <Router>
        <AppNav />

        <section className='container'>
          <Switch>
            <Route path='/signup' component={SignUp}/>
            <Route path='/contact/edit/:id?' component={EditAddContact} />
            <Route path='/contact/:id' component={ContactDetails} />
            <Route path='/contact' component={ContactList} />
            <Route path='/' component={HomePage} />
          </Switch>
        </section>
      </Router>
    )
  }
}
