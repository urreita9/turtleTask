import { RadioStation } from '../RadioStation/RadioStation';
import styles from './RadioContainerBody.module.css';
import { useAppSelector } from '../../hooks/hooksRedux';

export const RadioContainerBody = () => {
	const allRadios = useAppSelector((state) => state.allRadios);
	return (
		<div className={styles.container}>
			<div className={styles.stations}>
				{allRadios.map(({ name, dial, id }) => (
					<RadioStation key={dial} name={name} dial={dial} id={id} />
				))}
			</div>
		</div>
	);
};
