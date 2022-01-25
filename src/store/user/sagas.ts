import { SagaIterator } from 'redux-saga'
import { call, takeEvery } from 'redux-saga/effects'
import { register } from '../../services/register'
import { RegisterUserStarted } from '../../types/user'
import { registerFailed, registerSucess, userActionTypes } from './actions'

const registerSaga = function* (action: RegisterUserStarted): SagaIterator {
  try {
    const { data } = yield call(register, action.payload)
    if (data) return registerSucess(data)
  } catch (err: unknown) {
    registerFailed({ error: 'Borken' })
  }
}

const userSagas = function* (): SagaIterator<void> {
  yield takeEvery(userActionTypes.userRegisterStarted, registerSaga)
}

export default userSagas
