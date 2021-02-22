import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import { CounterSection } from '@/components/CounterSection'

describe('CounterSection component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<CounterSection />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
