import styles from './RadioControls.module.css';

export const RadioControls = () => {
	return (
		<div className={styles.container}>
			<div
				className={styles.control}
				style={{ backgroundImage: `url(/assets/minus.png)` }}
			></div>
			<div
				className={styles.radioLogo}
				style={{
					backgroundImage: `url(https://avatars.githubusercontent.com/u/71611977?v=4)`,
				}}
			></div>
			<div
				className={styles.control}
				style={{ backgroundImage: `url(/assets/plus.png)` }}
			></div>
		</div>
	);
};
