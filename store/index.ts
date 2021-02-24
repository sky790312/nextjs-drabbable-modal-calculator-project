import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { counterReducer } from '@/store/state.counter'
import { usersReducer } from '@/store/state.users'
import { calculatorReducer } from '@/store/state.calculator'
import { useMemo } from 'react'

const rootReducer = combineReducers({
  users: usersReducer,
  counter: counterReducer,
  calculator: calculatorReducer,
})

export type RootState = ReturnType<typeof rootReducer>

function initStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}

let store
export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
