import React, { Fragment, useContext, useState } from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';

import GifContext from '../context/gifs/gifContext';

const Home = () => {
    const gifContext = useContext(GifContext);

    const [text, setText] = useState('');

    const onChange = e => {
        e.preventDefault();
        setText(e.target.value);
        gifContext.searchGifs(e.target.value);
    };

    return (
        <Fragment>
            <h1>Gif Search!</h1>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id="searchSymbol">
                        <i className="fas fa-search" />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Start typing to search!"
                    value={text}
                    onChange={onChange}
                    aria-describedby="searchSymbol"
                />
            </InputGroup>
            <ListGroup>
                {!gifContext.loading &&
                    gifContext.gifs.length > 0 &&
                    gifContext.gifs.map((gif, indx) => (
                        <ListGroup.Item key={indx}>
                            <img src={gif}></img>
                        </ListGroup.Item>
                    ))}
            </ListGroup>
        </Fragment>
    );
};

export default Home;
