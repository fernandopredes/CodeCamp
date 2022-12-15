import React, { FormEvent, useState } from 'react'
import {ModalStyle} from './ModalLogin.style'
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
    const modal = document.getElementById('hide')
    const scroll = document.body

    modal!.style.display = "none"
    scroll.style.overflowY="visible"

  }


  return (
    <ModalStyle id='hide' >
     <div className="blank"   >
      <h1>Welcome to CodeLeap network!</h1>
      <h2>Please enter your username</h2>
        <div className='flex'>
        <form onSubmit={login}>
        <div className='flex'>
          <input type="text" placeholder='John doe' value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <button disabled={name === '' ? true : false}>enter</button>
        </div>
        </form>
        </div>
     </div>

    </ModalStyle>
  )
}

export default SignUp
