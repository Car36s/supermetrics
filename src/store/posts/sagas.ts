import { SagaIterator } from 'redux-saga'
import { call, put, select, takeEvery } from 'redux-saga/effects'
import { getPosts } from '../../services/posts'
import { GetPostsStarted } from '../../types/posts'
import { registerStarted } from '../user/actions'
import { userSelector } from '../user/selectors'
import { getPostsFailed, getPostsSucess, postsActionTypes } from './actions'

const getPostsSaga = function* (action: GetPostsStarted): SagaIterator {
  try {
    const { data, error } = yield call(getPosts, action.payload?.page ?? 0)

    if (data) {
      yield put(getPostsSucess(data))
      // If user token expired, try fetch new one
    } else if (error?.message === 'Invalid SL Token') {
      const { email, name } = yield select(userSelector)
      /** @todo - infinite loop if registration succeeds but posts fetch keeps returning above error message */
      yield put(registerStarted({ email, name }))
    }
  } catch (err: unknown) {
    getPostsFailed({ error: 'Borken' })
  }
}

const postsSagas = function* (): SagaIterator<void> {
  yield takeEvery(postsActionTypes.getPostsStarted, getPostsSaga)
}

export default postsSagas
