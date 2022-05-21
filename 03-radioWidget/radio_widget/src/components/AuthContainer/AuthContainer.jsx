import { useAuth0 } from '@auth0/auth0-react';
import styles from './AuthContainer.module.css';

export const AuthContainer = () => {
	const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();
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
					</>
				) : (
					<h5 className={styles.loggedOut}>Logged out</h5>
				)}
			</div>
		</>
	);
};
