import React from 'react'
import styled from 'styled-components/'
import { FlexCenterContainer } from '@/GlobalStyles'
import { Dispatch } from 'redux'
import { calculatorActions } from '@/store/state.calculator'
import { useDispatch } from 'react-redux'

export const FunctionSection: React.FC = () => {
  const dispatch: Dispatch = useDispatch()
  const { reset } = calculatorActions

  const handleReset = () => {
    dispatch(reset())
  }

  return (
    <FunctionSectionContainer>
      <FlexCenterContainer>
        <Button onClick={handleReset}>AC</Button>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <Button>+/-</Button>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <Button>%</Button>
      </FlexCenterContainer>
    </FunctionSectionContainer>

  )
}

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