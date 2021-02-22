type CounterState = {
  timer: number
}

type CounterAction = {
  type: string
  timer: number
}

const initialState: CounterState = {
  timer: 0,
}

const actionTypes = {
  SET_TIMER: 'SET_TIMER',
}

export const counterActions = {
  setTimer: (timer: number): CounterAction => {
    const action: CounterAction = {
      type: actionTypes.SET_TIMER,
      timer,
    }

    return action
  },
}

export const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case actionTypes.SET_TIMER: {
      return {
        ...state,
        timer: action.timer,
      }
    }
  }
  return state
}
