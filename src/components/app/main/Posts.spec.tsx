import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { getMockStore } from '../../../tests/mockStore'
import { mockPosts } from '../../../tests/__mocks__/posts.mock'
import Posts from './Posts'

describe('<Senders />', () => {
  it('should render all posts', () => {
    const store = getMockStore({ posts: { posts: { 1: mockPosts } } })

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Posts sort={'asc'} postsFilter={''} />
        </MemoryRouter>
      </Provider>
    )

    mockPosts.forEach(({ from_name, message }) => {
      expect(screen.getByText(from_name)).toBeInTheDocument()
      expect(screen.getByText(message)).toBeInTheDocument()
    })
  })
  it('should render posts filtered by user_id', () => {
    const store = getMockStore({ posts: { posts: { 1: mockPosts } } })
    const userId = mockPosts[2].from_id

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/${userId}`]}>
          <Routes>
            <Route path="/:senderFilter" element={<Posts sort={'asc'} postsFilter={''} />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    )

    mockPosts.forEach(({ from_name, message, from_id }) => {
      if (from_id === userId) {
        expect(screen.getByText(from_name)).toBeInTheDocument()
        expect(screen.getByText(message)).toBeInTheDocument()
      } else {
        expect(screen.queryByText(from_name)).not.toBeInTheDocument()
        expect(screen.queryByText(message)).not.toBeInTheDocument()
      }
    })
  })
})
