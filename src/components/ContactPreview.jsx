import React from 'react'
import { Link } from 'react-router-dom'

function ContactPreview({ contact, setCurrContact }) {
  const { name, email, phone, _id } = contact
  return (
    <>
      <section className='contact-preview flex'>
        <span className='contact-icon flex'>{name.substring(0, 1)}</span>
        <Link to={`/contact/${_id}`}>
          <div className='contact-info'>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{phone}</p>
          </div>
        </Link>
      </section>
    </>
  )
}

export default ContactPreview
