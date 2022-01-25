import { SagaIterator } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'
import { getPosts } from '../../services/posts'
import { GetPostsStarted } from '../../types/posts'
import { getPostsFailed, getPostsSucess, postsActionTypes } from './actions'

const getPostsSaga = function* (action: GetPostsStarted): SagaIterator {
  try {
    const { data } = yield call(getPosts, action.payload?.page ?? 0)
    if (data) {
      yield put(getPostsSucess(data))
    }
  } catch (err: unknown) {
    getPostsFailed({ error: 'Borken' })
  }
}

const postsSagas = function* (): SagaIterator<void> {
  yield takeEvery(postsActionTypes.getPostsStarted, getPostsSaga)
}

export default postsSagas
