import React from 'react';
import './SearchBar.scss';
// import search from '../imgs/search.svg';

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

        //clear input field
        this.setState({artist: ''});
        
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input className="form-input" type="Text" value={this.state.artist} placeholder={this.props.text} onChange={this.onInputChange} />
            </form>   
        )
    }


}

export default SearchBar;