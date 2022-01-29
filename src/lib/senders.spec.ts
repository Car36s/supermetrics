import { getSendersWithPostCounts, getSoretedSenders, getFilteredSenders } from './senders'
import { mockPosts } from './posts.spec'

const sendersWithPostCounts = {
  user_15: { name: 'Yolande Urrutia', postsCount: 1 },
  user_14: { name: 'Woodrow Lindholm', postsCount: 1 },
  user_2: { name: 'Nydia Croff', postsCount: 1 },
}

const sortedSenders = [
  { from_id: 'user_2', name: 'Nydia Croff', postsCount: 1 },
  { from_id: 'user_14', name: 'Woodrow Lindholm', postsCount: 1 },
  { from_id: 'user_15', name: 'Yolande Urrutia', postsCount: 1 },
]

describe('lib/senders', () => {
  describe('getSendersWithPostCounts', () => {
    it('should parse senders from posts', () => {
      expect(getSendersWithPostCounts(mockPosts)).toStrictEqual(sendersWithPostCounts)
    })
    it('should return empty object if no posts', () => {
      expect(getSendersWithPostCounts()).toStrictEqual({})
    })
  })
  describe('getSoretedSenders', () => {
    it('should sort senders aplhabetically', () => {
      expect(getSoretedSenders(sendersWithPostCounts)).toStrictEqual(sortedSenders)
    })
  })
  describe('getFilteredSenders', () => {
    it('should filter by word', () => {
      expect(getFilteredSenders(sortedSenders, 'Woodrow')).toStrictEqual([sortedSenders[1]])
    })
    it('should filter by partial word', () => {
      expect(getFilteredSenders(sortedSenders, 'Wood')).toStrictEqual([sortedSenders[1]])
    })
    it('should filter by lowercase word', () => {
      expect(getFilteredSenders(sortedSenders, 'Wood')).toStrictEqual([sortedSenders[1]])
    })
  })
})
