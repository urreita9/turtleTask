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
			img: 'https://images.pexels.com/users/avatars/222949529/omar-zetina-840.jpeg?auto=compress&fit=crop&h=256&w=256',
		},
		{
			name: 'Dribbble',
			dial: 101.2,
			id: 2,
			img: 'https://images.pexels.com/users/avatars/218646814/-943.jpeg?auto=compress&fit=crop&h=256&w=256',
		},
		{
			name: 'Doge',
			dial: 99.4,
			id: 3,
			img: 'https://images.pexels.com/users/avatars/87264186/nataliya-melnychuk-156.jpeg?auto=compress&fit=crop&h=60&w=60',
		},
		{
			name: 'Ballads',
			dial: 87.1,
			id: 4,
			img: 'https://images.pexels.com/users/avatars/219873070/alvaro-gil-907.jpeg?auto=compress&fit=crop&h=256&w=256',
		},
		{
			name: 'Maximum',
			dial: 142.2,
			id: 5,
			img: 'https://images.pexels.com/users/avatars/3269296/sies-studio-831.png?auto=compress&fit=crop&h=256&w=256',
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
