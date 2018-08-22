// Get React and ReactDOM:
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list'

const API_KEY = '';
// const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;



class App extends Component{
    constructor(props){
        super(props);

        this.state = { videos: {} };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
                this.setState({ videos });   // Same as: this.setState({ videos: videos });
            }
        );
    }
    render() {
        return(
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}



ReactDOM.render(<App />, document.querySelector('.container')); // Creates an instance of App and renders it in the 'container' div
