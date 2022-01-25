import { combineReducers } from 'redux'
import postsReducer from './posts/reducers'
import userReducers from './user/reducers'

const rootReducer = combineReducers({
  user: userReducers,
  posts: postsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
