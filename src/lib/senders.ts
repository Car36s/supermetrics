import { Post } from '../types/posts'

type CountedSenders = Record<
  string,
  {
    name: string
    postsCount: number
  }
>

export const getSendersWithPostCounts = (posts: Post[]): CountedSenders =>
  posts?.reduce<CountedSenders>((acc, { from_id, from_name }) => {
    acc[from_id] = { name: from_name, postsCount: (acc[from_id]?.postsCount ?? 0) + 1 }
    return acc
  }, {}) ?? {}

type SortedSenders = {
  from_id: string
  name: string
  postsCount: number
}

export const getSoretedSenders = (senders: CountedSenders): SortedSenders[] =>
  Object.entries(senders)
    .map(([from_id, { name, postsCount }]) => ({
      from_id,
      name,
      postsCount,
    }))
    // Currently all names with capital letters.
    .sort((a, b) => (a.name > b.name ? 1 : -1))

export const getFilteredSenders = (senders: SortedSenders[], sendersFilter: string) =>
  senders.filter(({ name }) => name.toLowerCase().includes(sendersFilter.toLowerCase()))
