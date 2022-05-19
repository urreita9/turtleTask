import styles from './RadioContainerHeader.module.css';

export const RadioContainerHeader = () => {
	return (
		<div className={styles.container}>
			<div
				style={{ backgroundImage: `url(/assets/back-arrow.png)` }}
				className={styles.imageBackground}
			></div>
			<div>
				<h2>STATIONS</h2>
			</div>
			<div
				style={{ backgroundImage: `url(/assets/switch.png)` }}
				className={styles.imageBackground}
			></div>
		</div>
	);
};
