import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { registerStarted } from '../store/user/actions'
import { userSelector } from '../store/user/selectors'

const Register = ({ className }: { className?: string }) => {
  const { isLoading, sl_token } = useSelector(userSelector)
  const dispatch = useDispatch()

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault()

      const {
        email: { value: email },
        name: { value: name }
      } = event.target

      if (email && name) dispatch(registerStarted({ email, name }))
      // @todo - react-hook-form + validation etc
    },
    [dispatch]
  )

  if (sl_token) return null

  return (
    <aside className={className}>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="name" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="email" id="email" />

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading' : 'Go'}{' '}
        </button>
      </form>
    </aside>
  )
}

export default styled(Register)({
  backgroundColor: '#282c34',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white'
})
