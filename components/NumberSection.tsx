import React from 'react'
import styled from 'styled-components/'
import { FlexCenterContainer } from '@/GlobalStyles'

export const NumberSection: React.FC = () => {
  return (
    <NumberSectionContainer>
      <FlexCenterContainer className='x2'>
        <Button className='x2'>0</Button>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <Button>●</Button>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <Button>1</Button>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <Button>2</Button>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <Button>3</Button>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <Button>4</Button>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <Button>5</Button>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <Button>6</Button>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <Button>7</Button>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <Button>8</Button>
      </FlexCenterContainer>
      <FlexCenterContainer>
        <Button>9</Button>
      </FlexCenterContainer>
    </NumberSectionContainer>
  )
}

const NumberSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;

  > div {
    width: 33.33%;
    padding: 10px;

    &.x2 {
      width: 66.67%;
    }

    > button {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.darkGray};
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