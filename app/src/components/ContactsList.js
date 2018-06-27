import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ContactListItem from './ContactListItem';
import ContactAddListItem from './ContactAddListItem';

const ContactsList = (props) => (
		<List>
			<ContactAddListItem createContact={props.createContact} />
			{
				props.contacts &&
				Object.keys(props.contacts).map(
					contactId => <ContactListItem contact={props.contacts[contactId]} key={contactId} editContact={props.editContact} />
				)
			}
		</List>
);

ContactsList.propTypes = {
	contacts: PropTypes.object,
	createContact: PropTypes.func,
	editContact: PropTypes.func,
};

export default ContactsList;
