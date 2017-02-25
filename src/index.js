import _ from 'lodash';
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
    this.videoSearch('my little pony');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);
    return (
  <div>
    <SearchBar onSearchTermChange={videoSearch} />
    <VideoDetail video={this.state.selectedVideo} />
    <VideoList
    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
    videos={this.state.videos}
    />
  </div>
  );
 }
}

//take the componenet's generated html and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
