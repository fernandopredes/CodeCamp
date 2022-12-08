import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Modal from '../components/ModalLogin'
import { Page } from './Home.style'
import api from '../actions/api/index'
import Post from '../components/Post'




type CardProps = {
  id: Number
  username: String
  created_datetime: Date
  title: String
  content: String
}

const Home = () => {

  const [cards, setCards] = useState<CardProps[]>([])
  const [show, setShow] = useState(10)
  const [offSet, setOffSet] = useState(0)
  const [total, setTotal] = useState(0)
  const [totalShow, setTotalShow] = useState(10)

  async function getCards() {
    const { data } = await  api.get(`/?limit=${show}&offset=${offSet}`)
    setCards(data.results)
    setTotal(data.count)
    console.log(data)
    }

    useEffect(() => {
      getCards()
    }, [show, offSet])

    function next() {

      setOffSet(offSet+10)
      setTotalShow(totalShow+10)
      document.documentElement.scrollTop = 0
    }

    function previous() {

      setOffSet(offSet-10)
      document.documentElement.scrollTop = 0

    }


  return (
    <>
      <Modal />
        <Page>

          <div className='header'>
            <h1>CodeLeap Network </h1>
          </div>

          <Post username={''} title={''} content={''}  />

          {cards.map((card, i)=> (
            <Card
              key={i}
              id={card.id}
              username={card.username}
              created_datetime={card.created_datetime}
              title={card.title}
              content={card.content}
            />
          ))}

          <div className='btns'>
            <button onClick={previous} disabled={offSet <= 0 ? true : false}>previous</button>
            <button onClick={next} disabled={totalShow >= total ? true : false}>next</button>
          </div>

      </Page>
    </>
  )
}

export default Home
