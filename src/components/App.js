import React, { Component } from 'react';
import './App.css';
import BookList from '../containers/BookList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hello Redux!</h2>
        </div>
        <hr />
        <BookList />
      </div>
    );
  }
}

export default App;
