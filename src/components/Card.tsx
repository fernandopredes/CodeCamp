import React from 'react'
import { CardBox } from './Card.style'
import deletar from '../assets/lata.svg'
import editar from '../assets/editar.svg'
import { useSelector } from 'react-redux'
import { RootStore } from '../redux/store'
import api from '../actions/api'

type CardProps = {
  id: Number
  username: String
  created_datetime: Date
  title: String
  content: String
  deletePost: Function
  children: React.ReactNode
}

const Card = ({deletePost, id, username, created_datetime, title, content, children}: CardProps) => {

  const user = useSelector((store: RootStore)=> store.userReduce)

  const alertDelete = (id:Number) => {
    let alert = window.confirm("Are you sure you want to delete this item?");
    if (alert) {
       deletePost(id)
    }
  }

  const hideOrShowEdit = () => {
    const modal = document.querySelector('.modalEdit')
    const fade = document.querySelector('.fadeEdit')
    modal!.classList.remove('hide')
    fade!.classList.remove('hide')
  }


  const DAY_MILLISECONDS = 1000 * 60 * 60 * 24;

  function getRelativeTime(timestamp: any) {
    const rtf = new Intl.RelativeTimeFormat('en', {
      numeric: 'auto',
    });
    const daysDifference = Math.round(
      (timestamp - new Date().getTime()) / DAY_MILLISECONDS,
    );

    return rtf.format(daysDifference, 'day');
  }



  return (

    <CardBox>
      {children}
      <div className='menu'>
          <h3>{title}</h3>
          <div>
          {username === user.name ?
          <>
            <button className='delete'><img  src={deletar} alt="delete button" onClick={()=>alertDelete(id)}/></button>
            <button className='edit'><img  src={editar} alt="edit button" onClick={()=>hideOrShowEdit()} /></button>
          </>
          :
          null}
          </div>
        </div>
      <div className="content">
        <div className="data">
          <p>@{username}</p>
          <p>{getRelativeTime(new Date(created_datetime).getTime())}</p>
        </div>
        <div className="text">
          <p>
          {content}
          </p>
        </div>
      </div>
    </CardBox>
  )
}

export default Card
