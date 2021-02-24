import React from 'react'
import styled from 'styled-components/'
import { FlexCenterContainer } from '@/GlobalStyles'
import { Dispatch } from 'redux'
import { calculatorActions, initialDisplayValue } from '@/store/state.calculator'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from '@/store/index'

export const FunctionSection: React.FC = React.memo(() => {
  const dispatch: Dispatch = useDispatch()
  const { reset, setDisplayValue } = calculatorActions
  const displayValue = useSelector(
    (state: RootState) => state.calculator.displayValue,
    shallowEqual
  )

  const handleReset = () => {
    dispatch(reset())
  }

  const handleToggleSign = () => {
    const newDisplayValue = (parseFloat(displayValue) * -1).toString()
    dispatch(setDisplayValue(newDisplayValue))
  }

  const handlePercent = () => {
    if (displayValue === initialDisplayValue) {
      return
    }

    const fixedDigits = displayValue.replace(/^-?\d*\.?/, '')
    const newValue = parseFloat(displayValue) / 100
    const newDisplayValue = String(newValue.toFixed(fixedDigits.length + 2))
    dispatch(setDisplayValue(newDisplayValue))
  }

  return (
    <FunctionSectionContainer>
      <FlexCenterContainer>
        <Button onClick={handleReset}>AC</Button>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <Button onClick={handleToggleSign}>+/-</Button>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <Button onClick={handlePercent}>%</Button>
      </FlexCenterContainer>
    </FunctionSectionContainer>

  )
})

const FunctionSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 33.33%;
    padding: 10px;

    > button {
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.gray};
      font-size: 24px;
    }
  }
`

const Button = styled.button`
  border-radius: 50%;
  border: none;
  width: 80px;
  height: 80px;

  &.x2 {
    width: 80%;
    border-radius: 40px;
  }
`