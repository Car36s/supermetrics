import configureStore from 'redux-mock-store'
import rootReducer from '../store/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../store/rootSaga'
import { createStore } from 'redux'
import mergeDeep from 'merge-deep'

const sagaMiddleware = createSagaMiddleware()

const mockStore = configureStore([sagaMiddleware])

// @todo - correct partial state of partial state typing
export const getMockStore = (state: Record<string, any>) => {
  const initialState = createStore(rootReducer).getState()

  const store = mockStore(mergeDeep(initialState, state))

  sagaMiddleware.run(rootSaga)

  return store
}
