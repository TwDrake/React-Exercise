import React, { Component } from 'react';
import ContactsContainer from './containers/ContactsContainer';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App" style={{ margin: 'auto', width: '500px' }}>
				<ContactsContainer />
			</div>
		);
	}
}

export default App;
