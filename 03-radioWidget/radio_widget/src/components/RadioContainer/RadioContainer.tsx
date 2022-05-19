import styles from './RadioContainer.module.css';
import { RadioContainerHeader } from '../RadioContinerHeader/RadioContainerHeader';
import { RadioContainerBody } from '../RadioContainerBody/RadioContainerBody';
import { RadioContainerFooter } from '../RadioContainerFooter/RadioContainerFooter';

export const RadioContainer = () => {
	return (
		<div className={styles.container}>
			<RadioContainerHeader />
			<RadioContainerBody />
			<RadioContainerFooter />
		</div>
	);
};
