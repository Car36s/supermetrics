import { Action } from 'redux'
import { runSaga } from 'redux-saga'

import { initializeUserSaga, registerSaga } from './sagas'
import * as registerService from '../../services/register'
import * as localStorageLib from '../../lib/localStorage'

import { initializeUser, initializeUserDone, registerStarted } from './actions'
import { RegisterApiSuccessResponse } from '../../types/user'
import { getPostsStarted } from '../posts/actions'
import { mockPosts } from '../../tests/__mocks__/posts.mock'

const successResponse: RegisterApiSuccessResponse = {
  meta: {
    request_id: 'request_id',
  },
  data: {
    client_id: 'client_id',
    email: 'email',
    sl_token: 'sl_token',
  },
}

describe('user/sagas', () => {
  const name = 'name'
  const email = 'email'

  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2020-01-01').getTime())
  })
  describe('registerSaga', () => {
    it('should call register endpoint and save data to localstorage on success', async () => {
      jest.spyOn(registerService, 'register').mockReturnValueOnce(Promise.resolve(successResponse))
      jest.spyOn(localStorageLib, 'setItem').mockImplementation(() => null)

      const dispatched: Action[] = []

      await runSaga(
        {
          dispatch: (action: Action) => dispatched.push(action),
          getState: () => ({ posts: { posts: {} } }),
        },

        registerSaga,
        registerStarted({ name, email })
      ).toPromise()

      expect(registerService.register).toHaveBeenCalledWith({ name, email })
      expect(localStorageLib.setItem).toHaveBeenCalledWith(
        localStorageLib.SECRET,
        'sl_token//1577836800000//email//name'
      )
      expect(dispatched).toContainEqual(getPostsStarted({}))
    })
  })
  it('should register but not fetch posts if already in store', async () => {
    jest.spyOn(registerService, 'register').mockReturnValueOnce(Promise.resolve(successResponse))
    jest.spyOn(localStorageLib, 'setItem').mockImplementation(() => null)

    const dispatched: Action[] = []

    await runSaga(
      {
        dispatch: (action: Action) => dispatched.push(action),
        getState: () => ({ posts: { posts: { 1: mockPosts } } }),
      },

      registerSaga,
      registerStarted({ name, email })
    ).toPromise()

    expect(registerService.register).toHaveBeenCalledWith({ name, email })
    expect(localStorageLib.setItem).toHaveBeenCalledWith(localStorageLib.SECRET, 'sl_token//1577836800000//email//name')
    expect(dispatched).not.toContainEqual(getPostsStarted({}))
  })
  describe('initializeUserSaga', () => {
    it('should initialize user state from localStorage if has valid "secret"', async () => {
      const secret = 'sl_token//1577836800000//email//name'

      jest.spyOn(localStorageLib, 'getItem').mockImplementation(() => secret)

      const dispatched: Action[] = []

      await runSaga(
        {
          dispatch: (action: Action) => dispatched.push(action),
        },

        initializeUserSaga,
        // @ts-expect-error foo
        initializeUser()
      ).toPromise()

      expect(localStorageLib.getItem).toHaveBeenCalledWith(localStorageLib.SECRET)
      expect(dispatched).toContainEqual(initializeUserDone({ email, name, sl_token: 'sl_token' }))
      expect(dispatched).toContainEqual(getPostsStarted({}))
    })
  })
  describe('initializeUserSaga', () => {
    it('should remove expired "secret" from localStorage', async () => {
      const secret = 'sl_token//1571836800000//email//name'

      jest.spyOn(localStorageLib, 'getItem').mockImplementation(() => secret)
      jest.spyOn(localStorageLib, 'removeItem').mockImplementation(() => null)

      const dispatched: Action[] = []

      await runSaga(
        {
          dispatch: (action: Action) => dispatched.push(action),
        },

        initializeUserSaga,
        // @ts-expect-error foo
        initializeUser()
      ).toPromise()

      expect(localStorageLib.getItem).toHaveBeenCalledWith(localStorageLib.SECRET)
      expect(localStorageLib.removeItem).toHaveBeenCalledWith(localStorageLib.SECRET)

      expect(dispatched.length).toBe(0)
    })
  })
})
