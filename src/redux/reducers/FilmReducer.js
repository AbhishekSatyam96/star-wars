import { ACTION_TYPES } from '../actions/ActionTypes';
let initialState = {
    filmRecord: [],
    charDetails: []
}

const FilmReducer = (state = initialState, action) => {
    const {
        payload
    } = action;
    switch (action.type) {
        case ACTION_TYPES.GET_CHARACTERS:
            return {
                ...state,
                filmRecord: payload
            }
        case ACTION_TYPES.CHARACTERS_DETAILS:
            return{
                ...state,
                charDetails: payload
            }
        default:
            return state;
    }
}

export default FilmReducer;