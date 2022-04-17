import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// SERVICE
import { contactService } from '../../service/contactService'

export default class ContactDetails extends Component {
  state = {
    contact: null,
  }

  componentDidMount() {
    console.log(this.props, this.props)
    this.loadContact()
  }
  loadContact = async () => {
    const contactId = this.props.match.params.id
    const contact = await contactService.getContactById(contactId)

    this.setState({ contact }, () => {
      console.log(this.state.contact)
    })
  }
  onRemove = async (_id) => {
    console.log(_id)
    await contactService.deleteContact(_id)
    this.props.history.push('/contact')
  }
  back = () => {
    this.props.history.push('/contact')
  }
  render() {
    const { contact } = this.state
    if (!contact) return <div>Loading...</div>
    const { _id, name, email, phone } = contact

    return (
      <>
        <section className='contact-details container flex'>
          <section className='contact flex'>
            <div>
              <span className='contact-icon'>{name.substring(0, 1)}</span>
            </div>
            <div className='contact-info '>
              <h2>{name}</h2>
              <h4>Email: {email}</h4>
              <h4>Phone: {phone}</h4>
              <div className='actions-container'>
                <Link to={`/contact/edit/${_id}`}>
                  <button>
                    <i className='fa-solid fa-pen-to-square'></i>
                  </button>
                </Link>

                <button onClick={() => this.onRemove(_id)}>
                  <i className='fa-solid fa-trash-can'></i>
                </button>
                <button onClick={this.back} className='close-btn'>
                  <i className='fa-solid fa-rotate-left'></i>
                </button>
              </div>
            </div>
          </section>
        </section>
      </>
    )
  }
}
