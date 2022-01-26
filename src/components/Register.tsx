import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { darkGrayishBlue, grayishBlue } from '../lib/colors'
import { extraSmall, medium, small } from '../lib/sizes'

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
        name: { value: name },
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
        <h1>LOGIN</h1>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="name" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="email" id="email" />

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading' : 'Go'}
        </button>
      </form>
    </aside>
  )
}

export default styled(Register)({
  backgroundColor: grayishBlue,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',

  h1: {
    textAlign: 'center',
  },

  form: {
    display: 'flex',
    minHeight: '320px',
    minWidth: '320px',
    padding: '24px 48px',
    boxSizing: 'border-box',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: '1px 1px 8px 2px rgb(0 0 0 / 40%)',
    backgroundColor: darkGrayishBlue,

    input: {
      marginBottom: medium,
      padding: small,
    },

    label: {
      fontSize: '16px',
      marginBottom: extraSmall,
    },

    button: {
      marginTop: medium,
    },
  },
})
