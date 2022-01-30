import { postsActions, PostsState } from '../../types/posts'
import { postsActionTypes } from './actions'

export const initialState: PostsState = {
  isLoading: false,
  posts: {},
  error: '',
}

const postsReducer = (state = initialState, action: postsActions) => {
  switch (action.type) {
    case postsActionTypes.getPostsStarted:
      return { ...state, isLoading: true }
    case postsActionTypes.getPostsFailed:
      return { ...state, isLoading: false, error: action.payload.error }
    case postsActionTypes.getPostsSuccess:
      return { ...state, isLoading: false, posts: { ...state.posts, [action.payload.page]: action.payload.posts } }
    case postsActionTypes.clearPosts:
      return initialState
    default:
      return state
  }
}

export default postsReducer
