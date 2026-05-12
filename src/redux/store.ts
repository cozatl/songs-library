import { createStore } from 'redux';
import rootReducer from './index';
//File converted to Typescript to type store and use it correctly in other files
export const store = createStore(rootReducer);
//Typing RootState to avoid errors in Typescript files
export type RootState = ReturnType<typeof store.getState>;

export default store;