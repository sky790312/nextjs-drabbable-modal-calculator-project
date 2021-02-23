import React from 'react'
import styled from 'styled-components/'
import { FlexCenterContainer } from '@/GlobalStyles'

export const FunctionSection: React.FC = () => {
  return (
    <FunctionSectionContainer>
      <FlexCenterContainer>
        <Button>AC</Button>
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