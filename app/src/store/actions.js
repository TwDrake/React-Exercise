import * as CONSTANTS from './constants';

export function requestContacts(status, payload) {
	return {
		type: CONSTANTS.REQUEST_CONTACTS,
		status,
		payload,
	};
}

export function saveContact(status, payload) {
	return {
		type: CONSTANTS.SAVE_CONTACT,
		status,
		payload,
	}
}

export function deleteContact(status, payload) {
	return {
		type: CONSTANTS.DELETE_CONTACT,
		status,
		payload,
	}
}
