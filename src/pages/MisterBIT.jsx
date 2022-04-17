import React, { Component } from 'react'
// COMPONENTS
import ContactPage from './ContactPage/ContactPage'
import Charts from '../components/Charts'

import AppNav from './../components/AppNav'

import { bitcoinService } from '../service/bitcoinService'

export default class MisterBIT extends Component {
  state = {
    marketPrices: null,
  }

  componentDidMount() {
    this.getMarketPrice()
  }

  getBitRate = async (coins) => {
    console.log(coins)
    try {
      const rate = await bitcoinService.getRate(coins)
      return rate
    } catch (error) {
      console.log('can not get rate:', error)
    }
  }
  getMarketPrice = async () => {
    try {
      console.log('getting prises')
      const marketPrices = await bitcoinService.getMarketPrice()
      this.setState({ marketPrices: [...marketPrices] })
    } catch (error) {}
  }

  render() {
    const { user, marketPrices } = this.state
    // const { page } = this.props

    return <div>bit</div>
  }
}
