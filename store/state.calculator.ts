type CalculatorState = {
  displayValue: string
  tempValue: string
  operator: string
}

export const initialState: CalculatorState = {
  displayValue: '0',
  tempValue: '0',
  operator: '',
}

const actionTypes = {
  SET_DISPLAY_VALUE: 'SET_DISPLAY_VALUE',
  SET_TEMP_VALUE: 'SET_TEMP_VALUE',
  SET_OPERATOR: 'SET_OPERATOR',
  RESET: 'RESET',
}

export const calculatorActions = {
  setDisplayValue: (displayValue: string) => {
    const action = {
      type: actionTypes.SET_DISPLAY_VALUE,
      displayValue,
    }

    return action
  },
  setTempValue: (tempValue: string) => {
    const action = {
      type: actionTypes.SET_TEMP_VALUE,
      tempValue,
    }

    return action
  },
  setOperator: (operator: string) => {
    const action = {
      type: actionTypes.SET_OPERATOR,
      operator,
    }

    return action
  },
  reset: () => {
    const action = {
      type: actionTypes.RESET,
    }

    return action
  },
}

export const calculatorReducer = (
  state: CalculatorState = initialState,
  action
): CalculatorState => {
  switch (action.type) {
    case actionTypes.SET_DISPLAY_VALUE: {
      return {
        ...state,
        displayValue: action.displayValue,
      }
    }
    case actionTypes.SET_TEMP_VALUE: {
      return {
        ...state,
        tempValue: action.tempValue,
      }
    }
    case actionTypes.SET_OPERATOR: {
      return {
        ...state,
        operator: action.operator,
      }
    }
    case actionTypes.RESET: {
      return {
        ...state,
        ...initialState
      }
    }
  }
  return state
}
