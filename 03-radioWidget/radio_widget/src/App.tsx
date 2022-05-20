import React from 'react';

import './App.module.css';
import { AuthContainer } from './components/AuthContainer/AuthContainer';
import { RadioContainer } from './components/RadioContainer/RadioContainer';

function App() {
	return (
		<div className='App'>
			<RadioContainer />

			<AuthContainer />
		</div>
	);
}

export default App;
