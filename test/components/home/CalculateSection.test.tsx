import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import { CalculateSection } from '@/components/home/CalculateSection'

describe('CalculateSection component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<CalculateSection />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
