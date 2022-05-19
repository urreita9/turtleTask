import { ActionType } from '../action-types/action-types';
import { Radio, AllRadios, Action } from '../actions/actions';

interface State {
	allRadios: AllRadios;
	radio: Radio | null;
}

const initialState: State = {
	allRadios: [
		{
			name: 'Putin',
			dial: 66.6,
			id: 1,
		},
		{
			name: 'Dribbble',
			dial: 101.2,
			id: 2,
		},
		{
			name: 'Doge',
			dial: 99.4,
			id: 3,
		},
		{
			name: 'Ballads',
			dial: 87.1,
			id: 4,
		},
		{
			name: 'Maximum',
			dial: 142.2,
			id: 5,
		},
	],
	radio: null,
};

const radioReducer = (state: State = initialState, action: Action): State => {
	switch (action.type) {
		case ActionType.SELECT_RADIO:
			return { ...state, radio: action.payload };
		case ActionType.CLEAN_RADIO:
			return { ...state, radio: null };
		default:
			return state;
	}
};

export default radioReducer;
