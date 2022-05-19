import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooksRedux';
import { cleanRadio, Radio, selectRadio } from '../../redux/actions/actions';
import { RadioControls } from '../RadioControls/RadioControls';
import styles from './RadioStation.module.css';

export const RadioStation = ({ name, dial, id, img }: Radio) => {
	const dispatch = useAppDispatch();
	const radio = useAppSelector((state) => state.radio);

	return (
		<div
			// style={{ backgroundColor: back ? 'red' : 'blue' }}
			onClick={() => {
				if (radio?.id === id) {
					dispatch(cleanRadio());
					return;
				}
				dispatch(
					selectRadio({
						name,
						dial,
						id,
						img,
					})
				);
			}}
		>
			{radio?.id === id && <RadioControls img={img} />}
			<div className={styles.container}>
				<div className={styles.text}>{name} FM </div>
				<div className={styles.text}>{dial}</div>
			</div>
		</div>
	);
};
