import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import PersonIcon from '@material-ui/icons/Person';

const ContactListItem = (props) => (
	<ListItem>
		<ListItemAvatar>
			<Avatar>
				<PersonIcon />
			</Avatar>
		</ListItemAvatar>
		<ListItemText
			primary={props.contact.name}
			secondary={<React.Fragment>{props.contact.phone} - {props.contact.email}</React.Fragment>}
		/>
		<ListItemSecondaryAction>
			<IconButton aria-label="Edit" onClick={props.editContact(props.contact)}>
				<EditIcon />
			</IconButton>
		</ListItemSecondaryAction>
	</ListItem>
);

ContactListItem.propTypes = {
	contact: PropTypes.object,
	editContact: PropTypes.func,
};

export default ContactListItem;
