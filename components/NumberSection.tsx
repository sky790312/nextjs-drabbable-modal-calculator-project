import React from 'react'
import styled from 'styled-components/'
import { FlexCenterContainer } from '@/GlobalStyles'
import { Dispatch } from 'redux'
import { calculatorActions, initialState } from '@/store/state.calculator'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from '@/store/index'
import { Button } from '@/components/uiComponents/Button'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const NumberSection: React.FC = React.memo(() => {
  const displayValue = useSelector(
    (state: RootState) => state.calculator.displayValue,
    shallowEqual
  )
  const operator = useSelector(
    (state: RootState) => state.calculator.operator,
    shallowEqual
  )

  const dispatch: Dispatch = useDispatch()
  const { setOperator, setDisplayValue } = calculatorActions

  const handleNumber = (num: number) => {
    const numString = num.toString()
    if (operator) {
      dispatch(setDisplayValue(numString))
      dispatch(setOperator(''))
    } else {
      const newDisplayValue = displayValue === initialState.displayValue ? numString : `${displayValue}${numString}`
      dispatch(setDisplayValue(newDisplayValue))
    }
  }

  const handleDot = () => {
    if ((/\./).test(displayValue)) {
      return
    }

    dispatch(setDisplayValue(`${displayValue}.`))
  }

  return (
    <NumberSectionContainer>
      <FlexCenterContainer className='x2'>
        <Button size={'block'} buttonStyle={'darkGray'} onClick={() => handleNumber(0)}>0</Button>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <Button buttonStyle={'darkGray'} onClick={() => handleDot()}>●</Button>
      </FlexCenterContainer>
      {numbers.map(number => (
        <FlexCenterContainer key={number}>
          <Button buttonStyle={'darkGray'} onClick={() => handleNumber(number)}>{number}</Button>
        </FlexCenterContainer>
      ))}
    </NumberSectionContainer>
  )
})

const NumberSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  font-size: 24px;

  > div {
    width: 33.33%;
    padding: 10px;

    &.x2 {
      width: 66.67%;
    }
  }
`