import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import styles from './AuthContainer.module.css';

export const AuthContainer = () => {
	const {
		loginWithPopup,
		logout,
		user,
		isAuthenticated,
		getAccessTokenSilently,
	} = useAuth0();
	const [token, setToken] = useState('');
	useEffect(() => {
		if (isAuthenticated) {
			getToken();
		}
	}, [isAuthenticated]);

	const getToken = async () => {
		setToken(await getAccessTokenSilently());
	};
	return (
		<>
			<div className={styles.container}>
				<button className={styles.btn} onClick={loginWithPopup}>
					Login
				</button>
				<button className={styles.btn} onClick={logout}>
					Logout
				</button>
			</div>

			<div>
				{isAuthenticated ? (
					<>
						<h5 className={styles.loggedIn}>Logged in</h5>
						<pre style={{ color: 'white' }}>
							{JSON.stringify(user, null, 2)}
						</pre>
						<h3>Token</h3>
						<h4>Copy & paste in postman (Headers)</h4>
						<h5 style={{ wordBreak: 'break-all' }}>
							"authorization" // "Bearer {token}"
						</h5>
					</>
				) : (
					<h5 className={styles.loggedOut}>Logged out</h5>
				)}
			</div>
		</>
	);
};
