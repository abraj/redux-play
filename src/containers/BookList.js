import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook, fetchBooks } from '../actions';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} onClick={() => this.props.selectBook(book)}>{book.title}</li>
      );
    });
  }

  render() {
    if (this.props.books.length === 0) {
      return <button onClick={() => this.props.fetchBooks()}>Fetch Books!</button>;
    }

    return (
      <div>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectBook,
    fetchBooks,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
