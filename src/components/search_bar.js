import React, { Component } from 'react';


// Functional component
// const SearchBar = () => {
//   return <input />;
// };

// Component
class SearchBar extends Component{
  // Constructor function
  constructor(props){
    super(props);

    this.state = {term:''};   // the initial value of "value" in render() below is ''
  }

  render(){
    return (
      // Controlled component
      <div>
        <input 
          // 02 upon rendering, value gets updated to new value of this.state.term
          value = {this.state.term}
          // 01 re-renders when there is a change
          onChange = {event => this.setState({ term: event.target.value })} />  
      </div>
    );
  }

}


export default SearchBar;