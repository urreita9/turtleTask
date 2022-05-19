import { configureStore } from '@reduxjs/toolkit';

import radioReducer from '../reducers/radioReducer';

export const store = configureStore({
	reducer: radioReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
