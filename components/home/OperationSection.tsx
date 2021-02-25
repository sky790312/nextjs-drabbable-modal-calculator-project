import React, { useState } from 'react'
import styled from 'styled-components/'
import { FlexCenterContainer } from '@/GlobalStyles'
import { Dispatch } from 'redux'
import { calculatorActions } from '@/store/state.calculator'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from '@/store/index'
import { initialState } from '@/store/state.calculator'
import { Button } from '@/components/uiComponents/Button'
import { OPERATORS } from '@/constants'

export const OperationSection: React.FC = React.memo(() => {
  const [remainOperator, setRemainOperator] = useState<string>('')
  const displayValue = useSelector(
    (state: RootState) => state.calculator.displayValue,
    shallowEqual,
  )
  const tempValue = useSelector(
    (state: RootState) => state.calculator.tempValue,
    shallowEqual,
  )
  const operator = useSelector(
    (state: RootState) => state.calculator.operator,
    shallowEqual,
  )
  const dispatch: Dispatch = useDispatch()
  const { setOperator, setTempValue, setDisplayValue } = calculatorActions

  const OperationsHandler = {
    '÷': (prevValue: number, nextValue: number) => prevValue / nextValue,
    x: (prevValue: number, nextValue: number) => prevValue * nextValue,
    '+': (prevValue: number, nextValue: number) => prevValue + nextValue,
    '-': (prevValue: number, nextValue: number) => prevValue - nextValue,
    '=': (prevValue: number, nextValue: number) => nextValue,
  }

  const handleOperator = (newOperator: string) => {
    if (operator || tempValue === initialState.tempValue) {
      dispatch(setOperator(newOperator))
      dispatch(setTempValue(displayValue))
      setRemainOperator(newOperator)
      return
    }

    const usingOperator = remainOperator
      ? remainOperator === newOperator
        ? newOperator
        : remainOperator
      : newOperator
    const newDisplayValue = OperationsHandler[usingOperator](
      +tempValue,
      +displayValue,
    ).toString()
    dispatch(setDisplayValue(newDisplayValue))
    dispatch(setTempValue(newDisplayValue))
    dispatch(setOperator(newOperator))
    setRemainOperator(newOperator)
  }

  return (
    <OperationSectionContainer>
      {OPERATORS.map(operation => (
        <FlexCenterContainer key={operation}>
          <Button
            buttonStyle={'blue'}
            onClick={() => handleOperator(operation)}
          >
            {operation}
          </Button>
        </FlexCenterContainer>
      ))}
    </OperationSectionContainer>
  )
})

const OperationSectionContainer = styled.div`
  > div {
    width: 100%;
    padding: 10px;
  }
`
