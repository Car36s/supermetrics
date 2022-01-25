import { all, fork } from 'redux-saga/effects'
import postsSagas from './posts/sagas'
import userSagas from './user/sagas'

const rootSaga = function* () {
  yield all([fork(userSagas), fork(postsSagas)])
}

export default rootSaga
