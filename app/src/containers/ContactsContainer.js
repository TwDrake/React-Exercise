import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import * as CONSTANTS from '../store/constants';
import * as actions from '../store/actions';
import ContactsList from '../components/ContactsList';
import ContactEditDialog from '../components/ContactEditDialog';
import { parseName, parsePhone } from '../utils';

class ContactsContainer extends React.Component {
	state = {
		editContactDialogOpen: false,
		editContactObj: {},
	}

	componentDidMount() {
		this.props.actions.requestContacts();
	}

	createNewContact = () => {
		this.setState({ editContactDialogOpen: true })
	}

	editContact = (contact) => () => {
		this.setState({ editContactObj: contact, editContactDialogOpen: true });
	}

	updateEditContactProperty = (property) => (evt, value) => {
		this.setState({ editContactObj: { ...this.state.editContactObj, [property]: evt.target.value } });
	}

	saveContact = () => {
		// TODO: Add Validation for required fields, email, phone
		const contactId = this.state.editContactObj.id ? this.state.editContactObj.id : Date.now();
		this.props.actions.saveContact(CONSTANTS.SUCCESS, {
			...this.state.editContactObj,
			id: contactId,
			name: parseName(this.state.editContactObj.name),
			phone: parsePhone(this.state.editContactObj.phone),
		});
		this.closeEditContactDialog();
	}

	deleteContact = () => {
		// TODO: Add Confirmation
		this.props.actions.deleteContact(CONSTANTS.SUCCESS, this.state.editContactObj.id);
		this.closeEditContactDialog();
	}

	closeEditContactDialog = () => this.setState({ editContactObj: {}, editContactDialogOpen: false })

	render() {
		if (this.props.isFetching) return <div>loading...</div>
		if (this.props.fetchingError) return <div>{this.props.fetchingError}</div>
		return (
			<div style={{ height: '100vh', width: 'inherit' }}>
				<AppBar position="absolute" color="default" style={{ width: 'inherit', right: 'auto' }}>
					<Toolbar>
						Contacts
					</Toolbar>
				</AppBar>
				<Paper style={{ overflow: 'auto', maxHeight: '100%', paddingTop: '64px' }}>
					{
						this.props.contacts && <ContactsList contacts={this.props.contacts} editContact={this.editContact} createContact={this.createNewContact} />
					}
				</Paper>
				<ContactEditDialog
					open={this.state.editContactDialogOpen}
					contact={this.state.editContactObj}
					handleClose={this.closeEditContactDialog}
					handlePropertyChange={this.updateEditContactProperty}
					handleSave={this.saveContact}
					handleDelete={this.deleteContact}
				/>
			</div>
		);
	}
}

ContactsContainer.propTypes = {
	contacts: PropTypes.object,
	isFetching: PropTypes.bool,
	fetchingError: PropTypes.string,
	actions: PropTypes.object,
}

const mapStateToProps = (state) => ({
	contacts: state.contacts,
	isFetching: state.isFetching,
	fetchingError: state.fetchingError,
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);