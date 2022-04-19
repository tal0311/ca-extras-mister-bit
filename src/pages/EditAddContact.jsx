
import React, { Component } from 'react'
// SERVICE
import { contactService } from '../service/contactService'

export default class EditAddContact extends Component {
  state = {
    contact: {
      name: '',
      email: '',
      phone: '',
    },
  }

  componentDidMount = async () => {
    const id = this.props.match.params.id
    const contact = id
      ? await contactService.getContactById(id)
      : contactService.getEmptyContact()

    this.setState({ contact },()=>{

     console.log(this.state.contact)
    })
  }

  handleChange = ({ target }) => {
    const key = target.name
    const value = target.value === 'number' ? +target.value || '' : target.value
    this.setState((prevState) => ({
      contact: { ...prevState.contact, [key]: value },
    }))
  }

  saveContact = async (ev) => {
    ev.preventDefault()
    await contactService.saveContact(this.state.contact)
    this.props.history.push('/contact')
  }

  render() {
    const { contact } = this.state
    if (!contact) return <h2>Loading...</h2>
    return (
      <>
        <form className='contact-form flex'>
          {contact._id ? (
            <h2 className='contact-name'>{contact.name}</h2>
          ) : (
            <h2>Add contact</h2>
          )}
          <label htmlFor='name'>contact name: </label>
          <input
            onChange={this.handleChange}
            value={contact.name}
            type='text'
            id='name'
            name='name'
          />
          <label htmlFor='email'>Email: </label>
          <input
            onChange={this.handleChange}
            value={contact.email}
            type='text'
            id='email'
            name='email'
          />
          <label htmlFor='name'>Phone:</label>

          <input
            onChange={this.handleChange}
            value={contact.phone}
            type='number'
            id='name'
            name='phone'
          />
          <button onClick={this.saveContact}>
            {contact._id ? 'Edit' : 'Add'}
          </button>
        </form>
      </>
    )
  }
}
