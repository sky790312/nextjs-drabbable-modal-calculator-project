import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { initializeStore } from '@/store/index'
import { RootState } from '@/store/index'
import { theme } from '@/GlobalStyles'
import { AppProvider } from '@/components/appCommon/AppContext'

export function withProviders(
  component,
  initialState?: RootState,
): JSX.Element {
  const mockStore = initializeStore(initialState)
  return (
    <AppProvider deviceInfo={'pc'}>
      <Provider store={mockStore}>
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
      </Provider>
    </AppProvider>
  )
}

export const customRender = (ui, options = {}) => render(ui, { ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
