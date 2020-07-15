import axios from 'axios';
import {SP_ETF, FINANCE_URL, MY_KEY, SYMBOL_LOOKUP, SYMBOL_SUCCESS, SYMBOL_FAILURE} from '../secret/constants';

export const getTicker = () => dispatch => {
    dispatch({type: SYMBOL_LOOKUP})
    axios.all([axios.get(SP_ETF), axios.get(`${FINANCE_URL}NFLX${MY_KEY}`)])
        .then(axios.spread((...responses) => {
            console.log('API responses:', responses)
            console.log('Data from S&P ETF:', responses[0].data);
            console.log('Data from Netflix:', responses[1].data);
        }))
        .catch(error => {
            console.log('Error fetching symbols from API');
            dispatch({type: SYMBOL_FAILURE, payload: 'API response error for S&P ETF and NFLX'})
        })






        // .then(response => {
        //     console.log('Data from S&P ETF', response.data);
        //     dispatch({type: SYMBOL_SUCCESS, payload: response.data})
        // })
};

