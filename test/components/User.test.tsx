import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import { User } from '@/components/User'
import { FAKE_USERS } from '@/constants'

describe('User component', () => {
  it('matches snapshot', () => {
    const user = FAKE_USERS[0]
    const { asFragment } = render(withProviders(<User user={user} />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
