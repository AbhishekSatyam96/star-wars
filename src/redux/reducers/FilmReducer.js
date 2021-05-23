import { ACTION_TYPES } from '../actions/ActionTypes';
let initialState = {
    filmRecord: []
}

const FilmReducer = (state = initialState, action) => {
    const {
        payload
    } = action;
    switch (action.type) {
        case ACTION_TYPES.GET_CHARACTERS:
            return {
                ...state,
                filmRecord: [...state.filmRecord, payload]
            }
        default:
            return state;
    }
}

export default FilmReducer;