import React, { Component } from 'react';
import SearchBar from './components/searchBar';
import youtube from './components/youtube';
import VideoList from './components/videoList';
import './App.css';


class App extends Component {
    state={ videos: [] }

handleSubmit = async (term) => {  
  console.log(term)
  const response = await youtube.get('/search', {
   params: { 
   q: term}
   })
  this.setState({ videos: response.data.items})      
    }
  

  render() {
    return (
      <div className="App">
        <header className="ui container">
          <SearchBar handleSubmit={this.handleSubmit}/>
          <VideoList videos={this.state.videos}/>
        </header>
      </div>
    );
  }
}

export default App;
