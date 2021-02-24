import React from 'react'
import styled from 'styled-components/'
import { FunctionSection } from '@/components/FunctionSection'
import { NumberSection } from '@/components/NumberSection'
import { OperationSection } from '@/components/OperationSection'
import { ResultSection } from '@/components/ResultSection'

export const CalculateSection: React.FC = () => {
  return (
    <CalculateSectionContainer>
      <ResultSection />
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
