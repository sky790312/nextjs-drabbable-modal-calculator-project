import React from 'react'
import styled from 'styled-components/'
import { FlexCenterContainer } from '@/GlobalStyles'

export const CalculateSection: React.FC = () => {
  return (
    <CalculateSectionContainer>
      <ResultSection>0</ResultSection>
      <FlexCenterContainer>
        <InputSection>
          <FunctionSection>
            <FlexCenterContainer>
              <Button>AC</Button>
            </FlexCenterContainer>
            <FlexCenterContainer>
              <Button>±</Button>
            </FlexCenterContainer>
            <FlexCenterContainer>
              <Button>%</Button>
            </FlexCenterContainer>
          </FunctionSection>
          <NumberSection>
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
          </NumberSection>
        </InputSection>
        <OperationSection>
          <FlexCenterContainer>
            <Button>÷</Button>
          </FlexCenterContainer>
          <FlexCenterContainer>
            <Button>×</Button>
          </FlexCenterContainer>
          <FlexCenterContainer>
            <Button>-</Button>
          </FlexCenterContainer>
          <FlexCenterContainer>
            <Button>+</Button>
          </FlexCenterContainer>
          <FlexCenterContainer>
            <Button>=</Button>
          </FlexCenterContainer>
        </OperationSection>
      </FlexCenterContainer>
    </CalculateSectionContainer>
  )
}

const CalculateSectionContainer = styled.div`
  overflow: auto;
  background-image: linear-gradient(${({ theme }) => theme.colors.lightBlue}, ${({ theme }) => theme.colors.darkBlue});
  width: 480px;
  height: 650px;
  border-radius: 5px;
`

const ResultSection = styled.div`
  height: 150px;
  text-align: right;
  color: ${({ theme }) => theme.colors.white};
  padding: 60px 20px 0;
  font-size: 64px;

  // span {
  //   font-size: 48px;
  // }
`

const InputSection = styled.div`
  width: 75%;
`

const FunctionSection = styled.div`
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

const NumberSection = styled.div`
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

const OperationSection = styled.div`
  width: 25%;

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