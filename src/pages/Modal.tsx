import React, { useState } from 'react'
import {ModalStyle} from './Modal.style'

const SignUp = () => {
  const [name, setName] = useState('')

  return (
    <ModalStyle>
     <div className="blank">
      <h1>Welcome to CodeLeap network!</h1>
      <h2>Please enter your username</h2>
        <div className='flex'>
        <input type="text" placeholder='John doe' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <button disabled={name === '' ? true : false}>enter</button>
        </div>
     </div>
    </ModalStyle>
  )
}

export default SignUp
