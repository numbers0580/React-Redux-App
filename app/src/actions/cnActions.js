import axios from 'axios';

export const GET_RANDOM_JOKE = 'GET_RANDOM_JOKE';
export const SUCCESS_RANDOM_JOKE = 'SUCCESS_RANDOM_JOKE';
export const ERROR_RANDOM_JOKE = 'ERROR_RANDOM_JOKE';

export const cnJokes = () => dispatch => {
    dispatch({type: GET_RANDOM_JOKE})
    axios.get('https://api.chucknorris.io/jokes/random/')
        .then(cnResponse => {
            console.log('Testing fetched Chuck Norris joke:', cnResponse.data);
            dispatch({type: SUCCESS_RANDOM_JOKE, payload: cnResponse.data});
        })
        .catch(cnError => {
            console.log('Error fetching Chuck Norris jokes from API');
            dispatch({type: ERROR_RANDOM_JOKE, payload: 'Chuck Norris did not give permission to talk about Chuck Norris.'});
        })
};
