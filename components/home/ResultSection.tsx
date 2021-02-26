import React from 'react'
import styled from 'styled-components/'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from '@/store/index'
import { addCommas } from '@/utils'

export const ResultSection: React.FC = () => {
  const displayValue = useSelector(
    (state: RootState) => state.calculator.displayValue,
    shallowEqual,
  )

  return (
    <ResultSectionContainer>
      {addCommas(displayValue)}
    </ResultSectionContainer>
  )
}

const ResultSectionContainer = styled.div`
  height: 150px;
  text-align: right;
  color: ${({ theme }) => theme.colors.white};
  padding: 60px 20px 0;
  font-size: 64px;
  overflow: auto;
`
