import { combineReducers } from 'redux';
import BookList_Reducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // combined application state:
  // key   value (reducer)
  //  |      |
  allBooks: BookList_Reducer,   // books[ {title: "Harry Potter'}, {title: 'Javascript'} ]
  activeBook: ActiveBook
  // reducer state values: state.allBooks, state.activbeBook
});

export default rootReducer;
