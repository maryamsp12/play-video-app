import React, { Component } from 'react';
import SearchBar from './components/searchBar';
import youtube from './components/youtube';
import VideoList from './components/videoList';
import SelectedVideo from './components/video';


import './App.css';


class App extends Component {
    state={ videos: [], selectedVideo:null }

componentDidMount(){
  this.handleSubmit('buildings')
}

handleSubmit = async (term) => {  
  console.log(term)
  const response = await youtube.get('/search', {
   params: { 
   q: term}
   })
  this.setState({ videos: response.data.items,
                  selectedVideo: response.data.items[0] })      
    }
  
  handleVideoSelect = (video) => {
    console.log('video', video)
    this.setState({selectedVideo: video})
  }
  

  render() {
    return (
           
        <div className="ui container">
        <SearchBar handleSubmit={this.handleSubmit}/>
        
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
                <SelectedVideo video={this.state.selectedVideo}/></div>
            <div className='five wide column'>
                <VideoList videos={this.state.videos}
                           handleVideoSelect={this.handleVideoSelect} />
            </div>
              </div>
                </div></div>
    );
  }
}

export default App;
