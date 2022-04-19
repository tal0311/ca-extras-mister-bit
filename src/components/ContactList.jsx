import React, { Component } from 'react'
import ContactPreview from './ContactPreview'
import Filter from './Filter'
// CONTACT SERVICE
import { contactService } from '../service/contactService'
// REDUX
import { connect } from 'react-redux'
import { loadContacts, setFilterBy } from './../store/actions/contactActions'

class _ContactList extends Component {
  state = {
    currContact: null,
  }

  componentDidMount() {
    this.props.loadContacts()
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
  onGoSearch = async (filterBy) => {
    console.log('filter')
    await this.props.setFilterBy(filterBy)
    this.props.loadContacts()
  }

  render() {
    const { contacts } = this.props

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

const mapStateToProps = (state) => {
  return {
    contacts: state.contactModule.contacts,
  }
}

const mapDispatchToProps = {
  loadContacts,
  setFilterBy,
}

export const ContactList = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ContactList)
