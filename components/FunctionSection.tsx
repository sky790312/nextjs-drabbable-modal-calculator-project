import React from 'react'
import styled from 'styled-components/'
import { FlexCenterContainer } from '@/GlobalStyles'
import { Dispatch } from 'redux'
import { calculatorActions, initialState } from '@/store/state.calculator'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from '@/store/index'
import { Button } from '@/components/uiComponents/Button'

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
    if (displayValue === initialState.displayValue) {
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
  }
`