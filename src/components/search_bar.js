import React, { Component } from 'react';


class SearchBar extends React.Component {
  render() {
    return <input onChange={(event) => console.log(event.target.value)} />;
  }
}

export default SearchBar;
