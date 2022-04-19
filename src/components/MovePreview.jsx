import React from 'react'

export const MovePreview = ({ move, isHomePage }) => {
  const { amount, time } = move

  const timeForDisplay = new Date(time)
  console.log('timeForDisplay:', timeForDisplay.getDay())
  const day = timeForDisplay.getDay() + 1
  const month = timeForDisplay.getUTCDate()
  const year = timeForDisplay.getFullYear()

  return (
    <>
      <section className='move-preview'>
        <p>Amount: {amount}</p>
        <p>
          Transferred at: {day}/{month}/{year}
        </p>
      </section>
    </>
  )
}
