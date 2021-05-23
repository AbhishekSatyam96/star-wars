import { combineReducers } from 'redux';
import FilmReducer from './FilmReducer';

const rootReducer = combineReducers({
    FilmState: FilmReducer 
})

export default rootReducer;