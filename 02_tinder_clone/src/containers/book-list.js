import React, { Component } from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index'; // 
import { bindActionCreators } from 'redux';    // 

class BookList extends Component{
  renderList(){
    return this.props.books.map((book) => {
      return(
        <li key={book.title} className = "list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render(){
    return(
      <ul className = "list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// The following converts the BookList component to a container
function mapStateToProps(state){
  // Whatever is returned will show up as props in BookList
  // > list of books
  return{
    books: state.books
  };
}

function mapDispatchToProps(dispatch){
  // Result from selectBook (ie the actions) will be passed to all reducers. This is done by the 'dispatch' function below
  return bindActionCreators(
    {selectBook: selectBook}, dispatch
  );
}


// 'connect' takes a function (mapStateToProps) and a component (BookList) and produces a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);