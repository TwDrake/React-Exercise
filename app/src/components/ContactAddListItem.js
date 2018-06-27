import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';

const ContactAddListItem = (props) => (
	<ListItem button onClick={props.createContact}>
		<ListItemAvatar>
			<Avatar>
				<AddIcon />
			</Avatar>
		</ListItemAvatar>
		<ListItemText primary="Create Contact" style={{ fontStyle: 'italic' }} />
	</ListItem>
);

ContactAddListItem.propTypes = {
	createContact: PropTypes.func,
}

export default ContactAddListItem;
