import React from 'react';
import 'spectre.css';
import axios from 'axios';

import './App.scss';
import SearchBar from './SearchBar';
import AlbumsCollection from './AlbumsCollection';
import Nav from './Nav';
import SimilarArtist from './SimilarArtist';

class App extends React.Component {

    state = {artistID: 0, albums:[], player:'', noData:Boolean, similarArtist: []};

  onArtistName = async (artist) => {

    // console.log(artist);
    const response = await axios.get('https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/artist', {
        params: {
            q: artist
        }
    });

    if(!(response.data.data.length === 0)) {
        this.setState({noData: false}) 
        this.setState({artistID: response.data.data[0].id});

        const response2 = await axios.get(`https://cors-anywhere.herokuapp.com/http://api.deezer.com/artist/${this.state.artistID}/albums`);
        this.setState({albums: response2.data.data});
        console.log(this.state.albums);    

        const response4 = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${this.state.artistID}/related?limit=10`);
        this.setState({similarArtist: response4.data.data})
        console.log(this.state.similarArtist);
        
    }

    else {
        this.setState({noData: true}) 
    }

    

    //code for music player
    // this.setState({player: response3.data.html});
    // // console.log();
    // console.log(this.state.player);
  }

  render() {

    let idk;
    if(this.state.artistID > 1 && this.state.albums.length < 1) {
        idk = <progress className="progress" max="100"></progress>;
    }

    let wrongArtist;
    if(this.state.noData === true) {
        wrongArtist = <p className="wrong-artist">Woops! We couldn't find an artist by that name, please try again.</p>;
    }

    let showArtists;
    if(this.state.similarArtist.length > 1) {
        showArtists = <h5 className="show-artists">Similar artists:</h5>;
    }

      return (

            <div className="container">
                {/* <div dangerouslySetInnerHTML={{ __html: this.state.player }} /> */}

                <div className="top-half">
                    <div className="nav-top columns">
                        <Nav />
                    </div>

                    <div className="hero-section columns">
                        <div className="column col-10 col-md-10 col-mx-auto">
                            <h1>Musica</h1>

                            <div className="form-group">
                                <SearchBar submit={this.onArtistName}/>
                                {wrongArtist}
                                {showArtists}
                                <SimilarArtist artists={this.state.similarArtist}/>
                            </div>
                            {idk}
                        </div>     
                    </div>
                </div>
                
                <div className="album columns">
                    <div className="column col-10 col-md-10 col-mx-auto">
                       
                        <AlbumsCollection albums={this.state.albums}/>
                    </div>   
                </div>
                {/* {this.state.player.html} */}
            </div>   
        
      )
  }
}

export default App;
