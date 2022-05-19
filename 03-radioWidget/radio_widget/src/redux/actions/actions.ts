import { ActionType } from '../action-types/action-types';

export interface Action {
	type: string;
	payload: Radio | null;
}

export interface Radio {
	name: string;
	dial: number;
	id: number;
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
