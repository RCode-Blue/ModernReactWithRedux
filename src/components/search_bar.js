import React, { Component } from 'react';


// Functional component
// const SearchBar = () => {
//   return <input />;
// };

// Class-based component
class SearchBar extends Component{
  render(){
    // return <input onChange = {this.onInputChange} />;
    // return <input onChange = {(event) => console.log(event.target.value)} />;
    return <input onChange = {event => console.log(event.target.value)} />;
  }

  // event handler
  // onInputChange(event){
  //   console.log(event.target.value);
  // }
}


export default SearchBar;