import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ActionType } from '../action-types/action-types';
import { RootState } from '../store/store';

export interface Action {
	type: string;
	payload: any;
}

export interface Radio {
	name: string;
	dial: number;
	id: number;
	img: string;
}
export interface AllRadios extends Array<Radio> {}

export const selectRadio = (radio: Radio): Action => ({
	type: ActionType.SELECT_RADIO,
	payload: radio,
});

export const cleanRadio = (): Action => ({
	type: ActionType.CLEAN_RADIO,
	payload: null,
});

export const getRadios =
	(): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
		const { data } = await axios.get(
			'https://turtlechallenge.herokuapp.com/api/radios'
		);

		dispatch({
			type: ActionType.GET_RADIOS,
			payload: data.radios,
		});
	};
