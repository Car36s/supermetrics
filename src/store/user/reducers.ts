import { userActions, UserState } from '../../types/user'
import { userActionTypes } from './actions'

export const initialState: UserState = {
  isLoading: false,
  email: '',
  name: '',
  client_id: '',
  sl_token: '',
  error: '',
}

const userReducers = (state = initialState, action: userActions) => {
  switch (action.type) {
    case userActionTypes.userRegisterStarted:
      return { ...state, isLoading: true, ...action.payload }
    case userActionTypes.userRegisterFailed:
      return { ...state, isLoading: false, error: action.payload.error }
    case userActionTypes.userRegisterSuccess:
      return { ...state, isLoading: false, ...action.payload }
    case userActionTypes.userInitializeDone:
      return { ...state, ...action.payload }
    case userActionTypes.logOut:
      return initialState
    default:
      return state
  }
}

export default userReducers
