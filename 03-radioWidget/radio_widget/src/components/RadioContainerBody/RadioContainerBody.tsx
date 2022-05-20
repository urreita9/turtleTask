import { RadioStation } from '../RadioStation/RadioStation';
import styles from './RadioContainerBody.module.css';
import { useAppSelector } from '../../hooks/hooksRedux';
import axios from 'axios';
import { useEffect } from 'react';

export const RadioContainerBody = () => {
	const allRadios = useAppSelector((state) => state.allRadios);

	useEffect(() => {
		callApi();
	}, []);

	const callApi = async () => {
		const { data } = await axios.get('http://localhost:8080/api/radios');

		console.log(data);
	};

	return (
		<div className={styles.container}>
			<div className={styles.stations}>
				{allRadios.map(({ name, dial, id, img }) => (
					<RadioStation key={dial} name={name} dial={dial} id={id} img={img} />
				))}
			</div>
		</div>
	);
};
