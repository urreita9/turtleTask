import { ActionType } from '../action-types/action-types';
import { Radio, AllRadios, Action } from '../actions/actions';

interface State {
	allRadios: AllRadios | [];
	radio: Radio | null;
}

const initialState: State = {
	allRadios: [],
	radio: null,
};

const radioReducer = (state: State = initialState, action: Action): State => {
	switch (action.type) {
		case ActionType.GET_RADIOS:
			console.log(action.payload);
			return { ...state, allRadios: action.payload };
		case ActionType.SELECT_RADIO:
			return { ...state, radio: action.payload };
		case ActionType.CLEAN_RADIO:
			return { ...state, radio: null };
		default:
			return state;
	}
};

export default radioReducer;
