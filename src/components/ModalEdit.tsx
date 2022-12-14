import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { ModalEditStyle } from './ModalEdit.style'


type ModalEditProps = {
  
  title: string
  content: string
  oldTitle: string
  oldContent: string
  id: Number
  updateInfos: any
}

const ModalEdit = ({id, updateInfos, oldTitle, oldContent}: ModalEditProps) => {

  const [title, setTitle] = useState(oldTitle)
  const [content, setContent] = useState(oldContent)
  const { register, handleSubmit, formState: { errors } } = useForm<ModalEditProps>();

  const closeModal= (event: React.MouseEvent): void => {
    const modal = document.querySelector('.modalEdit')
    const fade = document.querySelector('.fadeEdit')
    modal!.classList.add("hide")
    fade!.classList.add("hide")
  }



  const onEdit: SubmitHandler<ModalEditProps> = (data) => {

      const modal = document.querySelector('.modalEdit')
      const fade = document.querySelector('.fadeEdit')
      modal!.classList.add("hide")
      fade!.classList.add("hide")
      updateInfos(data,id)

    }



  return (
    <ModalEditStyle id="modal" >
      <div className='fadeEdit hide' onClick={(e)=> {closeModal(e)}}></div>
      <div className='modalEdit hide'>
        <h2>edit item </h2>
        <form onSubmit={handleSubmit(onEdit)}>
          <div className='title'>
            <label htmlFor="">title</label>
            <input {
              ...register('title', { required: true })}
              placeholder="Hello World"
              value={title}
              onChange={(e)=>{setTitle(e.target.value)}}
              />
          </div>
          <div className='content'>
            <label htmlFor="">content</label>
            <textarea {...register('content', { required: true })}
            placeholder="Content here"
            value={content}
            onChange={(e)=>{setContent(e.target.value)}}
            />
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
