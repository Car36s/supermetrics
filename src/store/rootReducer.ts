import { combineReducers } from 'redux'
import userReducers from './user/reducers'

const rootReducer = combineReducers({
  user: userReducers
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
