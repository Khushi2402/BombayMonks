import React from 'react'

const GalCard = (props) => {
  return (
    <div>
      <img className='w-full h-full object-cover rounded-xl' src={props.bg} alt='/' />
    </div>
  )
}

export default GalCard
