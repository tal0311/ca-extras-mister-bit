import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// SERVICE
import { contactService } from '../../service/contactService'
// COMPONENTS
import TransferFunds from '../../components/TransferFunds'
import { MoveList } from '../../components/MoveList'

// REDUX
import { connect } from 'react-redux'
import { spendBalance } from './../../store/actions/userActions'

class _ContactDetails extends Component {
  state = {
    contact: null,
    isTransfer: false,
    amount: 0,
  }

  componentDidMount() {
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
  toggleTransfer = () => {
    let { isTransfer } = this.state
    isTransfer = !isTransfer
    this.setState({ isTransfer })
  }
  handleChange = ({ target }) => {
    const amount = target.value
    this.setState({ amount })
  }
  onTransfer = async () => {
    const { amount, contact } = this.state
    console.log(this.props)
    try {
      await this.props.spendBalance(amount, contact)
      this.loadContact()
      this.toggleTransfer()
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    const { contact, isTransfer } = this.state
    const { user } = this.props
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

                <button onClick={this.toggleTransfer}>
                  <i className='fa-solid fa-hand-holding-dollar'></i>
                </button>
              </div>
            </div>
          </section>
          {isTransfer && (
            <div className='founds-container'>
              <TransferFunds
                contact={contact}
                handleChange={this.handleChange}
                onTransfer={this.onTransfer}
              />
            </div>
          )}
          <section className='movement-container'>
            {user.movements && (
              <MoveList movements={user.movements} contactId={contact._id} />
            )}
          </section>
        </section>
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
  spendBalance,
}

export const ContactDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ContactDetails)
