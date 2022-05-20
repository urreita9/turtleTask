import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

import './App.module.css';
import { AuthContainer } from './components/AuthContainer/AuthContainer';
import { RadioContainer } from './components/RadioContainer/RadioContainer';

function App() {
	const { user } = useAuth0();
	return (
		<div className='App'>
			{user && <RadioContainer />}

			<AuthContainer />
		</div>
	);
}

export default App;
