import * as CONSTANTS from './constants';

export const initialContactsState = {
	isFetching: false,
	fetchingError: '',
	contacts: {},
};

function contactsReducer(state = initialContactsState, action) {
	switch(action.type) {
		case CONSTANTS.REQUEST_CONTACTS:
			if (!action.status) return { ...state, isFetching: true, fetchingError: '' };
			if (action.status === CONSTANTS.SUCCESS) return { ...state, contacts: action.payload, isFetching: false };
			if (action.status === CONSTANTS.ERROR) return { ...state, fetchingError: action.payload, isFetching: false };
			return state;
		case CONSTANTS.SAVE_CONTACT:
			if (!action.status) return { ...state, isFetching: true, fetchingError: '' };
			if (action.status === CONSTANTS.SUCCESS) return {
				...state,
				isFetching: false,
				contacts: {
					...state.contacts,
					[action.payload.id]: action.payload
				},
			};
			if (action.status === CONSTANTS.ERROR) return { ...state, fetchingError: action.payload, isFetching: false };
			return state;
		case CONSTANTS.DELETE_CONTACT:
			if (!action.status) return { ...state, isFetching: true, fetchingError: '' };
			if (action.status === CONSTANTS.SUCCESS) {
				delete state.contacts[action.payload];
				return { ...state, isFetching: false };
			}
			if (action.status === CONSTANTS.ERROR) return { ...state, fetchingError: action.payload, isFetching: false };
			return state;
		default:
			return state;
	}
}

export default contactsReducer;
