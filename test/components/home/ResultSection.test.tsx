import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import { ResultSection } from '@/components/home/ResultSection'

describe('ResultSection component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<ResultSection />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
