//import React from 'react';  // For functional component
import React, { Component } from 'react'; // For class component
import _ from 'lodash';
import ReactDOM from 'react-dom';


import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCx0qCEcEZcEiCXIGap1jO3Qo9yPpSR3pA';

// Create a new comoponent.
// This component will produce some HTML

// const App = function(){
//   return <div>Hi!</div>;
// }

// Functional component
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

// Class component
class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Surfboards');
  }

  videoSearch(term){
    //YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      //console.log(data);
      //this.setState({ videos: videos });
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term) }, 1000);

    return (
      <div>
        <SearchBar onSearchTermChange = {
        //  term => this.videoSearch(term)
        videoSearch
        }/>

        <VideoDetail video = {
          this.state.selectedVideo
        }/>

        <VideoList 
          onVideoSelect = { 
            selectedVideo => this.setState({selectedVideo})
          } // This function gets passed on as a property to VideoList
          videos = {
            this.state.videos
          } />  {/* passing props */}
      </div>
    );
  }
}




// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

