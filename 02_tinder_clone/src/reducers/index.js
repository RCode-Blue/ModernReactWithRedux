import { combineReducers } from 'redux';
import BookList_Reducer from './reducer_books';


const rootReducer = combineReducers({
  // combined application state:
  // key   value
  //  |      |
  books: BookList_Reducer   // books[ {title: "Harry Potter'}, {title: 'Javascript'} ]
});

export default rootReducer;
