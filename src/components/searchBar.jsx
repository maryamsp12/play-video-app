import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term : '' }

    handleInputChange = event =>{        
        this.setState({ term: event.target.value})  }

    handleFormSubmit = event => {
        event.preventDefault()
        this.props.handleSubmit(this.state.term)  }

    render() { 
        return ( 
            <div className="ui segment search-bar" style={{marginTop:'30px', background: 'rgba(34,36,38,.15)'}}>
            <form onSubmit={this.handleFormSubmit} className="ui form">
            <div className="field">
                <label>Video Search</label>
                <input type="text"
                       value={this.state.term}
                       onChange={this.handleInputChange} />
            </div>
            </form>
            </div>
         );
    }
}
 
export default SearchBar;