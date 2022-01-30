import { initializeUserDone, logOut, registerFailed, registerStarted, registerSucess } from './actions'
import userReducers, { initialState } from './reducers'

describe('user/reducers', () => {
  it('should handle userRegisterStarted', () => {
    expect(userReducers(initialState, registerStarted({ email: 'foo', name: 'bar' }))).toStrictEqual({
      isLoading: true,
      email: 'foo',
      name: 'bar',
      client_id: '',
      sl_token: '',
      error: '',
    })
  })
  it('should handle registerFailed', () => {
    expect(userReducers({ ...initialState, isLoading: true }, registerFailed({ error: 'error' }))).toStrictEqual({
      isLoading: false,
      email: '',
      name: '',
      client_id: '',
      sl_token: '',
      error: 'error',
    })
  })
  it('should handle registerSucess', () => {
    expect(
      userReducers(
        { ...initialState, isLoading: true },
        registerSucess({ client_id: 'client_id', email: 'email', sl_token: 'sl_token' })
      )
    ).toStrictEqual({
      isLoading: false,
      email: 'email',
      name: '',
      client_id: 'client_id',
      sl_token: 'sl_token',
      error: '',
    })
  })
  it('should handle initializeUserDone', () => {
    expect(
      userReducers(initialState, initializeUserDone({ name: 'name', email: 'email', sl_token: 'sl_token' }))
    ).toStrictEqual({
      isLoading: false,
      email: 'email',
      name: 'name',
      client_id: '',
      sl_token: 'sl_token',
      error: '',
    })
  })
  it('should handle logOut', () => {
    expect(
      userReducers(
        { isLoading: true, email: 'email', name: 'name', client_id: 'client_id', sl_token: 'sl_token', error: 'error' },
        logOut()
      )
    ).toStrictEqual(initialState)
  })
})
