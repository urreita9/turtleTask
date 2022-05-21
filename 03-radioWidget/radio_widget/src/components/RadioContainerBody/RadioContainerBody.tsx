import { RadioStation } from '../RadioStation/RadioStation';
import styles from './RadioContainerBody.module.css';
import { useAppSelector, useAppDispatch } from '../../hooks/hooksRedux';
import axios from 'axios';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getRadios } from '../../redux/actions/actions';
import { postRadio } from '../../helpers/axiosRequests';

export const RadioContainerBody = () => {
	const allRadios = useAppSelector((state) => state.allRadios);
	const dispatch = useAppDispatch();
	const { getAccessTokenSilently } = useAuth0();
	useEffect(() => {
		dispatch(getRadios());
		// callApi();
	}, []);

	//Example for posting Radio
	const callApi = async () => {
		const token = await getAccessTokenSilently();
		postRadio(token, {
			name: 'Turtle',
			dial: 101.2,
			img: 'http://extension.unicen.edu.ar/blog/wp-content/uploads/2016/02/logo.png',
		});
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
