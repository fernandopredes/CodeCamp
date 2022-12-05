import React from 'react'
import { CardBox } from './Card.style'
import deletar from '../assets/lata.svg'
import editar from '../assets/editar.svg'

type CardProps = {
  id: Number
  username: String
  created_datetime: Date
  title: String
  content: String
}

const Card = ({id, username, created_datetime, title, content}: CardProps) => {
  return (
    <CardBox>
      <div className='menu'>
          <h3>{title}</h3>
          <div>
            <img src={deletar} alt="botão de deletar" />
            <img src={editar} alt="botão de editar" />
          </div>
        </div>
      <div className="content">
        <div className="data">
          <p>@{username}</p>
          <p>{created_datetime} minutes ago</p>
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
