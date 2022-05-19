import styles from './RadioContainer.module.css';
import { RadioContainerHeader } from '../RadioContinerHeader/RadioContainerHeader';
import { RadioContainerBody } from '../RadioContainerBody/RadioContainerBody';

export const RadioContainer = () => {
	return (
		<div className={styles.container}>
			<RadioContainerHeader />
			<RadioContainerBody />
		</div>
	);
};
