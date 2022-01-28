import {
  GetPostsStartedPayload,
  GetPostsStarted,
  GetPostsFailedPayload,
  GetPostsFailed,
  GetPostsSuccessPayload,
  GetPostsSuccess,
  ClearPosts,
} from '../../types/posts'

export enum postsActionTypes {
  getPostsStarted = 'getPostsStarted',
  getPostsFailed = 'getPostsFailed',
  getPostsSuccess = 'getPostsSuccess',
  clearPosts = 'clearPosts',
}

export const getPostsStarted = (payload: GetPostsStartedPayload): GetPostsStarted => ({
  type: postsActionTypes.getPostsStarted,
  payload,
})

export const getPostsFailed = (payload: GetPostsFailedPayload): GetPostsFailed => ({
  type: postsActionTypes.getPostsFailed,
  payload,
})

export const getPostsSucess = (payload: GetPostsSuccessPayload): GetPostsSuccess => ({
  type: postsActionTypes.getPostsSuccess,
  payload,
})

export const clearPosts = (): ClearPosts => ({
  type: postsActionTypes.clearPosts,
})
