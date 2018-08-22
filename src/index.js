// Get React and ReactDOM:
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCx0qCEcEZcEiCXIGap1jO3Qo9yPpSR3pA';
// const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;

YTSearch({key: API_KEY, term: 'surfboards'},
    function(data){
        console.log(data);
    }
);

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
