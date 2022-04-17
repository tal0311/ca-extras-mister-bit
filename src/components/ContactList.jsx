import React, { Component } from 'react'
import ContactPreview from './ContactPreview'
import Filter from './Filter'
// CONTACT SERVICE
import { contactService } from '../service/contactService'
// ROUTER LINK

export default class ContactList extends Component {
  state = {
    contacts: null,
    currContact: null,
    filterBy: null,
  }

  componentDidMount() {
    this.loadContacts()
  }

  loadContacts = async () => {
    const { filterBy } = this.state
    try {
      const contacts = await contactService.getContacts(filterBy)
      this.setState({ contacts })
    } catch (error) {
      console.log('can not load contacts:', error)
    }
  }
  setCurrContact = async (contactId) => {
    if (!contactId) this.setState({ currContact: null })
    try {
      const currContact = await contactService.getContactById(contactId)
      this.setState({ currContact })
    } catch (error) {
      console.log('can not set curr contact:', error)
    }
  }
  onGoSearch = (filterBy) => {
    console.log('filter')
    console.log(filterBy)
    this.setState({ filterBy }, () => {
      console.log(this.state.filterBy)
      this.loadContacts()
    })
  }

  render() {
    const { contacts } = this.state

    return (
      <>
        <section className='contact-list container'>
          <Filter onGoSearch={this.onGoSearch} />
          {contacts &&
            contacts.map((contact) => (
              <ContactPreview
                key={contact._id}
                contact={contact}
                setCurrContact={this.setCurrContact}
              />
            ))}
        </section>
      </>
    )
  }
}
