import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import { Button } from '@/components/uiComponents/Button'

describe('Button component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<Button>button</Button>), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
