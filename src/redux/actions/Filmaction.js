import { ACTION_TYPES } from './ActionTypes';
import axios from 'react-native-axios';

export const getCharacters = (text) => (dispatch) => {
    let url = encodeURI(`https://swapi.dev/api/people/`);
    if(text){
        url = encodeURI(`https://swapi.dev/api/people?search=${text}`)
    }
    axios.get(url)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.GET_CHARACTERS,
                payload: res.data.results
            })
        })
        .catch(err => console.error("err", err))
}