import React from 'react'
import styled from 'styled-components/'
import { FlexCenterContainer } from '@/GlobalStyles'
import { Dispatch } from 'redux'
import { calculatorActions, initialState } from '@/store/state.calculator'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from '@/store/index'
import { Button } from '@/components/uiComponents/Button'
import { NUM_FUNCTIONS } from '@/constants'

export const FunctionSection: React.FC = React.memo(() => {
  const dispatch: Dispatch = useDispatch()
  const { reset, setDisplayValue } = calculatorActions
  const displayValue = useSelector(
    (state: RootState) => state.calculator.displayValue,
    shallowEqual,
  )

  const numFunctionHandler = {
    AC: () => handleReset(),
    '+/-': () => handleToggleSign(),
    '%': () => handlePercent(),
  }

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
      {NUM_FUNCTIONS.map(numFunction => (
        <FlexCenterContainer key={numFunction}>
          <Button onClick={() => numFunctionHandler[numFunction]()}>
            {numFunction}
          </Button>
        </FlexCenterContainer>
      ))}
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
