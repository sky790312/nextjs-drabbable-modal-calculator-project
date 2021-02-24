type CalculatorState = {
  displayValue: string
  isWaitingOperand: boolean
}

type CalculatorAction = {
  type: string
  displayValue: string
}

export const initialDisplayValue = '0'

const initialState: CalculatorState = {
  displayValue: initialDisplayValue,
  isWaitingOperand: false
}

const actionTypes = {
  SET_DISPLAY_VALUE: 'SET_DISPLAY_VALUE',
  RESET: 'RESET',
}

export const calculatorActions = {
  setDisplayValue: (displayValue: string): CalculatorAction => {
    const action: CalculatorAction = {
      type: actionTypes.SET_DISPLAY_VALUE,
      displayValue,
    }

    return action
  },
  reset: (): CalculatorAction => {
    const action: CalculatorAction = {
      type: actionTypes.RESET,
      displayValue: initialDisplayValue
    }

    return action
  },
}

export const calculatorReducer = (
  state: CalculatorState = initialState,
  action: CalculatorAction
): CalculatorState => {
  switch (action.type) {
    case actionTypes.SET_DISPLAY_VALUE: {
      return {
        ...state,
        displayValue: action.displayValue,
      }
    }
    case actionTypes.RESET: {
      return {
        ...state,
        displayValue: action.displayValue,
        isWaitingOperand: false
      }
    }
  }
  return state
}
