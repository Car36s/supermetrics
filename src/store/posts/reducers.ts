import { postsActions, PostsState } from '../../types/posts'
import { postsActionTypes } from './actions'

const initialState: PostsState = {
  isLoading: false,
  posts: {},
  error: ''
}

const postsReducer = (state = initialState, action: postsActions) => {
  switch (action.type) {
    case postsActionTypes.getPostsStarted:
      return { ...state, isLoading: true }
    case postsActionTypes.getPostsFailed:
      return { ...state, isLoading: false, error: action.payload.error }
    case postsActionTypes.getPostsSuccess:
      return { ...state, posts: { ...state.posts, [action.payload.page]: action.payload.posts } }
    default:
      return state
  }
}

export default postsReducer
