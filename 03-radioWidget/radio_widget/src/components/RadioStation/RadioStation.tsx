import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooksRedux';
import { cleanRadio, selectRadio } from '../../redux/actions/actions';
import { RadioControls } from '../RadioControls/RadioControls';
import styles from './RadioStation.module.css';

interface Props {
	name: string;
	dial: number;
	id: number;
}

export const RadioStation = ({ name, dial, id }: Props) => {
	const dispatch = useAppDispatch();
	const radio = useAppSelector((state) => state.radio);

	return (
		<div
			// style={{ backgroundColor: back ? 'red' : 'blue' }}
			onClick={() => {
				if (radio?.name === name) {
					dispatch(cleanRadio());
					return;
				}
				dispatch(
					selectRadio({
						name,
						dial,
						id,
					})
				);
			}}
		>
			{radio?.name === name && <RadioControls />}
			<div className={styles.container}>
				<div className={styles.text}>{name} FM </div>
				<div className={styles.text}>{dial}</div>
			</div>
		</div>
	);
};
