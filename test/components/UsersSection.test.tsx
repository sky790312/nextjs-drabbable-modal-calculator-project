import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import { UsersSection } from '@/components/UsersSection'

describe('UsersSection component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<UsersSection />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
