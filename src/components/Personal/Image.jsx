import React from 'react'
import avatar1 from '../../assets/avatar1.png'

const Image = () => {
  return (
      <div className="avatar">
        <div className="w-96 h-full rounded drop-shadow-2xl">
          <img src={avatar1} className='drop-shadow-2xl' />
        </div>
      </div>
  )
}

export default Image