import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { small, xlarge, xsmall } from '../../../../lib/sizes'
import Button from '../../../Button'
import { logOut as logOutAction } from '../../../../store/user/actions'

const LogOffComponent = ({ className }: { className?: string }) => {
  const dispatch = useDispatch()
  const logOut = useCallback(() => {
    dispatch(logOutAction())
  }, [dispatch])

  return (
    <Button className={className} onClick={logOut}>
      <h3>&#8486;</h3>
      <span>Log out</span>
    </Button>
  )
}

export default styled(LogOffComponent)({
  display: 'flex',
  justifyContent: 'center',
  minWidth: xlarge,
  backgroundColor: 'white',
  marginLeft: xsmall,
  alignItems: 'center',

  h3: {
    margin: 0,
  },

  span: {
    margin: `0 ${xsmall}`,
    fontSize: small,
  },
})
