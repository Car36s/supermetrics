import { Post, SortOption } from '../types/posts'

const sorter: Record<SortOption, number[]> = {
  asc: [1, -1],
  desc: [-1, 1],
}

export const getPostsFilteredBySenderId = (posts: Post[], senderFilter: string) =>
  (!senderFilter ? posts : posts?.filter(({ from_id }) => from_id === senderFilter)) ?? []

export const getPostsFilteredByText = (posts: Post[], postsFilter: string) =>
  posts.filter(({ message }) => message.toLowerCase().includes(postsFilter.toLowerCase()))

export const getSortedPosts = (posts: Post[], sort: SortOption) =>
  // create copy of items since sort just mutates original and updates may not happen
  posts?.sort((a, b) => (a.created_time > b.created_time ? sorter[sort][0] : sorter[sort][1])).slice(0)
