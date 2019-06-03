import React from 'react';
import 'spectre.css';
import axios from 'axios';

import './App.scss';
import SearchBar from './SearchBar';
import AlbumsCollection from './AlbumsCollection';
import Nav from './Nav';
import SimilarArtist from './SimilarArtist';
import Footer from './Footer';

class App extends React.Component {

    state = {artistID: 0, albums:[], player:'', noData:Boolean, similarArtist: [], searchQ: ''};

    componentDidMount() {
        //whenever the app first loads this is whats first shown to the user
        this.onArtistName('Foster The People');
    }

    onArtistName = async (artist) => {
        this.setState({searchQ: artist})

        // console.log(artist);
        const response = await axios.get('https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/artist', {
            params: {
                q: artist
            }
        });

        if(!(response.data.data.length === 0)) {
            this.setState({noData: false}) 
            this.setState({artistID: response.data.data[0].id});

            const response2 = await axios.get(`https://cors-anywhere.herokuapp.com/http://api.deezer.com/artist/${this.state.artistID}/albums?limit=100`);
            this.setState({albums: response2.data.data});
            console.log(this.state.albums);    

            //remove duplicate albums
            const uniqueAlbums = Array.from(new Set(this.state.albums.map(a => a.title)))
            .map(title => {
            return this.state.albums.find(a => a.title === title)
            })
            this.setState({albums: uniqueAlbums});

            const response4 = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${this.state.artistID}/related?limit=10`);
            this.setState({similarArtist: response4.data.data});
            console.log(this.state.similarArtist);
        }

        else {
            this.setState({noData: true});
        }

        //code for music player
        // this.setState({player: response3.data.html});
        // // console.log();
        // console.log(this.state.player);
  }

  render() {

    let loading;
    if(this.state.artistID > 1 && this.state.albums.length < 1) {
        loading = <div className="loading loading-lg"></div>;
    }

    let wrongArtist;
    if(this.state.noData === true) {
        wrongArtist = <p className="wrong-artist">Woops! We couldn't find an artist by that name, please try again.</p>;
    }

    let showArtists;
    if(this.state.similarArtist.length > 0) {
        showArtists = <h5 className="show-artists">Similar artists to {this.state.searchQ}:</h5>;
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
                            <h1>Search for an artist to have a peak at their discography</h1>

                            <div className="form-group">
                                <SearchBar submit={this.onArtistName} text={this.state.searchQ}/>
                                {wrongArtist}
                                {showArtists}
                                <SimilarArtist artists={this.state.similarArtist} search={this.onArtistName}/>
                            </div>
                                {loading}
                        </div>     
                    </div>
                </div>
                
                <div className="album columns">
                    <div className="column col-10 col-md-10 col-mx-auto">
                        <AlbumsCollection albums={this.state.albums}/>
                    </div>   
                </div>
                {/* {this.state.player.html} */}

                <div className="columns">
                    <div className="column col-10 col-md-10 col-mx-auto">
                        <Footer />
                    </div>
                </div>
            </div>   
        
      )
  }
}

export default App;
