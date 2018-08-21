// Functional and Class components:
//import React from 'react';

// Class components improved:
import React, { Component }  from 'react'; // Import React and get Component

// Functional component: - Static,  not able to respond to its environment
// const SearchBar = () => {
//     return <input />;  // React.createElement
// };

// Class component:
// class SearchBar extends React.Component{
//     render(){
//         return <input />;
//     }
// }

// Class component improved:
class SearchBar extends Component{
    // Functional components do not have state.  Only class components do
    constructor(props){
    // constructor is called automatially when a new instance of a class is created
        super(props);
        this.state = {term: ''};  // {term: ... is an object
    }


    render(){                       // All classes must have a render() component
        //return <input onChange = {this.onInputChange} />;
        //return <input onChange = {(event) => console.log(event.target.value)} />;

        // always use this.setState() to change state.
        // NEVER USE this.state.term = event.target.value
        return (
        <div className = "search-bar">
            {/* Controlled Component - value is set by state */}
            <input 
                value = {
                    this.state.term
                }

                onChange = {
                    // event => this.setState({ term: event.target.value }) } />
                    event => this.onInputChange(event.target.value)} />
                

                {/* if you remove the line above, there will be nothing in the search bar when you type */}
                {/* Initial value of value is ''
                When characters are typed in, term's value changes. value remains '' at this stage.
                When setState is called, the component re-renders,  and at this point value is now updated. */}


                {/* <p>Value of the input:</p> <p>{this.state.term}</p> */}
        </div>
        );
    }

    // onInputChange(event) {
    //     console.log(event.target.value);
        
    // }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}


export default SearchBar;  
// Any file in the application that imports SearchBar (ie. index.js)
//   will get a SearchBar component