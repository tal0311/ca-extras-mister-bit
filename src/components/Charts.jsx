import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines'

export default class Charts extends Component {
  state = {
    priceX: null,
    priceY: null,
  }
  componentDidMount() {
    this.setMarketPrices()
  }

  setMarketPrices() {
    const { marketPrices } = this.props
    
    
    

    // this.setState({ priceY: [...priceY] })

    // const time = new Date(1637020800)
    // console.log(JSON.stringify(time).split('T')[0].split('-'))
  }

  render() {
    const { priceY } = this.state

    if (!priceY) return <div>Loading...</div>

    return (
      <div className='container'>
        <Sparklines data={[10,20,50,40]} width={100} height={20}>
          <SparklinesBars />
        </Sparklines>
      </div>
    )
  }
}
