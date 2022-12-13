import React, { FormEvent, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import api from '../actions/api';
import { ModalEditStyle } from './ModalEdit.style'


type ModalEditProps = {
  title: string
  content: string
  id: Number
}

const ModalEdit = ({id}: ModalEditProps) => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ModalEditProps>();

  const closeModal= (event: React.MouseEvent): void => {
    const modal = document.querySelector('.modalEdit')
    const fade = document.querySelector('.fadeEdit')
    modal!.classList.add("hide")
    fade!.classList.add("hide")
  }

  const update = (event: FormEvent) => {
    event.preventDefault()

  }

  const onSubmit: SubmitHandler<ModalEditProps> = (data) => {
    const modal = document.querySelector('.modalEdit')
    const fade = document.querySelector('.fadeEdit')
    modal!.classList.add("hide")
    fade!.classList.add("hide")

    const updateInfos = () => {
        api.patch(`/${id}/`, {
        title: data.title,
        content: data.content
        }
       )
    }
      updateInfos()
    }


  return (
    <ModalEditStyle id="modal" >
      <div className='fadeEdit hide' onClick={(e)=> {closeModal(e)}}></div>
      <div className='modalEdit hide'>
        <h2>edit item </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
