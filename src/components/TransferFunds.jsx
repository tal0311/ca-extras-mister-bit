import React from 'react'

function TransferFunds({ contact, handleChange, onTransfer }) {
  return (
    <>
      <section className='transfer-funds flex'>
        <h4>Transfer to: {contact.name}</h4>
        <label htmlFor='amount'>
          coins:
          <input onChange={handleChange} type='number' name='amount' />
        </label>
        <div className='actions-container'>
          <button onClick={() => onTransfer()}>Transfer</button>
        </div>
      </section>
    </>
  )
}

export default TransferFunds
