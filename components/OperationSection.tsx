import React from 'react'
import styled from 'styled-components/'
import { FlexCenterContainer } from '@/GlobalStyles'

// const operations = [{
//   name: 'division',
//   text: '÷',
//   value: '/',
// }, {
//     name: 'multiplication',
//     text: 'x',
//     value: '*',
//   }, {
//     name: 'subtraction',
//     text: '-',
//     value: '-',
//   }, {
//     name: 'addition',
//     text: '+',
//     value: '+',
//   }, {
//     name: 'equal',
//     text: '=',
//     value: '=',
//   }]

const operations = ['÷', 'x', '-', '+', '=']

export const OperationSection: React.FC = () => {
  return (
    <OperationSectionContainer>
      {operations.map(operation => (
        <FlexCenterContainer key={operation}>
          <Button>{operation}</Button>
        </FlexCenterContainer>
      ))}
    </OperationSectionContainer>

  )
}

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