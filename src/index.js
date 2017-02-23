import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_Key = 'AIzaSyDoBwOIRgPfUjtxlcUJ5y4NnUczmUOwoWM';

// create a new component. That component will produce html

const App = () => (
  <div>
    <SearchBar />
  </div>
  );


//take the componenet's generated html and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
