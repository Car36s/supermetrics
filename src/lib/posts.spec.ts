import { Post } from '../types/posts'
import { getPostsFilteredBySenderId, getPostsFilteredByText, getSortedPosts } from './posts'

const posts: Post[] = [
  {
    id: 'post61f4ac183a3ba_e60241f9',
    from_name: 'Woodrow Lindholm',
    from_id: 'user_14',
    message:
      'coach judge participate flush despise competition egg white chief move question money introduction interference outside term resort conservative story effective introduction mess gradient ton conservative try interface monstrous useful relax ditch Sunday business photocopy title norm condition level upset bother penny calculation lift bullet queen corn revolution upset warrant index science handy pick distant elephant level courage foreigner scholar approval murder omission state recording lost reconcile appetite fail tense drama bother stain fireplace thaw ally village instrument dramatic hell linen convention night horror space insert point genuine interference deposit ton rob',
    type: 'status',
    created_time: '2022-01-28T23:38:43+00:00',
  },
  {
    id: 'post61f4ac183a58f_36cc15a8',
    from_name: 'Nydia Croff',
    from_id: 'user_2',
    message:
      'west soap button stake trolley contract survivor use fuel tract squash retiree facility judgment save option monopoly jewel contract dare button sulphur rough sacrifice dynamic yard diamond AIDS improve grow electron crude adoption ecstasy mild warrant manufacture harsh romantic squash victory Sunday air poison fill prisoner national sword extension romantic say participate buy fuel opposite alcohol veil',
    type: 'status',
    created_time: '2022-01-14T16:55:25+00:00',
  },
  {
    id: 'post61f4ac183a52d_5b86d56b',
    from_name: 'Yolande Urrutia',
    from_id: 'user_15',
    message:
      'refuse rubbish difficulty lake air rehabilitation dominant reinforce money counter due trait offense grimace chord pick salesperson barrier stride church coin straw spend velvet axis need formula band beg terrify thin realize spell spend promotion waste dawn hour wood prescription retirement acceptance linen carry set achievement suitcase constellation oak reptile experiment detective drop press rubbish favourite prevalence fame adventure silver breed stride pray rare monopoly grip flush fit state reserve drama south lie ton raid useful oak fine approval major bike rob plant',
    type: 'status',
    created_time: '2022-01-19T01:01:06+00:00',
  },
]

describe('lib/posts', () => {
  describe('getPostsFilteredBySenderId', () => {
    it('should filter posts by sender_id', () => {
      expect(getPostsFilteredBySenderId(posts, 'user_2').length).toBe(1)
    })
    it('should return empty array if no sender_id in posts', () => {
      expect(getPostsFilteredBySenderId(posts, 'user_65').length).toBe(0)
    })
    it('should return empty array if no posts', () => {
      expect(getPostsFilteredBySenderId([], '').length).toBe(0)
    })
  })
  describe('getPostsFilteredByText', () => {
    it('should filter posts by text', () => {
      expect(getPostsFilteredByText(posts, 'money').length).toBe(2)
    })
  })
  describe('getSortedPosts', () => {
    it('should sort older posts first', () => {
      const sortedTimes = getSortedPosts(posts, 'asc').map(({ created_time }) => created_time)
      expect(sortedTimes).toStrictEqual([
        '2022-01-14T16:55:25+00:00',
        '2022-01-19T01:01:06+00:00',
        '2022-01-28T23:38:43+00:00',
      ])
    })
    it('should sort newer posts first', () => {
      const sortedTimes = getSortedPosts(posts, 'desc').map(({ created_time }) => created_time)
      expect(sortedTimes).toStrictEqual([
        '2022-01-28T23:38:43+00:00',
        '2022-01-19T01:01:06+00:00',
        '2022-01-14T16:55:25+00:00',
      ])
    })
  })
})
