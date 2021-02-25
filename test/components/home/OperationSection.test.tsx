import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import { OperationSection } from '@/components/home/OperationSection'

describe('OperationSection component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<OperationSection />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
