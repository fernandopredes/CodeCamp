import React from 'react'
import {ModalStyle} from '../components/Modal.style'

const Modal = () => {
  return (
    <ModalStyle>
     <div className="blank">
      <h1>Welcome to CodeLeap network!</h1>
      <h2>Please enter your username</h2>
        <div className='flex'>
        <input type="text" />
        <button className='btn'>enter</button>
        </div>
     </div>
    </ModalStyle>
  )
}

export default Modal
