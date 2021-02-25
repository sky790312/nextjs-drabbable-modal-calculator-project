import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import { FunctionSection } from '@/components/home/FunctionSection'

describe('FunctionSection component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<FunctionSection />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
