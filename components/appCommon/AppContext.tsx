import { createContext, ReactNode } from 'react'

interface AppContextProps {
  deviceInfo: 'mobile' | 'pc'
}

const initialDeviceInfo = 'pc'
export const AppContext = createContext<AppContextProps>({
  deviceInfo: initialDeviceInfo,
})

interface AppProviderProps extends AppContextProps {
  children: ReactNode
}

export const AppProvider = ({
  deviceInfo,
  children,
}: AppProviderProps) => {
  return (
    <AppContext.Provider
      value={{
        deviceInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
