import React, { FormEvent } from 'react'
import { ModalEditStyle } from './ModalEdit.style'
type Props = {}

const ModalEdit = (props: Props) => {

  const closeModal= (event: React.MouseEvent): void => {
    const modal = document.querySelector('.modalEdit')
    const fade = document.querySelector('.fadeEdit')
    modal!.classList.add("hide")
    fade!.classList.add("hide")
  }

  const update = (event: FormEvent)=>{
    event.preventDefault()
    const modal = document.querySelector('.modalEdit')
    const fade = document.querySelector('.fadeEdit')
    modal!.classList.add("hide")
    fade!.classList.add("hide")
  }

  return (
    <ModalEditStyle id="modal" >
      <div className='fadeEdit hide' onClick={(e)=> {closeModal(e)}}></div>
      <div className='modalEdit hide'>
        <h2>edit item</h2>
        <form onSubmit={update}>
          <div className='title'>
            <label htmlFor="">title</label>
            <input type="text" placeholder='Hello world'/>
          </div>
          <div className='content'>
            <label htmlFor="">content</label>
            <textarea placeholder='Content here' />
          </div>
          <div className='btn'>
            <button type='submit'>save</button>
          </div>
        </form>
      </div>
    </ModalEditStyle>
  )
}

export default ModalEdit
