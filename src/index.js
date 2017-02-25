import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDoBwOIRgPfUjtxlcUJ5y4NnUczmUOwoWM';


// create a new component. That component will produce html

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: 'My little pony' }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
  <div>
    <SearchBar />
    <VideoDetail video={this.state.selectedVideo} />
    <VideoList videos={this.state.videos} />
  </div>
  );
 }
}

//take the componenet's generated html and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
