import {GET_RANDOM_JOKE, SUCCESS_RANDOM_JOKE, ERROR_RANDOM_JOKE} from '../actions/cnActions';

const initialState = {
    theJoke: '',
    errorMsg: '',
    gettingJoke: false
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_RANDOM_JOKE:
            return {...state, gettingJoke: true};
        case SUCCESS_RANDOM_JOKE:
            return {...state, gettingJoke: false, theJoke: action.payload.value};
        case ERROR_RANDOM_JOKE:
            return {...state, gettingJoke: false, errorMsg: action.payload};
        default:
            return state;
    }
}

