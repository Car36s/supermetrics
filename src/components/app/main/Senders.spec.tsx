import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import { MemoryRouter } from 'react-router-dom'
import { getMockStore } from '../../../tests/mockStore'
import { mockPosts } from '../../../tests/__mocks__/posts.mock'
import Senders from './Senders'

describe('<Senders />', () => {
  it('should render all users', () => {
    const store = getMockStore({ posts: { posts: { 1: mockPosts } } })

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Senders sendersFilter={''} />
        </MemoryRouter>
      </Provider>
    )

    mockPosts.forEach(({ from_id, from_name }) => {
      expect(screen.getByText(from_name).closest('a')).toHaveAttribute('href', `/${from_id}`)
    })
  })
  it('should render filtered users', () => {
    const store = getMockStore({ posts: { posts: { 1: mockPosts } } })
    const sendersFilter = 'nd'
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Senders sendersFilter={sendersFilter} />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.queryAllByRole('link').length).toBe(2)

    mockPosts
      .filter(({ from_name }) => from_name.includes(sendersFilter))
      .forEach(({ from_id, from_name }) => {
        expect(screen.getByText(from_name).closest('a')).toHaveAttribute('href', `/${from_id}`)
      })
  })
})
