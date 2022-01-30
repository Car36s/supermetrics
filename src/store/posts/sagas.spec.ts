import { Action } from 'redux'
import { runSaga } from 'redux-saga'

import { getPostsStarted, getPostsSucess } from './actions'
import { getPostsSaga } from './sagas'
import * as postsService from '../../services/posts'

import { mockPosts } from '../../tests/__mocks__/posts.mock'
import { PostsApiFailureResponse, PostsApiSuccessResponse } from '../../types/posts'
import { registerStarted } from '../user/actions'

const successResponse: PostsApiSuccessResponse = {
  meta: {
    request_id: 'request_id',
  },
  data: {
    page: 5,
    posts: mockPosts,
  },
}
const errorResponse: PostsApiFailureResponse = {
  meta: {
    request_id: 'request_is',
  },
  error: {
    message: 'Invalid SL Token',
  },
}

describe('posts/sagas', () => {
  describe('getPostsSaga', () => {
    it('should fetch posts and handle success response', async () => {
      jest.spyOn(postsService, 'getPosts').mockReturnValueOnce(Promise.resolve(successResponse))

      const dispatched: Action[] = []

      await runSaga(
        {
          dispatch: (action: Action) => dispatched.push(action),
        },

        getPostsSaga,
        getPostsStarted({ page: successResponse?.data?.page })
      ).toPromise()

      expect(postsService.getPosts).toHaveBeenCalledWith(successResponse?.data?.page)
      expect(dispatched).toContainEqual(getPostsSucess(successResponse?.data))
    })

    it('should fetch posts and handle error response', async () => {
      const name = 'name'
      const email = 'email'

      jest.spyOn(postsService, 'getPosts').mockReturnValueOnce(Promise.resolve(errorResponse))

      const dispatched: Action[] = []
      await runSaga(
        {
          dispatch: (action: Action) => dispatched.push(action),
          getState: () => ({ user: { name, email } }),
        },

        getPostsSaga,
        getPostsStarted({ page: successResponse.data.page })
      ).toPromise()

      expect(postsService.getPosts).toHaveBeenCalledWith(successResponse.data.page)
      expect(dispatched).toContainEqual(registerStarted({ name, email }))
    })
  })
})
