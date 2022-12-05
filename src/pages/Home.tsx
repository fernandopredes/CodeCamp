import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Modal from '../components/ModalLogin'
import { Page } from './Home.style'
import api from '../api/index'


type CardProps = {
  id: Number
  username: String
  created_datetime: Date
  title: String
  content: String
}

const Home = () => {

  const [cards, setCards] = useState<CardProps[]>([])

  async function getCards() {
    const { data } = await  api.get(`/`)
    setCards(data.results)
    console.log(data)
    }

    useEffect(() => {
      getCards()

    }, [])


  return (
    <>
      <Modal />
        <Page>
          <div className='header'>
            <h1>CodeLeap Network </h1>
          </div>
          {cards.map((card)=> (
            <Card username={card.username} created_datetime={card.created_datetime} title={card.title} content={card.content} />
          ))}

      </Page>
    </>
  )
}

export default Home
