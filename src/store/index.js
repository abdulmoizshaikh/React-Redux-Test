// Import : Dependencies
import {
  legacy_createStore as createStote,
  applyMiddleware,
  compose,
} from 'redux';

import createSagaMiddleware from 'redux-saga';

// Imports: Redux Root Reducer
import rootReducer from './reducers';

// Imports: Redux Root Saga
import { rootSaga } from './saga';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStote(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export { store };
