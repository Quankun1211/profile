import React from 'react'
import avatar from '../../assets/avatar.png'

const Image = () => {
  return (
      <div className="avatar">
        <div className="w-96 h-full rounded drop-shadow-2xl">
          <img src={avatar} className='drop-shadow-2xl' />
        </div>
      </div>
  )
}

export default Image