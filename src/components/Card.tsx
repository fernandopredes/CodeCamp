import React from 'react'
import { CardBox } from './Card.style'
import deletar from '../assets/lata.svg'
import editar from '../assets/editar.svg'

type CardProps = {

}

const Card = (props: CardProps) => {
  return (
    <CardBox>
      <div className='menu'>
          <h3>My First Post at CodeLeap Network!</h3>
          <div>
            <img src={deletar} alt="botão de deletar" />
            <img src={editar} alt="botão de editar" />
          </div>
        </div>
      <div className="content">
        <div className="data">
          <p>@Victor</p>
          <p>25 minutes ago</p>
        </div>
        <div className="text">
          <p>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.
          Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
          </p>
        </div>
      </div>
    </CardBox>
  )
}

export default Card
