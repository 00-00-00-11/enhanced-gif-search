import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';

import Home from './components/Home';

import GifState from './context/gifs/GifState';

const App = () => {
    return (
        <GifState>
            <Container className="App text-center">
                <Home />
            </Container>
        </GifState>
    );
};

export default App;
