import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import { Modal } from '@/components/uiComponents/Modal'

describe('CalculateSection component', () => {
  const modalConfig = {
      isShow: true,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      closeModal: () => {},
    }

  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<Modal {...modalConfig}>modal</Modal>), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
