import React from 'react'
import { ModalEditStyle } from './ModalEdit.style'
type Props = {}

const ModalEdit = (props: Props) => {
  return (
    <ModalEditStyle id="modal">
      <div className='fade'></div>
      <div className='modal'>
        <h2>edit item</h2>
        <form action="">
          <div className='title'>
            <label htmlFor="">title</label>
            <input type="text" placeholder='Hello world'/>
          </div>
          <div className='content'>
            <label htmlFor="">content</label>
            <textarea placeholder='Content here' />
          </div>
          <div className='btn'>
            <button>save</button>
          </div>
        </form>
      </div>
    </ModalEditStyle>
  )
}

export default ModalEdit
