import React from 'react'
import Card from '../components/Card'
import Modal from '../components/ModalLogin'
import { Page } from './Home.style'


type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Modal />
        <Page>
          <div className='header'>
            <h1>CodeLeap Network </h1>
          </div>
        <Card/>
      </Page>
    </>
  )
}

export default Home
