import React from 'react'
import styled from 'styled-components/'
import { FlexCenterContainer } from '@/GlobalStyles'
import { Dispatch } from 'redux'
import { calculatorActions, initialState } from '@/store/state.calculator'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from '@/store/index'
import { Button } from '@/components/uiComponents/Button'
import { NUMBERS } from '@/constants'

export const NumberSection: React.FC = React.memo(() => {
  const displayValue = useSelector(
    (state: RootState) => state.calculator.displayValue,
    shallowEqual,
  )
  const operator = useSelector(
    (state: RootState) => state.calculator.operator,
    shallowEqual,
  )

  const dispatch: Dispatch = useDispatch()
  const { setOperator, setDisplayValue } = calculatorActions

  const numberHandler = {
    num: (num: number) => handleNumber(num),
    dot: () => handleDot(),
  }

  const handleNumber = (num: number) => {
    const numString = num.toString()
    if (operator) {
      dispatch(setDisplayValue(numString))
      dispatch(setOperator(''))
    } else {
      const newDisplayValue =
        displayValue === initialState.displayValue
          ? numString
          : `${displayValue}${numString}`
      dispatch(setDisplayValue(newDisplayValue))
    }
  }

  const handleDot = () => {
    if (/\./.test(displayValue)) {
      return
    }

    dispatch(setDisplayValue(`${displayValue}.`))
  }

  return (
    <NumberSectionContainer>
      {NUMBERS.map(num => (
        <FlexCenterContainer key={num} className={!num && 'x2'}>
          <Button
            buttonStyle={'darkGray'}
            onClick={() =>
              isNaN(Number(num))
                ? numberHandler['dot']()
                : numberHandler['num'](Number(num))
            }
            size={!num ? 'block' : 'md'}
          >
            {num}
          </Button>
        </FlexCenterContainer>
      ))}
    </NumberSectionContainer>
  )
})

const NumberSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;

  > div {
    width: 33.33%;
    padding: 10px;

    &.x2 {
      width: 66.67%;
    }
  }
`
