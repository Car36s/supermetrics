import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import App from './App'

import { MemoryRouter } from 'react-router-dom'
import { getMockStore } from '../tests/mockStore'

describe('<App />', () => {
  it('should render login view', () => {
    const store = getMockStore({})

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByRole('heading', { name: /LOGIN/ })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /Email/ })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /Name/ })).toBeInTheDocument()
  })

  it('should render main', () => {
    const store = getMockStore({ posts: { isLoading: true }, user: { sl_token: 'sl_token' } })

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.queryByRole('heading', { name: /LOGIN/ })).not.toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
