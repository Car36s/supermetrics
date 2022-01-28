import { SagaIterator } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'
import { getItem, removeItem, setItem } from '../../lib/localStorage'

import { register } from '../../services/register'
import { RegisterUserStarted } from '../../types/user'
import { clearPosts, getPostsStarted } from '../posts/actions'
import { initializeUserDone, registerFailed, registerSucess, userActionTypes } from './actions'

const SECRET = 'secret'

const registerSaga = function* (action: RegisterUserStarted): SagaIterator {
  try {
    const { data } = yield call(register, action.payload)
    if (data) {
      yield put(registerSucess(data))
      yield put(getPostsStarted({}))
      yield call(setItem, SECRET, `${data.sl_token}//${Date.now()}//${data.email}//${action.payload.name}`)
    }
  } catch (err: unknown) {
    registerFailed({ error: 'Borken' })
  }
}

const initializeUserSaga = function* (): SagaIterator {
  try {
    const secret = yield call(getItem, SECRET)

    const [sl_token, timestamp, email, name] = (secret ?? '').split('//')

    if (!timestamp || Date.now() > parseInt(timestamp, 10) + 1000 * 60 * 60) {
      yield call(removeItem, SECRET)
    } else {
      yield put(initializeUserDone({ sl_token, email, name }))
      yield put(getPostsStarted({}))
    }
  } catch (err: unknown) {
    console.log('Borken', err)
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
