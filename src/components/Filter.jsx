import React, { Component } from 'react'

export default class Filter extends Component {
  state = {
    filterBy: {},
  }

  componentDidMount() {
    console.log(this.props)
  }
  handleChange = ({ target }) => {
    const value = target.value
    const key = target.name
    this.setState(
      (prevState) => ({
        filterBy: { ...prevState.filterBy, [key]: value },
      }),
      () => {
        console.log(this.state.filterBy)
      }
    )
  }

  render() {
    const { filterBy } = this.state
    const { onGoSearch } = this.props
    return (
      <>
        <section className='container filter flex'>
          <input
            onChange={this.handleChange}
            type='search'
            name='name'
            id='name'
            placeholder='Search user by name'
          />
          <button className='filter-go' onClick={() => onGoSearch(filterBy)}>
            Go!
          </button>
        </section>
      </>
    )
  }
}
