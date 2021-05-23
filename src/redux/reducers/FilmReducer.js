import { ACTION_TYPES } from '../actions/ActionTypes';
let initialState = []

const FilmReducer = (state = initialState, action) => {
    const {
        payload
    } = action;
    switch (action.type) {
        case ACTION_TYPES.GET_CHARACTERS:
            return {
                ...state,
                todoData: [...state.todoData, payload]
            }
        default:
            return state;
    }
}

export default FilmReducer;