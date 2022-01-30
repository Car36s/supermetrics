import { SagaIterator } from 'redux-saga'
import { call, put, select, takeEvery } from 'redux-saga/effects'
import { getItem, removeItem, SECRET, setItem } from '../../lib/localStorage'

import { register } from '../../services/register'
import { RegisterUserStarted } from '../../types/user'
import { clearPosts, getPostsStarted } from '../posts/actions'
import { postsSelector } from '../posts/selectors'
import { initializeUserDone, registerFailed, registerSucess, userActionTypes } from './actions'

const ONE_HOUR = 60 * 60 * 1000 // in ms
const FIVE_SECONDS = 5000 // in ms

export const registerSaga = function* (action: RegisterUserStarted): SagaIterator {
  try {
    const { data, error } = yield call(register, action.payload)
    if (data) {
      yield call(setItem, SECRET, `${data.sl_token}//${Date.now()}//${data.email}//${action.payload.name}`)
      yield put(registerSucess(data))

      const { posts } = yield select(postsSelector)
      // Get posts only if none currently loaded
      if (Object.keys(posts).length === 0) yield put(getPostsStarted({}))
    } else if (error) {
      // @todo - error handling
      registerFailed({ error: 'Borken' })
    }
  } catch (err: unknown) {
    registerFailed({ error: 'Borken' })
  }
}

export const initializeUserSaga = function* (): SagaIterator {
  try {
    const secret = yield call(getItem, SECRET)

    const [sl_token, timestamp, email, name] = (secret ?? '').split('//')

    if (!timestamp || Date.now() > parseInt(timestamp, 10) - FIVE_SECONDS + ONE_HOUR) {
      yield call(removeItem, SECRET)
    } else {
      yield put(initializeUserDone({ sl_token, email, name }))
      yield put(getPostsStarted({}))
    }
  } catch (err: unknown) {
    // log err
  }
}

const logOutSaga = function* (): SagaIterator {
  yield call(removeItem, SECRET)
  yield put(clearPosts())
}

const userSagas = function* (): SagaIterator<void> {
  yield takeEvery(userActionTypes.userRegisterStarted, registerSaga)
  yield takeEvery(userActionTypes.userInitialize, initializeUserSaga)
  yield takeEvery(userActionTypes.logOut, logOutSaga)
}

export default userSagas
