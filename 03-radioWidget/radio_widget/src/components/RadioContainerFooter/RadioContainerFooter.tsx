import styles from './RadioContainerFooter.module.css';
import { useAppSelector } from '../../hooks/hooksRedux';

export const RadioContainerFooter = () => {
	const radio = useAppSelector((state) => state.radio);
	return (
		<div className={styles.container}>
			{radio?.name && (
				<div className={styles.textWrapper}>
					<p className={styles.currentlyPlaying}>CURRENTLY PLAYING</p>
					<div className={styles.text}>{radio.name} FM </div>
				</div>
			)}
		</div>
	);
};
