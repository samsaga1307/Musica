import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {

    state = {artist: ''};

    onInputChange = (e) => {
        //get whats being typed into the input
        // console.log(e.target.value);
        this.setState({artist: e.target.value});
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        //Function passed in from app
        this.props.submit(this.state.artist);
        
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input className="form-input" type="Text" placeholder="Enter an artist to have a peak at their discography" onChange={this.onInputChange} />
            </form>   
        )
    }


}

export default SearchBar;