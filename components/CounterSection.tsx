import React from 'react'
import { CounterDownForm } from '@/components/CounterDownForm'
import { CounterDownTimer } from '@/components/CounterDownTimer'
import styled from 'styled-components/'

export const CounterSection: React.FC = React.memo(() => {
  return (
    <CounterSectionContainer>
      <h1>抽獎時間</h1>
      <CounterDownForm />
      <CounterDownTimer />
    </CounterSectionContainer>
  )
})

const CounterSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`
