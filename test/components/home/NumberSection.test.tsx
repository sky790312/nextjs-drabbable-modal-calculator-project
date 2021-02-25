import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import { NumberSection } from '@/components/home/NumberSection'

describe('NumberSection component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<NumberSection />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
