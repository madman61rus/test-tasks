import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, compose(composeEnhancers(applyMiddleware(sagaMiddleware))));

sagaMiddleware.run(rootSaga);

export default store;
