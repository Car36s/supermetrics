import { mockPosts } from '../tests/__mocks__/posts.mock'
import { getPostsFilteredBySenderId, getPostsFilteredByText, getSortedPosts } from './posts'

describe('lib/posts', () => {
  describe('getPostsFilteredBySenderId', () => {
    it('should return all the posts if no senderFilter', () => {
      expect(getPostsFilteredBySenderId(mockPosts, '').length).toBe(3)
    })
    it('should filter posts by sender_id', () => {
      expect(getPostsFilteredBySenderId(mockPosts, 'user_2').length).toBe(1)
    })
    it('should return empty array if no posts', () => {
      expect(getPostsFilteredBySenderId([], '').length).toBe(0)
    })
  })
  describe('getPostsFilteredByText', () => {
    it('should filter posts by text', () => {
      expect(getPostsFilteredByText(mockPosts, 'money').length).toBe(2)
    })
  })
  describe('getSortedPosts', () => {
    it('should sort older posts first', () => {
      const sortedTimes = getSortedPosts(mockPosts, 'asc').map(({ created_time }) => created_time)
      expect(sortedTimes).toStrictEqual([
        '2022-01-14T16:55:25+00:00',
        '2022-01-19T01:01:06+00:00',
        '2022-01-28T23:38:43+00:00',
      ])
    })
    it('should sort newer posts first', () => {
      const sortedTimes = getSortedPosts(mockPosts, 'desc').map(({ created_time }) => created_time)
      expect(sortedTimes).toStrictEqual([
        '2022-01-28T23:38:43+00:00',
        '2022-01-19T01:01:06+00:00',
        '2022-01-14T16:55:25+00:00',
      ])
    })
  })
})
