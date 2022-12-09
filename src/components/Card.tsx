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
}

const Card = ({deletePost, id, username, created_datetime, title, content}: CardProps) => {

  const user = useSelector((store: RootStore)=> store.userReduce)



  return (
    <CardBox>
      <div className='menu'>
          <h3>{title}</h3>
          <div>
          {username === user.name ?
          <>
            <button><img src={deletar} alt="delete button" onClick={()=>deletePost(id)}/></button>
            <button><img src={editar} alt="edit button" /></button>
          </>
          :
          null}
          </div>
        </div>
      <div className="content">
        <div className="data">
          <p>@{username}</p>
          <p>{created_datetime.toString()}</p>
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
