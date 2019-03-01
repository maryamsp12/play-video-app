import React, { Component } from 'react';
import VideoItem from './videoItem';

const VideoList = (props) => {
   const renderedList = props.videos.map(video =>{
   return <VideoItem key={video.id.videoId}
                     video={video}
                     handleVideoSelect={props.handleVideoSelect}/>
    })
    return <div className='ui relaxed divided list'>{renderedList}</div>
}
 
export default VideoList;
       