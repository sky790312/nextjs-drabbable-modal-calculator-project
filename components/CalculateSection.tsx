import React from 'react'
import styled from 'styled-components/'
import { FlexCenterContainer } from '@/GlobalStyles'
import { FunctionSection } from '@/components/FunctionSection'
import { NumberSection } from '@/components/NumberSection'
import { OperationSection } from '@/components/OperationSection'


export const CalculateSection: React.FC = () => {
  return (
    <CalculateSectionContainer>
      <ResultSection>0</ResultSection>
      <ManipulateSection>
        <div>
          <FunctionSection />
          <NumberSection />
        </div>
        <OperationSection />
      </ManipulateSection>
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

const ManipulateSection = styled.div`
  display: flex;

  > div {
    &:nth-child(1) {
      width: 75%;
    }

     &:nth-child(2) {
      width: 25%;
    }
  }
`
