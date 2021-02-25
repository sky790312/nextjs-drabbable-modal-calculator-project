import { Provider } from 'react-redux'
import { useStore } from '@/store/index'
import { GlobalStyles, theme } from '@/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { isMobile } from '@/utils'
import { AppProps } from 'next/app'
import { AppProvider } from '@/components/appCommon/AppContext'

interface Props extends AppProps {
  appProps: {
    deviceInfo: 'mobile' | 'pc'
  }
}
export default function App({ Component, pageProps, appProps }: Props) {
  const store = useStore(pageProps.initialReduxState)
  const { deviceInfo } = appProps

  return (
    <AppProvider deviceInfo={deviceInfo}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </AppProvider>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  const { req } = ctx
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  const deviceInfo = isMobile(userAgent) ? 'mobile' : 'pc'

  let appProps = {}
  if (req) {
    appProps = {
      deviceInfo,
    }
  } else {
    appProps = window.__NEXT_DATA__.props.appProps
  }

  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return {
    pageProps,
    appProps,
  }
}
