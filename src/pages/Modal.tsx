import React, { FormEvent, useState } from 'react'
import {ModalStyle} from './Modal.style'
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/modules/user';

const SignUp = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  function login(event: FormEvent) {
    event.preventDefault()
    dispatch(setUser({
      name
    }))
  }

  return (
    <ModalStyle>
     <div className="blank">
      <h1>Welcome to CodeLeap network!</h1>
      <h2>Please enter your username</h2>
        <div className='flex'>
        <form onSubmit={login}>
        <input type="text" placeholder='John doe' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <button disabled={name === '' ? true : false}>enter</button>
        </form>
        </div>
     </div>
    </ModalStyle>
  )
}

export default SignUp
