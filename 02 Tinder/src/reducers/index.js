import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

const rootReducer = combineReducers({
  // add a key to the global application state called books
  // books = key = state information     BooksReducer = value of the state = array of books
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
