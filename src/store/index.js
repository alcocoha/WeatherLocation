import { createStore } from 'redux';
import { city } from '../reducers/city';

const INITIAL_STATE = {
    city: "México, City",
};

export const store = createStore(city, INITIAL_STATE,  
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
