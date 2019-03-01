import React, { Component } from 'react';
import './videoItem.css'

const VideoItem = (props) => {

    return (

        <div className='video-item item' onClick={() => props.handleVideoSelect(props.video)}>
            <img className='ui image' alt={props.video.snippet.title} src={props.video.snippet.thumbnails.medium.url} />
            <div className='content'>
                <div className='header'> {props.video.snippet.title} </div>

            </div>
        </div>

    );
}

export default VideoItem;