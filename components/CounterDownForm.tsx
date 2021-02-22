import React, { useState } from 'react'
import { useInterval } from '@/hooks/useInterval'
import { DELAY_TIME } from '@/constants'
import { isNumberString } from '@/utils'
import styled from 'styled-components/'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { counterActions } from '@/store/state.counter'
import { RootState } from '@/store/index'

export const CounterDownForm: React.FC = React.memo(() => {
  const dispatch: Dispatch = useDispatch()
  const { setTimer } = counterActions
  const [timerInputValue, setTimerInputValue] = useState<string>('')
  const timer = useSelector(
    (state: RootState) => state.counter.timer,
    shallowEqual
  )

  useInterval(() => {
    if (!timer) {
      return
    }

    dispatch(setTimer(timer - 1))
  }, DELAY_TIME)

  const onTimerInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    if (value === '' || isNumberString(value)) {
      setTimerInputValue(value)
    }
  }

  const handleTimer = () => {
    if (!timerInputValue) {
      return
    }

    dispatch(setTimer(parseInt(timerInputValue, 10)))
    setTimerInputValue('')
  }

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleTimer()
      }}
    >
      <StyledInput
        type="text"
        placeholder="請輸入倒數時間(數字)"
        value={timerInputValue}
        onChange={onTimerInputChange}
      />
      分鐘
      <StyledButton onClick={handleTimer}>設定</StyledButton>
    </form>
  )
})

const StyledInput = styled.input`
  padding: 12px 40px;
`

const StyledButton = styled.button`
  padding: 12px 40px;
  margin-left: 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray};
`
