import React from 'react';
import './App.css';

import Home from './components/Home';

import GifState from './context/gifs/GifState';

const App = () => {
    return (
        <GifState>
            <div className="App">
                <Home />
            </div>
        </GifState>
    );
};

export default App;
