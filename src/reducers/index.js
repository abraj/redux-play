import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';
import ActiveBookReducer from './ActiveBookReducer';

// The keys in the passed object end up being keys of the application state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer,
});

export default rootReducer;
