import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { contactsSaga } from './sagas';
import rootReducer from './reducer'

export default function configureStore(initialState) {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(sagaMiddleware)
	);
	sagaMiddleware.run(contactsSaga);
	return store;
}
