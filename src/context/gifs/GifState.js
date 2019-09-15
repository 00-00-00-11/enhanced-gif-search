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
const limit = 10;

const GithubState = props => {
    const initalState = {
        gifs: [],
        loading: false
    };

    const [state, dispatch] = useReducer(GifReducer, initalState);

    const searchGifs = async query => {
        setLoading();

        const res = await axios.get(
            url + `/search?q=${query}&key=${apiKey}&limit=${limit}}`
        );

        console.log(res);
    };

    const setLoading = () => dispatch({ type: SET_LOADING });
};
