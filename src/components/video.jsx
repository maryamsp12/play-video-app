import React, { Component } from 'react';

const SelectedVideo = (props) => {
    if (!props.video) {
        return <div>Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`
    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc}
                />
                </div>
                <div className='ui segment' style={{background: 'rgba(34,36,38,.15)'}}>
                <h4 className='ui header'>{props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p>

                </div>
                
                    
                
                </div>
    );
}

export default SelectedVideo;