import { RadioStation } from '../RadioStation/RadioStation';
import styles from './RadioContainerBody.module.css';

export const RadioContainerBody = () => {
	const radios = [
		{
			name: 'Putin',
			dial: 66.6,
		},
		{
			name: 'Dribbble',
			dial: 101.2,
		},
		{
			name: 'Doge',
			dial: 99.4,
		},
		{
			name: 'Ballads',
			dial: 87.1,
		},
		{
			name: 'Maximum',
			dial: 142.2,
		},
	];
	return (
		<div className={styles.container}>
			{radios.map(({ name, dial }) => (
				<RadioStation key={dial} name={name} dial={dial} />
			))}
		</div>
	);
};
