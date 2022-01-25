import { all, fork } from 'redux-saga/effects'
import userSagas from './user/sagas'

const rootSaga = function* () {
  yield all([fork(userSagas)])
}

export default rootSaga
