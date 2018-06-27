import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import { mapContactsToId } from '../utils';
import * as CONSTANTS from './constants';
import * as actions from './actions';

const requestConfig = {
	baseURL: 'http://localhost:4000',
};

export function* requestContacts(action) {
	if (action.status) return;
	try {
		const response = yield call(axios.get, '/contacts', requestConfig);
		yield put(actions.requestContacts(CONSTANTS.SUCCESS, mapContactsToId(response.data.contacts)));
	} catch (err) {
		yield put(actions.requestContacts(CONSTANTS.ERROR, 'An unknown error occured.'));
	}
}

export function* contactsSaga() {
	yield takeEvery(CONSTANTS.REQUEST_CONTACTS, requestContacts)
}