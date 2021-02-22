import React, { useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components/'
import { Container } from '@/GlobalStyles'
import { Modal } from '@/components/Modal'
import Panel from '@/components/Panel'

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
        <MainContainer>
          qqq
          <button onClick={() => setIsModalShow(true)}>ss</button>
          <Modal {...modalConfig}>
          </Modal>
        </MainContainer>
      </>
    )
  }
)

const MainContainer = styled(Container)`
  @media (min-width: 1140px) {
    display: flex;

    > div {
      width: 50%;
    }
  }
`

export default Home
