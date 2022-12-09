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
}

const Card = ({id, username, created_datetime, title, content}: CardProps) => {

  const user = useSelector((store: RootStore)=> store.userReduce)

    function deletePost() {
      api.delete(`/${id}/`)

    }

  return (
    <CardBox>
      <div className='menu'>
          <h3>{title}</h3>
          <div>
          {username === user.name ?
          <>
            <button><img src={deletar} alt="botão de deletar" onClick={deletePost}/></button>
            <img src={editar} alt="botão de editar" />
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
