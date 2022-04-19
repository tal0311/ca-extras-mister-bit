import React from 'react'
import { MovePreview } from './MovePreview'

export const MoveList = ({ movements, contactId }) => {
  if (!contactId) {
    movements= movements.splice(0,3)
    return (
      <>
        <section className='movement-list'>
          <h2>
            
            {movements.length > 0
              ? 'Movement list'
              : 'No movements for display'}
          </h2>
          {movements.length > 0 &&
            movements.map((move, idx) => <MovePreview move={move} key={idx} isHomePage={true} />)}
        </section>
      </>
    )
  }

  return (
    <>
      <section className='movement-list'>
        <h2>
          {movements.length &&
          movements.filter((move) => move.to === contactId).length > 0
            ? 'Movement list'
            : 'No movements for display'}
        </h2>
        {movements.length > 0 &&
          movements.map(
            (move, idx) =>
              move.to === contactId && <MovePreview move={move} key={idx} />
          )}
      </section>
    </>
  )
}
