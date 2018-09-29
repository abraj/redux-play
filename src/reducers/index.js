import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';

// The keys in the passed object end up being keys of the application state
const rootReducer = combineReducers({
  books: BooksReducer,
});

export default rootReducer;
