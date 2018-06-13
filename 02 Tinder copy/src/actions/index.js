// Action Creators - 
// https://redux.js.org/basics/actions
export function selectBook(book) {
    //console.log("a book was selected: ", book.title);
    // selectBook is an ActionCreator.
    // an object with a type property.
    // It always returns a type, and sometimes contains a payload
    return {
        type: "BOOK_SELECTED",
        payload: book
      };
    }