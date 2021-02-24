import React, { useState } from 'react'
import Head from 'next/head'
import { Container } from '@/GlobalStyles'
import { Modal } from '@/components/Modal'
import { CalculateSection } from '@/components/CalculateSection'

export const Home = React.memo(
  (): JSX.Element => {
    const [isModalShow, setIsModalShow] = useState<Boolean>(false);
    const modalConfig = {
      isShow: isModalShow,
      closeModal: () => {
        setIsModalShow(false);
      }
    };

    return (
      <>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
          <button onClick={() => setIsModalShow(true)}>open</button>
          <Modal {...modalConfig}>
            <CalculateSection />
          </Modal>
        </Container>
      </>
    )
  }
)

export default Home
