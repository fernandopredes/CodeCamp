import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Modal from '../components/ModalLogin'
import { Page } from './Home.style'
import api from '../api/index'



type CardProps = {
  id: Number
  username: String
  created_datetime: String
  title: String
  content: String
}

const Home = () => {

  const [cards, setCards] = useState<CardProps[]>([])
  const [show, setShow] = useState(10)
  const [total, setTotal] = useState(0)

  async function getCards() {
    const { data } = await  api.get(`/?limit=${show}&offset=0`)
    setCards(data.results)
    setTotal(data.results.length)
    }

    useEffect(() => {
      getCards()

    }, [show])

    function showMore() {

      setShow(show+10)

    }


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
          <button onClick={showMore} disabled={total !== show ? true : false}>show more</button>
      </Page>
    </>
  )
}

export default Home
