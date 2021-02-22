import React from 'react'
import { showYYMMSS } from '@/utils'
import styled from 'styled-components/'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from '@/store/index'

export const CounterDownTimer: React.FC = () => {
  const timer = useSelector(
    (state: RootState) => state.counter.timer,
    shallowEqual
  )

  return <StyledCountDownTimer>{showYYMMSS(timer)}</StyledCountDownTimer>
}

const StyledCountDownTimer = styled.div`
  margin: 100px 0;
  font-size: 6rem;
  color: ${({ theme }) => theme.colors.blue};
`
