import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import get from 'lodash/get';

const ContactEditDialog = (props) => (
	<Dialog
		open={props.open}
		onClose={props.handleClose}
		aria-labelledby="form-dialog-title"
		fullWidth
		fullScreen={props.fullScreen}
	>
		<DialogTitle id="form-dialog-title">{props.contact.id ? 'Edit' : 'Create'} Contact</DialogTitle>
		<DialogContent style={{ display: 'flex', flexDirection: 'column' }}>
			<TextField
				margin="dense"
				id="name"
				label="name"
				value={get(props, 'contact.name', '')}
				onChange={props.handlePropertyChange('name')}
				fullWidth
			/>
			<TextField
				margin="dense"
				id="email"
				label="email"
				value={get(props, 'contact.email', '')}
				onChange={props.handlePropertyChange('email')}
				fullWidth
			/>
			<TextField
				margin="dense"
				id="phone"
				label="phone"
				value={get(props, 'contact.phone', '')}
				onChange={props.handlePropertyChange('phone')}
				fullWidth
			/>
		</DialogContent>
		<DialogActions>
			<Button onClick={props.handleClose}>
				Cancel
			</Button>
			{
				props.contact.id ?
					<React.Fragment>
						<Button onClick={props.handleDelete}>
							Delete
						</Button>
						<Button onClick={props.handleSave}>
							Update
						</Button>
					</React.Fragment>:
					<Button onClick={props.handleSave}>
						Create
					</Button>
			}
		</DialogActions>
	</Dialog>
);

ContactEditDialog.propTypes = {
	open: PropTypes.bool,
	contact: PropTypes.object,
	handleClose: PropTypes.func,
	handlePropertyChange: PropTypes.func,
	handleSave: PropTypes.func,
	handleDelete: PropTypes.func,
}

export default withMobileDialog()(ContactEditDialog);
