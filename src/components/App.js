import React, { Component } from 'react';
import './App.css';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hello Redux!</h2>
        </div>
        <hr />
        <BookList />
        <hr />
        <BookDetail />
      </div>
    );
  }
}

export default App;
