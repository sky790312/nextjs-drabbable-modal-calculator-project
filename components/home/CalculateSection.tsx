import React, { useContext } from 'react'
import styled from 'styled-components/'
import { FunctionSection } from '@/components/home/FunctionSection'
import { NumberSection } from '@/components/home/NumberSection'
import { OperationSection } from '@/components/home/OperationSection'
import { ResultSection } from '@/components/home/ResultSection'
import { AppContext } from '@/components/appCommon/AppContext'

export const CalculateSection: React.FC = () => {
  const context = useContext(AppContext)
  const { deviceInfo } = context

  return (
    <CalculateSectionContainer deviceInfo={deviceInfo}>
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

const CalculateSectionContainer = styled.div<{ deviceInfo: 'pc' | 'mobile' }>`
  overflow: auto;
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.lightBlue},
    ${({ theme }) => theme.colors.darkBlue}
  );
  height: 650px;
  border-radius: 5px;

  ${props => {
    if (props.deviceInfo === 'pc') {
      return `
        width: 360px;
        transition: 0.3s;

        @media (min-width: 1140px) {
          width: 480px;
        }
      `
    }
  }}
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
