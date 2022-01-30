import { getItem, SECRET } from '../lib/localStorage'
import { PostsApiResponse } from '../types/posts'
import { fetchJson } from './fetch'

export const getPosts = async (page = 0): Promise<PostsApiResponse> => {
  const secret = getItem(SECRET)
  const [sl_token] = (secret ?? '').split('//')
  return fetchJson(`https://api.supermetrics.com/assignment/posts?sl_token=${sl_token}&page=${page}`)
}
