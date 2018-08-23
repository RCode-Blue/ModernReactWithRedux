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
      <div className = "search-bar">
        <input 
          value = {this.state.term}
          onChange = {event => this.onInputChange(event.target.value)}
          // onChange = {event => this.setState({ term: event.target.value })} 
        />  
      </div>
    );
  }

  onInputChange(term){
    // Set state with term
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}


export default SearchBar;