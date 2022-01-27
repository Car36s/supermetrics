import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { darkGrayishBlue } from '../../lib/colors'
import { xxsmall, small, xsmall } from '../../lib/sizes'

import { registerStarted } from '../../store/user/actions'
import { userSelector } from '../../store/user/selectors'
import Button from '../Button'
import Input from '../Input'

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
        <Input type="text" placeholder="name" id="name" />

        <label htmlFor="email">Email</label>
        <Input type="email" placeholder="email" id="email" />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading' : 'Go'}
        </Button>
      </form>
    </aside>
  )
}

export default styled(Register)({
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
      marginBottom: small,
      padding: xsmall,
    },

    label: {
      fontSize: '16px',
      marginBottom: xxsmall,
    },

    [Button]: {
      marginTop: small,
    },
  },
})
