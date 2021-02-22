import { UserSchema } from '@/schema/userSchema'
import { FAKE_USERS } from '@/constants'

type UsersState = {
  users: UserSchema[]
  winnerUser: UserSchema
}

type UsersAction = {
  type: string
  winnerUser: UserSchema
}

const initialState: UsersState = {
  users: FAKE_USERS,
  winnerUser: null,
}

const actionTypes = {
  SET_WINNER_USER: 'SET_WINNER_USER',
}

export const usersActions = {
  setWinnerUser: (user: UserSchema): UsersAction => {
    const action: UsersAction = {
      type: actionTypes.SET_WINNER_USER,
      winnerUser: user,
    }

    return action
  },
}

export const usersReducer = (
  state: UsersState = initialState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case actionTypes.SET_WINNER_USER: {
      return {
        ...state,
        winnerUser: action.winnerUser,
      }
    }
  }
  return state
}
