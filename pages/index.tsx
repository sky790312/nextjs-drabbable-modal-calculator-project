import React, { useState, useContext } from 'react'
import Head from 'next/head'
import { Container } from '@/GlobalStyles'
import { Modal } from '@/components/uiComponents/Modal'
import { CalculateSection } from '@/components/home/CalculateSection'
import { AppContext } from '@/components/appCommon/AppContext'

export const Home = React.memo(
  (): JSX.Element => {
    const context = useContext(AppContext)
    const { deviceInfo } = context
    const [isModalShow, setIsModalShow] = useState<boolean>(false)
    const modalConfig = {
      isShow: isModalShow,
      closeModal: () => {
        setIsModalShow(false)
      },
      view: deviceInfo,
    }

    return (
      <>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Container>
          <button onClick={() => setIsModalShow(true)}>open</button>
          <Modal {...modalConfig}>
            <CalculateSection />
          </Modal>
        </Container>
      </>
    )
  },
)

export default Home
