import { useAuth0 } from '@auth0/auth0-react';
import styles from './AuthContainer.module.css';

export const AuthContainer = () => {
	const { loginWithPopup, logout, user } = useAuth0();
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
				{user ? (
					<>
						<h5 style={{ fontSize: 25, textAlign: 'center', color: '#2EC750' }}>
							Logged in
						</h5>
						<pre style={{ color: 'white' }}>
							{JSON.stringify(user, null, 2)}
						</pre>
					</>
				) : (
					<h5 style={{ fontSize: 25, textAlign: 'center', color: '#B30B00' }}>
						Logged out
					</h5>
				)}
			</div>
		</>
	);
};
