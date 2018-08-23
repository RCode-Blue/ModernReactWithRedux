// Get React and ReactDOM:
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import SearchBar from './components/search_bar';


const API_KEY = '';
// const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;



class App extends Component{
    constructor(props){
        super(props);

        this.state = { 
            videos: [] ,
            selectedVideo: null
        };


        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
                this.setState({ 
                    videos: videos,
                    selectedVideo: videos[2]
                });   // Same as: this.setState({ videos: videos });
            }
        );
    }
    render() {
        return(
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    // 01
                    // onVideoSelect a function 
                    // the function updates the state with the selected video (selectedVideo)
                    // onVideoSelect is passed as a property (prop) to the VideoList component
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})} 
                    videos = {this.state.videos} 
                    />
            </div>
        );
    }
}



ReactDOM.render(<App />, document.querySelector('.container')); // Creates an instance of App and renders it in the 'container' div
