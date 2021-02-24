import React from 'react'
import styled from 'styled-components/'
import { FlexCenterContainer } from '@/GlobalStyles'
import { Dispatch } from 'redux'
import { calculatorActions } from '@/store/state.calculator'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from '@/store/index'
import { initialState } from '@/store/state.calculator'

const operations = ['÷', 'x', '-', '+', '=']

export const OperationSection: React.FC = React.memo(() => {
  const displayValue = useSelector(
    (state: RootState) => state.calculator.displayValue,
    shallowEqual
  )
  const tempValue = useSelector(
    (state: RootState) => state.calculator.tempValue,
    shallowEqual
  )
  const operator = useSelector(
    (state: RootState) => state.calculator.operator,
    shallowEqual
  )
  const dispatch: Dispatch = useDispatch()
  const { setOperator, setTempValue, setDisplayValue } = calculatorActions

  const OperationsHandler = {
    '÷': (prevValue: number, nextValue: number) => prevValue / nextValue,
    'x': (prevValue: number, nextValue: number) => prevValue * nextValue,
    '+': (prevValue: number, nextValue: number) => prevValue + nextValue,
    '-': (prevValue: number, nextValue: number) => prevValue - nextValue,
    '=': (prevValue: number, nextValue: number) => nextValue
  }

  const handleOperator = (newOperator: string) => {
    if (operator || tempValue === initialState.tempValue) {
      dispatch(setOperator(newOperator))
      dispatch(setTempValue(displayValue))
      return
    }

    const newDisplayValue = (OperationsHandler[newOperator](+tempValue, +displayValue)).toString()
    dispatch(setDisplayValue(newDisplayValue))
    dispatch(setTempValue(newDisplayValue))
    dispatch(setOperator(newOperator))
  }


  return (
    <OperationSectionContainer>
      {operations.map(operation => (
        <FlexCenterContainer key={operation}>
          <Button onClick={() => handleOperator(operation)}>{operation}</Button>
        </FlexCenterContainer>
      ))}
    </OperationSectionContainer>

  )
})

const OperationSectionContainer = styled.div`
  > div {
    width: 100%;
    padding: 10px;

    > button {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.blue};
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