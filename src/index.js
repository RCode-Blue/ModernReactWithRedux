// Get React and ReactDOM:
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = '';
// const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;

// Create new component. 
// This component should produce some HTML
// WHAT
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );  // JSX
}


// Take this component's generated HTML and put it
// on the page (in the DOM)
// WHERE
ReactDOM.render(<App />, document.querySelector('.container')); // Creates an instance of App and renders it in the 'container' div
