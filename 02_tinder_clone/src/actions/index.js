export function selectBook(book){
  // console.log('A book has been selected: ', book.title);
  // selectBook is an ActionCreator - returns an action:
  // - an object with a type property
  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
}