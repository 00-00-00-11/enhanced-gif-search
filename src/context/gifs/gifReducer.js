import {
    SEARCH_GIFS,
    SEARCH_POPULAR_GIFS,
    SEARCH_RANDOM_GIFS,
    SET_LOADING
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case SEARCH_GIFS:
        case SEARCH_POPULAR_GIFS:
        case SEARCH_RANDOM_GIFS:
            return {
                ...state,
                gifs: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};
