// Functional component
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
        <VideoListItem 
            onVideoSelect = { props.onVideoSelect }  
            // onVideoSelect is passed in from 'onVideoSelect in index.js
            // and is now on to VideoListItem
            key = {video.etag} 
            video={video} />
        );
    });

    return(
        <ul className = "col-md-4 list-group">
            {/* { props.videos.length } */}
            { videoItems }
        </ul>
    );
};

export default VideoList;