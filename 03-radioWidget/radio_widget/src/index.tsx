import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Auth0Provider
			domain='dev-efi5m3ft.us.auth0.com'
			clientId='6UPUU5CtTNh8jtP1ZhLnOqIJpWUstdGd'
			redirectUri={window.location.origin}
		>
			<Provider store={store}>
				<App />
			</Provider>
		</Auth0Provider>
	</React.StrictMode>
);
