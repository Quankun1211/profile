import React from 'react'
import Modal from './Modal'

const Item = ({data, index}) => {
  console.log(data);
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className='config-img xl:flex md:hidden'><img className='config-width xl:block sm:hidden' src={data.image} alt="Movie"/></figure>
      <div className="card-body">
        <h2 onClick={() => document.getElementById(`modal-${index}`).showModal()} className="card-title cursor-pointer text-ellipsis h-7 truncate ">{data.name ? data.name : 'In process...'}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Source</button>
          <a href={data.preview ? data.preview : '/'} className="btn btn-primary">Preview</a>
        </div>
      </div>
      <Modal data={data} index={index}/>
    </div>

    
  )
}

export default Item