// the state argument is not the application state, 
// only the state that the reducer is responsible for
export default function(state = null, action) {
  switch(action.type){
    case "BOOK_SELECTED":
      return action.payload;
  }

  return state; // for actions that this function does not care about
}