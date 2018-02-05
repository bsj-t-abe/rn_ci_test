import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import { rootSaga } from './sagas';

import { createLogger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(
      sagaMiddleware,
      createLogger(),
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
