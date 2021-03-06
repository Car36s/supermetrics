import { postsActionTypes } from '../store/posts/actions'

export interface PostsApiSuccessResponse {
  meta: {
    request_id: string
  }
  data: {
    page: number
    posts: Post[]
  }
}
export interface PostsApiFailureResponse {
  meta: {
    request_id: string
  }
  error: {
    message: string
  }
}

export type PostsApiResponse = PostsApiSuccessResponse | PostsApiFailureResponse

export interface Post {
  id: string
  from_name: string
  from_id: string
  message: string
  type: string
  created_time: string
}

export interface PostsState {
  isLoading: boolean
  posts: Record<number, Post[]>
  error: string
}

export interface GetPostsStartedPayload {
  page?: number
}

export interface GetPostsFailedPayload {
  error: string
}

export interface GetPostsSuccessPayload {
  page: number
  posts: Post[]
}

export interface GetPostsStarted {
  type: typeof postsActionTypes.getPostsStarted
  payload?: GetPostsStartedPayload
}

export type GetPostsFailed = {
  type: typeof postsActionTypes.getPostsFailed
  payload: GetPostsFailedPayload
}

export type GetPostsSuccess = {
  type: typeof postsActionTypes.getPostsSuccess
  payload: GetPostsSuccessPayload
}

export type ClearPosts = {
  type: typeof postsActionTypes.clearPosts
}

export type postsActions = GetPostsStarted | GetPostsFailed | GetPostsSuccess | ClearPosts

type asc = 'asc'
type desc = 'desc'

export type SortOption = asc | desc
