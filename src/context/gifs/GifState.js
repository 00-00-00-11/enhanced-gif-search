import React, { useReducer } from 'react';
import axios from 'axios';
import GifContext from './gifContext';
import GifReducer from './gifReducer';

import {
    SEARCH_GIFS,
    SEARCH_POPULAR_GIFS,
    SEARCH_RANDOM_GIFS,
    SET_LOADING
} from '../types';

const url = 'https://api.tenor.com/v1';
const apiKey = 'CQ58OJ4GZ9WQ';

const GifState = props => {
    const initalState = {
        gifs: [],
        loading: false
    };

    const [state, dispatch] = useReducer(GifReducer, initalState);

    const searchGifs = async query => {
        setLoading();

        const res = await axios.get(
            url + `/search?q=${query}&key=${apiKey}&limit=10`
        );

        var data = res.data.results;
        var temp = [];
        for (var i = 0; i < data.length; i++) {
            temp.push(data[i]['media'][0]['gif']['url']);
        }

        console.log(temp);

        dispatch({
            type: SEARCH_GIFS,
            payload: temp
        });
    };

    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <GifContext.Provider
            value={{
                gifs: state.gifs,
                loading: state.loading,
                searchGifs
            }}
        >
            {props.children}
        </GifContext.Provider>
    );
};

export default GifState;
