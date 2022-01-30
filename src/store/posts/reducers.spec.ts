import { mockPosts } from '../../tests/__mocks__/posts.mock'
import { clearPosts, getPostsFailed, getPostsStarted, getPostsSucess } from './actions'
import postsReducer from './reducers'
import { initialState } from './reducers'

describe('posts/reducers', () => {
  it('should handle getPostsStarted', () => {
    expect(postsReducer(initialState, getPostsStarted({}))).toStrictEqual({
      isLoading: true,
      posts: {},
      error: '',
    })
  })
  it('should handle getPostsFailed', () => {
    expect(postsReducer(initialState, getPostsFailed({ error: 'error' }))).toStrictEqual({
      isLoading: false,
      posts: {},
      error: 'error',
    })
  })
  it('should handle getPostsSucess', () => {
    const page = 5
    expect(postsReducer(initialState, getPostsSucess({ page, posts: mockPosts }))).toStrictEqual({
      isLoading: false,
      posts: { [page]: mockPosts },
      error: '',
    })
  })
  it('should handle clearPosts', () => {
    const page = 5
    expect(postsReducer({ isLoading: true, posts: { [page]: mockPosts }, error: 'error' }, clearPosts())).toStrictEqual(
      initialState
    )
  })
})
