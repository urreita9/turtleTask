import styles from './RadioStation.module.css';

interface Props {
	name: string;
	dial: number;
}

export const RadioStation = ({ name, dial }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.text}>{name} FM </div>
			<div className={styles.text}>{dial}</div>
		</div>
	);
};
