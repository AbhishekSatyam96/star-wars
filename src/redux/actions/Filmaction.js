import { ACTION_TYPES } from './ActionTypes';
import axios from 'react-native-axios';

export const getCharacters = () => (dispatch) => {
    // dispatch({
    //     type: ACTION_TYPES.GET_CHARACTERS,
    //     payload: 
    // })
    axios.get('https://swapi.dev/api/people/')
        .then(res => {
            dispatch({
                type: ACTION_TYPES.GET_CHARACTERS,
                payload: res.data.results
            })
        })
        .catch(err => console.error("err", err))
}