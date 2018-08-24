import React, { Component } from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index'; // 
import { bindActionCreators } from 'redux';    // 

// Renders list of books. 
// If list item clicked, run clickBook(book)
class BookList extends Component{
  renderList(){
    return this.props.books.map((book) => {
      return(
        <li 
        key={book.title}
        onClick = {() => this.props.clickBook(book)}
        className = "list-group-item">
          {book.title}
        </li>
      );
    });
  }
  // Renders list of books
  render(){
    return(
      <ul className = "list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}


// Converts state to props
function mapStateToProps(state){
  // Whatever is returned will show up as props in BookList
  // > list of books
  return{
    books: state.allBooks
  };
}


// When an event occurs, passes the relevant actions to all components
function mapDispatchToProps(dispatch){
  // eg:
  // Result from selectBook (ie the actions) will be passed to all reducers. 
  // This is done by the 'dispatch' function below
  return bindActionCreators(
    {clickBook: selectBook}, dispatch
  );
}


// Takes a component (BookList) and converts produces a component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);