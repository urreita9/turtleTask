import styles from './RadioControls.module.css';
interface Props {
	img: string;
}
export const RadioControls = ({ img }: Props) => {
	return (
		<div className={styles.container}>
			<div
				className={styles.control}
				style={{ backgroundImage: `url(/assets/minus.png)` }}
			></div>
			<div
				className={styles.radioLogo}
				style={{
					backgroundImage: `url(${img})`,
				}}
			></div>
			<div
				className={styles.control}
				style={{ backgroundImage: `url(/assets/plus.png)` }}
			></div>
		</div>
	);
};
