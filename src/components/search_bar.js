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

    this.state = {term:''};
  }

  render(){
    return (
      <div>
        <input onChange = {event => this.setState({ term: event.target.value })} />  {/* stste gets updated with new value */}
        Value of input: {this.state.term}                                            {/* The updated value is diusplayed */}
      </div>
    );
  }

}


export default SearchBar;