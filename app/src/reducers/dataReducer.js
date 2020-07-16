import {SP_ETF, FINANCE_URL, MY_KEY, SYMBOL_LOOKUP, SANDP_SUCCESS, TICKER_SUCCESS, SYMBOL_FAILURE} from '../secret/constants';

const initialState = {
    name: 'NFLX',
    spPrices: {},
    tickerPrices: {},
    error: '',
    gettingData: false
};

const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case SYMBOL_LOOKUP:
            return {...state, gettingData: true};
        case SANDP_SUCCESS:
            return {...state, gettingData: false, spPrices: action.payload};
        case TICKER_SUCCESS:
            return {...state, gettingData: false, tickerPrices: action.payload};
        case SYMBOL_FAILURE:
            return {...state, gettingData: false, error: action.payload};
        default:
            return state;
    };
};

export default dataReducer;